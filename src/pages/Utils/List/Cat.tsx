import React, { useEffect, useState } from "react";
import axios from "axios";

import { Group, Placeholder, Spacing, Spinner } from "@vkontakte/vkui";

import InfiniteScroll from "react-infinite-scroll-component";

const getRandomCat = async (): Promise<string> => {
    const newCat = (
        (await axios.get("https://aws.random.cat/meow")).data as {
            file: string;
        }
    ).file;
    return newCat;
};

const ImageLoader = ({ src: url }: { src: string }): JSX.Element => {
    const [isLoad, setLoad] = useState(true);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            {isLoad && (
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            )}
            <img
                style={{
                    display: isLoad ? "none" : "block",
                    width: "90%",
                    minWidth: "90%",
                    borderRadius: "20px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
                onLoad={(): void => setLoad(false)}
                alt=""
                src={url}
            />
        </div>
    );
};

const CatScroll = (): JSX.Element => {
    const [cats, setCats] = useState<string[]>([]);
    const [isLoading, setLoading] = useState(true);

    const addCat = async (): Promise<void> => {
        setCats([...cats, await getRandomCat()]);
    };

    useEffect(() => {
        void Promise.all([
            addCat(),
            addCat(),
            addCat(),
            addCat(),
            addCat(),
        ]).then(() => setLoading(false));

        return;
    }, []);

    if (isLoading) {
        return (
            <Group>
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            </Group>
        );
    }

    return (
        <Group>
            <InfiniteScroll
                dataLength={cats.length}
                next={addCat}
                hasMore={true}
                loader={
                    <Placeholder>
                        <Spinner size="large" />
                    </Placeholder>
                }
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {cats.map((src, index) => {
                        return (
                            <>
                                <Group
                                    mode="plain"
                                    separator="hide"
                                    style={{ marginTop: "20px" }}
                                    key={src.split("/").pop()}
                                >
                                    <Spacing />
                                    <ImageLoader src={src} />
                                </Group>
                                {index > 0 && index % 50 === 0 && (
                                    <Group
                                        mode="plain"
                                        separator="hide"
                                        style={{ marginTop: "20px" }}
                                    >
                                        <Placeholder header={index} />
                                    </Group>
                                )}
                            </>
                        );
                    })}
                </div>
            </InfiniteScroll>
        </Group>
    );
};

export default CatScroll;
