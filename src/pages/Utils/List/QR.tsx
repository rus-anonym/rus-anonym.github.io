import React, { useEffect, useState } from "react";

import {
    Button,
    Cell,
    Counter,
    Div,
    File,
    FormItem,
    Group,
    Link,
    MiniInfoCell,
    Placeholder,
    Spacing,
    useAdaptivity,
    ViewWidth,
} from "@vkontakte/vkui";
import {
    Icon20ArticleOutline,
    Icon20CalendarOutline,
    Icon24Camera,
    Icon56CameraOffOutline,
    Icon56CameraOutline,
} from "@vkontakte/icons";

import { QrReader } from "react-qr-reader";
import { Result, DecodeHintType } from "@zxing/library";

import { BrowserMultiFormatReader } from "@zxing/browser";

import moment from "moment";
import { ChipsSelect } from "@vkontakte/vkui/dist/unstable";
import { ChipsInputOption } from "@vkontakte/vkui/dist/components/ChipsInput/ChipsInput";
import { useTranslation } from "react-i18next";

const formats = [
    {
        title: "Aztec 2D",
        url: "https://en.wikipedia.org/wiki/Aztec_Code",
    },
    {
        title: "CODABAR 1D",
        url: "https://en.wikipedia.org/wiki/Codabar",
    },
    {
        title: "Code 39 1D",
        url: "https://en.wikipedia.org/wiki/Code_39",
    },
    {
        title: "Code 93 1D",
        url: "https://en.wikipedia.org/wiki/Code_93",
    },
    {
        title: "Code 128 1D",
        url: "https://en.wikipedia.org/wiki/Code_128",
    },
    {
        title: "Data Matrix 2D",
        url: "https://ru.wikipedia.org/wiki/Data_Matrix",
    },
    { title: "EAN-8 1D", url: "https://en.wikipedia.org/wiki/EAN-8" },
    {
        title: "EAN-13 1D",
        url: "https://en.wikipedia.org/wiki/International_Article_Number",
    },
    {
        title: "ITF (Interleaved Two of Five) 1D",
        url: "https://en.wikipedia.org/wiki/Interleaved_2_of_5",
    },
    {
        title: "MaxiCode 2D",
        url: "https://en.wikipedia.org/wiki/MaxiCode",
    },
    {
        title: "PDF417",
        url: "https://en.wikipedia.org/wiki/PDF417",
    },
    {
        title: "QR Code 2D",
        url: "https://en.wikipedia.org/wiki/QR_code",
    },
    {
        title: "RSS 14",
        url: "https://en.wikipedia.org/wiki/GS1_DataBar",
    },
    {
        title: "RSS Expanded",
        url: "https://en.wikipedia.org/wiki/GS1_DataBar",
    },
    {
        title: "UPC-A 1D",
        url: "https://en.wikipedia.org/wiki/Universal_Product_Code",
    },
    {
        title: "UPC-E 1D",
        url: "https://en.wikipedia.org/wiki/Universal_Product_Code",
    },
    {
        title: "UPC/EAN",
        url: "https://en.wikipedia.org/wiki/Universal_Product_Code",
    },
] as const;

const QRInfo = ({ result }: { result: Result }): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.utils.list.qr.result",
    });
    return (
        <>
            <MiniInfoCell
                before={<Icon20ArticleOutline />}
                textWrap="full"
                textLevel="primary"
            >
                {t("text")}: {result.getText()}
            </MiniInfoCell>
            <MiniInfoCell
                before={<Icon20CalendarOutline />}
                textLevel="primary"
            >
                {t("created")}:{" "}
                {moment(result.getTimestamp()).format("DD.MM.YYYY, HH:mm:ss")}
            </MiniInfoCell>
            <Spacing />
            <Cell
                indicator={
                    <Counter mode="primary">{result.getNumBits()}</Counter>
                }
            >
                Raw Bits count
            </Cell>
            <MiniInfoCell
                before={<Icon20ArticleOutline />}
                textWrap="full"
                textLevel="primary"
            >
                Barcode Format:{" "}
                <Link
                    target="_blank"
                    href={formats[result.getBarcodeFormat()].url}
                >
                    {formats[result.getBarcodeFormat()].title}
                </Link>
            </MiniInfoCell>
        </>
    );
};

