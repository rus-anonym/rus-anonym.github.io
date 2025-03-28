import { Icon24Camera } from "@vkontakte/icons";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import {
  Button,
  ButtonGroup,
  CellButton,
  ChipsInput,
  File,
  FormItem,
  FormLayoutGroup,
  Group,
  Input,
  Placeholder,
  Progress,
  Snackbar,
  Spacing,
} from "@vkontakte/vkui";
import JSZip from "jszip";
import pica from "pica";
import { useMemo, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import PngIcoConverter from "./PngIcoConverter";

const FaviconGenerator = () => {
  const [source, setSource] = useState<Blob | null>(null);
  const [prefixPath, setPrefixPath] = useState<string>("");
  const [showPrefixPath, setShowPrefixPath] = useState(false);
  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);

  const [progress, setProgress] = useState<number>(0);
  const [isProcess, setIsProcess] = useState(false);

  const [mainSizes, setMainSizes] = useState<number[]>([16, 32, 96]);
  const [androidSizes, setAndroidSizes] = useState<number[]>([
    36, 48, 72, 96, 144, 192,
  ]);
  const [appleSizes, setAppleSizes] = useState<number[]>([
    57, 60, 72, 76, 114, 120, 144, 152, 180,
  ]);
  const [msSizes, setMsSizes] = useState([70, 144, 150, 310]);
  const manifest = useMemo(() => {
    return {
      sizes: androidSizes.map((x) => {
        return {
          src:
            (showPrefixPath ? prefixPath : "") +
            `/icons/android-icon-${x}-${x}.png`,
          sizes: `${x}x${x}`,
          type: "image/png",
        };
      }),
    };
  }, [androidSizes, prefixPath, showPrefixPath]);

  const html = useMemo(() => {
    const arr: string[] = [];

    for (const size of appleSizes) {
      arr.push(
        `<link rel="apple-touch-icon" sizes="${size}x${size}" href="${
          showPrefixPath ? prefixPath : ""
        }/icons/apple-icon-${size}x${size}.png">`
      );
    }

    for (const size of mainSizes.reverse()) {
      arr.push(
        `<link rel="icon" type="image/png" sizes="${size}x${size}" href="${
          showPrefixPath ? prefixPath : ""
        }/icons/favicon-${size}x${size}.png">`
      );
    }

    const msIconSize = msSizes[Math.round((msSizes.length - 1) / 2)];
    arr.push(
      `<link rel="manifest" href="${
        showPrefixPath ? prefixPath : ""
      }/manifest.json">`,
      `<meta name="msapplication-TileColor" content="#ffffff">`,
      `<meta name="msapplication-TileImage" content="${
        showPrefixPath ? prefixPath : ""
      }/icons/ms-icon-${msIconSize}x${msIconSize}.png">`,
      `<meta name="theme-color" content="#ffffff">`
    );

    return arr.join("\n");
  }, [msSizes, showPrefixPath, prefixPath, appleSizes, mainSizes]);

  const xml = useMemo(() => {
    const arr = ["<browserconfig>", "\t<msapplication>", "\t\t<tile>"];

    for (const size of msSizes) {
      arr.push(
        `\t\t\t<square${size}x${size}logo src="${
          showPrefixPath ? prefixPath : ""
        }/ms-icon-${size}x${size}.png"/>`
      );
    }
    arr.push(
      "\t\t\t<TileColor>#ffffff</TileColor>",
      "\t\t</tile>",
      "\t</msapplication>",
      "</browserconfig>"
    );

    return arr.join("\n");
  }, [prefixPath, msSizes, showPrefixPath]);

  const convertToSize = async (source: Blob, size: number): Promise<Blob> => {
    const sourceContainer = await createImageBitmap(source);
    const pic = pica();
    const resize = pic.resize.bind(pic);
    const toBlob = pic.toBlob.bind(pic);
    const container = document.createElement("canvas");
    container.width = size;
    container.height = size;
    const resized = await resize(sourceContainer, container);
    return toBlob(resized, "image/png", 1);
  };

  const getArchive = async (): Promise<string> => {
    if (source === null) {
      return "";
    }

    setProgress(10);
    const converter = new PngIcoConverter();
    const ico = await converter.convertToBlobAsync([
      {
        png: await convertToSize(source, 32),
      },
    ]);
    setProgress(15);

    const zip = new JSZip();
    zip.file("favicon.ico", ico);
    zip.file("manifest.json", JSON.stringify(manifest, null, "\t"));
    zip.file("browserconfig.xml", xml);
    const icons = zip.folder("icons")!;

    setProgress(25);

    let currentProgress = 25;
    const progressStep =
      50 /
      (mainSizes.length +
        appleSizes.length +
        androidSizes.length +
        msSizes.length);

    for (const size of mainSizes) {
      icons.file(
        `favicon-${size}x${size}.png`,
        await convertToSize(source, size)
      );
      setProgress((currentProgress += progressStep));
    }

    for (const size of appleSizes) {
      icons.file(
        `apple-icon-${size}x${size}.png`,
        await convertToSize(source, size)
      );
      setProgress((currentProgress += progressStep));
    }

    for (const size of androidSizes) {
      icons.file(
        `android-icon-${size}x${size}.png`,
        await convertToSize(source, size)
      );
      setProgress((currentProgress += progressStep));
    }

    for (const size of msSizes) {
      icons.file(
        `ms-icon-${size}x${size}.png`,
        await convertToSize(source, size)
      );
      setProgress((currentProgress += progressStep));
    }

    setProgress(75);
    const archive = await zip.generateAsync({ type: "blob" });
    setProgress(85);
    return URL.createObjectURL(archive);
  };

  if (source === null) {
    return (
      <Group>
        <Placeholder
          title="Favicon generator"
          noPadding
          action={
            <FormItem htmlFor="image">
              <File
                before={<Icon24Camera role="presentation" />}
                size="m"
                accept="image/png"
                onChange={(event) => {
                  if (!event.target.files || event.target.files.length === 0) {
                    return;
                  }

                  setSource(event.target.files[0]);
                }}
              >
                Select PNG
              </File>
            </FormItem>
          }
        />
      </Group>
    );
  }

  return (
    <Group>
      <form>
        {!showPrefixPath ? (
          <CellButton onClick={() => setShowPrefixPath(true)}>
            Set prefix path
          </CellButton>
        ) : (
          <FormLayoutGroup
            mode="horizontal"
            removable
            onRemove={() => setShowPrefixPath(false)}
          >
            <FormItem top="Prefix path" htmlFor="prefix-path">
              <Input
                id="prefix-path"
                onChange={(event) => setPrefixPath(event.target.value)}
              />
            </FormItem>
          </FormLayoutGroup>
        )}
        <FormItem top="Main sizes">
          <ChipsInput
            id="main-sizes"
            placeholder="Введите значения"
            allowClearButton
            value={mainSizes.map((size) => {
              return {
                label: `${size}x${size}`,
                value: size,
              };
            })}
            onChange={(values) => {
              if (
                values.some(
                  (x) =>
                    x.value < 4 ||
                    x.value >= 2048 ||
                    Number.isNaN(parseInt(x.value as unknown as string))
                )
              ) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Available sizes from 4 to 2048
                  </Snackbar>
                );
                return;
              }

              if (values.length === 0) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Min 1 element
                  </Snackbar>
                );
                return;
              }

              setMainSizes([...new Set(values.map((x) => Number(x.value)))]);
            }}
          />
        </FormItem>
        <FormItem top="Apple sizes">
          <ChipsInput
            id="apple-sizes"
            allowClearButton
            value={appleSizes.map((size) => {
              return {
                label: `${size}x${size}`,
                value: size,
              };
            })}
            onChange={(values) => {
              if (
                values.some(
                  (x) =>
                    x.value < 4 ||
                    x.value >= 2048 ||
                    Number.isNaN(parseInt(x.value as unknown as string))
                )
              ) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Available sizes from 4 to 2048
                  </Snackbar>
                );
                return;
              }

              if (values.length === 0) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Min 1 element
                  </Snackbar>
                );
                return;
              }

              setAppleSizes([...new Set(values.map((x) => Number(x.value)))]);
            }}
          />
        </FormItem>
        <FormItem top="Android sizes">
          <ChipsInput
            id="android-sizes"
            allowClearButton
            value={androidSizes.map((size) => {
              return {
                label: `${size}x${size}`,
                value: size,
              };
            })}
            onChange={(values) => {
              if (
                values.some(
                  (x) =>
                    x.value < 4 ||
                    x.value >= 2048 ||
                    Number.isNaN(parseInt(x.value as unknown as string))
                )
              ) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Available sizes from 4 to 2048
                  </Snackbar>
                );
                return;
              }

              if (values.length === 0) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Min 1 element
                  </Snackbar>
                );
                return;
              }

              setAndroidSizes([...new Set(values.map((x) => Number(x.value)))]);
            }}
          />
        </FormItem>
        <FormItem top="Microsoft sizes">
          <ChipsInput
            id="ms-sizes"
            allowClearButton
            value={msSizes.map((size) => {
              return {
                label: `${size}x${size}`,
                value: size,
              };
            })}
            onChange={(values) => {
              if (
                values.some(
                  (x) =>
                    x.value < 4 ||
                    x.value >= 2048 ||
                    Number.isNaN(parseInt(x.value as unknown as string))
                )
              ) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Available sizes from 4 to 2048
                  </Snackbar>
                );
                return;
              }

              if (values.length === 0) {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    Min 1 element
                  </Snackbar>
                );
                return;
              }

              setMsSizes([...new Set(values.map((x) => Number(x.value)))]);
            }}
          />
        </FormItem>
      </form>
      {isProcess && <Progress value={progress} height={5} />}
      <Spacing />
      <ButtonGroup align="center" stretched>
        <Button
          size="l"
          disabled={isProcess}
          loading={isProcess}
          onClick={() => {
            void (async () => {
              setIsProcess(true);
              const a = document.createElement("a");
              setProgress(5);
              a.href = await getArchive();
              setProgress(95);
              a.download = "favicon.zip";
              a.click();
              a.remove();
              setIsProcess(false);
              setProgress(0);
            })();
          }}
        >
          Convert
        </Button>
        <Button
          size="l"
          onClick={() => {
            void (async () => {
              void copyTextToClipboard(html).then(() => {
                setSnackbar(
                  <Snackbar onClose={(): void => setSnackbar(null)}>
                    HTML-code copied to clipboard
                  </Snackbar>
                );
              });
            })();
          }}
        >
          Copy HTML
        </Button>
      </ButtonGroup>
      <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {html}
      </SyntaxHighlighter>
      {snackbar}
    </Group>
  );
};

export default FaviconGenerator;
