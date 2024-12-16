import {
  Icon24Camera,
  Icon24Copy,
  Icon24RefreshOutline,
  Icon24WarningTriangleOutline,
} from "@vkontakte/icons";
import {
  Button,
  ButtonGroup,
  Div,
  File,
  FormItem,
  FormLayoutGroup,
  Group,
  Input,
  Link,
  Slider,
  Snackbar,
  Textarea,
} from "@vkontakte/vkui";
import { copyImageToClipboard } from "copy-image-clipboard";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Demotivator = (): JSX.Element => {
  const [titleText, setTitleText] = useState("");
  const [lowerText, setLowerText] = useState("");
  const [titleTextSize, setTitleTextSize] = useState(64);
  const [lowerTextSize, setLowerTextSize] = useState(32);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);
  const [imagePreviewSrc, setImagePreviewSrc] = useState<string | null>(null);

  const { t } = useTranslation("translation", {
    keyPrefix: "pages.utils.list.demotivator",
  });

  const isDemotivatorRendered = useMemo(() => {
    const noText = titleText === "" && lowerText === "";

    if (noText) {
      setImagePreviewSrc(imageSrc);
    }

    return !(noText || imageSrc === null);
  }, [titleText, lowerText, imageSrc]);

  const render = (): void => {
    if (!isDemotivatorRendered) {
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
      alpha: false,
    }) as CanvasRenderingContext2D;
    canvas.height = 10000;
    canvas.width = 1000;

    const PADDING = 100;
    const PADDING_TOP = 80;
    const BORDER_PADDING = 14;
    const space = 24;
    const textSpacing = 18;
    const titleSpacing = textSpacing + titleTextSize;
    const lowerTextSpacing = textSpacing / 1.7 + lowerTextSize;

    const getWrappedText = ({
      ctx,
      text,
      maxWidth,
      font,
    }: {
      ctx: CanvasRenderingContext2D;
      text: string;
      maxWidth: number;
      font: string;
    }): string[] => {
      const words = text.split(" ");
      const lines = [];
      let currentLine = words[0];

      ctx.font = font;

      for (let i = 1; i < words.length; ++i) {
        const word = words[i];
        const width = ctx.measureText(currentLine + " " + word).width;

        if (width < maxWidth) {
          currentLine += " " + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }

      lines.push(currentLine);
      return lines;
    };

    void (async () => {
      const maxTextWidth = canvas.width - PADDING * 2;

      const image = new Image();
      image.src = imageSrc as string;
      await new Promise((r) => (image.onload = r));

      const imageWidth = canvas.width - PADDING * 2;
      const imageHeight = (image.height * imageWidth) / image.width;

      const textStartingYPosition =
        imageHeight + PADDING_TOP * 1.3 + BORDER_PADDING * 2;
      const wrappedTitleLines = getWrappedText({
        ctx,
        text: titleText,
        maxWidth: maxTextWidth,
        font: `${titleTextSize}px Times New Roman`,
      });
      const wrappedLowerLines = getWrappedText({
        ctx,
        text: lowerText,
        maxWidth: maxTextWidth,
        font: `${lowerTextSize}px Roboto`,
      });

      const canvasComputedHeight =
        PADDING_TOP * 2 +
        imageHeight +
        BORDER_PADDING * 2 +
        space * 2 +
        (wrappedTitleLines.length * titleSpacing -
          titleSpacing +
          titleTextSize) +
        (lowerText
          ? wrappedLowerLines.length * lowerTextSpacing -
            lowerTextSpacing +
            lowerTextSize
          : -(space + titleSpacing - titleTextSize));
      canvas.height = canvasComputedHeight;

      ctx.fillStyle = "black";
      ctx.fillRect(-0.5, -0.5, canvas.width, canvas.height);

      ctx.drawImage(image, PADDING, PADDING_TOP, imageWidth, imageHeight);

      const borderPos = [
        PADDING - BORDER_PADDING,
        PADDING_TOP - BORDER_PADDING,
        imageWidth + BORDER_PADDING * 2,
        imageHeight + BORDER_PADDING * 2,
      ];
      ctx.rect(borderPos[0], borderPos[1], borderPos[2], borderPos[3]);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.font = `${titleTextSize}px Times New Roman`;
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      wrappedTitleLines.forEach((e, i) => {
        ctx.fillText(
          e,
          canvas.width / 2,
          textStartingYPosition + i * titleSpacing
        );
      });

      if (lowerText) {
        ctx.font = `${lowerTextSize}px Roboto`;
        ctx.textBaseline = "top";
        wrappedLowerLines.forEach((e, i) => {
          const y =
            textStartingYPosition +
            space +
            wrappedTitleLines.length * titleSpacing +
            i * lowerTextSpacing;
          ctx.fillText(e, canvas.width / 2, y);
        });
      }

      setImagePreviewSrc(canvas.toDataURL());
    })();
  };

  const onPasteHandler = (event: ClipboardEvent): void => {
    event.preventDefault();
    const items = event.clipboardData?.items;

    if (!items) {
      return;
    }

    let imageFound = false;

    for (const index in items) {
      const item = items[index];
      if (item.kind === "file") {
        const blob = item.getAsFile();

        if (blob) {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (reader.result) {
              setImageSrc(reader.result.toString());
              setImagePreviewSrc(reader.result.toString());
            }
          };
          reader.readAsDataURL(blob);
          imageFound = true;
        }
      }
    }

    if (!imageFound) {
      setSnackbar(
        <Snackbar
          before={<Icon24WarningTriangleOutline role="alert" />}
          onClose={(): void => setSnackbar(null)}
        >
          {t("notFoundClipboardImage")}
        </Snackbar>
      );
    }
  };

  useEffect(() => {
    document.addEventListener("paste", onPasteHandler);

    return () => {
      document.removeEventListener("paste", onPasteHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(render, [
    titleText,
    lowerText,
    titleTextSize,
    lowerTextSize,
    imageSrc,
    isDemotivatorRendered,
  ]);

  return (
    <Group
      description={
        <>
          {`${t("basedOn")} `}
          <Link target="_blank" href="https://github.com/jarvis394/cubebot">
            cubebot
          </Link>{" "}
          ({`${t("author")} `}
          <Link target="_blank" href="https://github.com/jarvis394">
            jarvis394
          </Link>
          )
        </>
      }
    >
      <form>
        <FormLayoutGroup mode="horizontal">
          <FormItem top={t("title")}>
            <Input
              multiple
              value={titleText}
              onChange={(event) => setTitleText(event.target.value)}
            />
          </FormItem>
          <FormItem top={t("fontSize")} bottom={`${titleTextSize}px`}>
            <Slider
              min={24}
              max={128}
              step={1}
              value={titleTextSize}
              onChange={(number) => setTitleTextSize(number)}
            />
          </FormItem>
        </FormLayoutGroup>

        <FormLayoutGroup mode="horizontal">
          <FormItem top={t("subtitle")}>
            <Textarea
              value={lowerText}
              onChange={(event) => setLowerText(event.target.value)}
            />
          </FormItem>
          <FormItem top={t("fontSize")} bottom={`${lowerTextSize}px`}>
            <Slider
              min={12}
              max={64}
              step={1}
              value={lowerTextSize}
              onChange={(number) => setLowerTextSize(number)}
            />
          </FormItem>
        </FormLayoutGroup>

        {imageSrc === null && (
          <FormItem top={t("uploadImage")}>
            <File
              before={<Icon24Camera role="presentation" />}
              size="m"
              accept=".jpg, .jpeg, .png"
              onChange={(event): void => {
                if (!event.target.files || event.target.files.length === 0) {
                  return;
                }

                const url = URL.createObjectURL(event.target.files[0]);

                setImageSrc(url);
                setImagePreviewSrc(url);
              }}
            >
              {t("openGallery")}
            </File>
          </FormItem>
        )}

        {isDemotivatorRendered && (
          <Div>
            <ButtonGroup stretched>
              <Button
                before={<Icon24Copy />}
                size="l"
                onClick={(): void => {
                  void copyImageToClipboard(imagePreviewSrc as string)
                    .then(() => {
                      setSnackbar(
                        <Snackbar onClose={(): void => setSnackbar(null)}>
                          {t("copiedToClipboard")}
                        </Snackbar>
                      );
                    })
                    .catch(() => {
                      const link = document.createElement("a");
                      link.download = "demotivator.jpeg";
                      link.href = imagePreviewSrc as string;
                      link.click();
                      link.remove();

                      setSnackbar(
                        <Snackbar onClose={(): void => setSnackbar(null)}>
                          {t("savedOnDevice")}
                        </Snackbar>
                      );
                    });
                }}
                stretched
                appearance="accent"
              >
                {t("copy")}
              </Button>
              <Button
                before={<Icon24RefreshOutline />}
                size="l"
                onClick={(): void => {
                  setImageSrc(null);
                  setImagePreviewSrc(null);
                }}
                stretched
                appearance="neutral"
              >
                {t("reset")}
              </Button>
            </ButtonGroup>
          </Div>
        )}
      </form>

      {imagePreviewSrc !== null && (
        <Div>
          <img
            style={{
              display: "block",
              width: "100%",
              borderRadius: "3px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={imagePreviewSrc}
            alt=""
          />
        </Div>
      )}
      {snackbar !== null && snackbar}
    </Group>
  );
};

export default Demotivator;