const ImageLoader = ({
    setResult,
    setFileSelector,
}: {
    setResult: React.Dispatch<React.SetStateAction<Result | null>>;
    setFileSelector: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
    const [file, setFile] = useState<File | null>(null);
    const [placeholder, setPlaceholder] = useState<JSX.Element | null>(null);
    const [selectedFormats, setSelectedFormats] = useState<ChipsInputOption[]>([
        {
            value: "11",
            label: formats[11].title,
        },
    ]);

    const { t } = useTranslation("translation", {
        keyPrefix: "pages.utils.list.qr",
    });

    const proceedFile = async (): Promise<void> => {
        if (!file) {
            return;
        }

        const hints = new Map();
        const selectedFormatsCode = selectedFormats.map((x) => Number(x.value));
        hints.set(DecodeHintType.POSSIBLE_FORMATS, selectedFormatsCode);

        const reader = new BrowserMultiFormatReader(hints);
        try {
            const result = await reader.decodeFromImageUrl(
                URL.createObjectURL(file)
            );
            setResult(result);
        } catch (error) {
            const result = await new BrowserMultiFormatReader()
                .decodeFromImageUrl(URL.createObjectURL(file))
                .catch(() => {
                    setPlaceholder(<Placeholder>{t("notDetect")}</Placeholder>);
                });

            if (result) {
                setPlaceholder(
                    <Placeholder>
                        {t("perhapsYouMeant") + " "}
                        <Link
                            target="_blank"
                            href={formats[result.getBarcodeFormat()].url}
                        >
                            {formats[result.getBarcodeFormat()].title}
                        </Link>
                        ?
                    </Placeholder>
                );
            }
        }
    };

    return (
        <Div>
            <FormItem top={file ? file.name : t("selectFile")}>
                <File
                    before={<Icon24Camera />}
                    controlSize="l"
                    stretched
                    appearance="accent"
                    onChange={(ctx): void => {
                        setFile((ctx.target.files as FileList)[0]);
                    }}
                >
                    {t("choosePhoto")}
                </File>
            </FormItem>
            <FormItem top={t("selectScanFormats")}>
                <ChipsSelect
                    options={formats.map((x, index) => {
                        return { value: index.toString(), label: x.title };
                    })}
                    onChange={setSelectedFormats}
                    closeAfterSelect={false}
                    creatable={false}
                    value={selectedFormats}
                    emptyText={t("emptyFormats")}
                />
            </FormItem>
            <FormItem>
                <Button
                    stretched
                    size="m"
                    disabled={file === null}
                    onClick={(): void => void proceedFile()}
                >
                    {t("scan")}
                </Button>
            </FormItem>
            {placeholder !== null && placeholder}
            <Div>
                <Button
                    before={<Icon24Camera />}
                    size="l"
                    stretched
                    onClick={(): void => setFileSelector(false)}
                >
                    {t("selectCamera")}
                </Button>
            </Div>
        </Div>
    );
};

const QR = (): JSX.Element => {
    const { t } = useTranslation("translation", {
        keyPrefix: "pages.utils.list.qr",
    });

    const [isFileSelector, setFileSelector] = useState(false);
    const [result, setResult] = useState<Result | null>(null);
    const [cameraStatus, setCameraStatus] = useState<
        "initialize" | "error" | "work"
    >("initialize");

    const { viewWidth } = useAdaptivity();
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const requestCamera = async (): Promise<void> => {
        try {
            await navigator.mediaDevices.getUserMedia({ video: true });
            setCameraStatus("work");
        } catch (error) {
            setCameraStatus("error");
        }
    };

    useEffect(() => {
        void requestCamera();
    }, []);

    if (isFileSelector && result === null) {
        return (
            <ImageLoader
                setResult={setResult}
                setFileSelector={setFileSelector}
            />
        );
    }

    if (cameraStatus !== "work" && result === null) {
        return (
            <Group>
                <Placeholder
                    icon={
                        cameraStatus === "error" ? (
                            <Icon56CameraOffOutline />
                        ) : (
                            <Icon56CameraOutline />
                        )
                    }
                    action={
                        <Button
                            size="m"
                            onClick={(): void => void requestCamera()}
                        >
                            {t("requestCamera")}
                        </Button>
                    }
                >
                    {cameraStatus === "error"
                        ? t("errorCameraInitialize")
                        : t("initializeCamera")}
                </Placeholder>
                <Div>
                    <Button
                        size="l"
                        stretched
                        onClick={(): void => setFileSelector(true)}
                    >
                        {t("selectFile")}
                    </Button>
                </Div>
            </Group>
        );
    }

    if (result === null) {
        return (
            <Group>
                <QrReader
                    onResult={(result): void => {
                        // eslint-disable-next-line no-extra-boolean-cast
                        if (!!result) {
                            setResult(result as unknown as Result);
                        }
                    }}
                    constraints={{
                        width: { ideal: 1920 },
                        height: { ideal: 1080 },
                        ...(!isDesktop && {
                            facingMode: { exact: "environment" },
                        }),
                    }}
                />
                <Div>
                    <Button
                        size="l"
                        stretched
                        onClick={(): void => setFileSelector(true)}
                    >
                        {t("selectFile")}
                    </Button>
                </Div>
            </Group>
        );
    }

    return (
        <Group>
            <QRInfo result={result} />
            <Spacing />
            <Div>
                <Button
                    size="l"
                    stretched
                    onClick={(): void => {
                        setResult(null);
                    }}
                >
                    {t("rescan")}
                </Button>
            </Div>
        </Group>
    );
};

export default QR;
