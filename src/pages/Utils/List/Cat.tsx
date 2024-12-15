import axios from "axios";
import { useEffect, useState } from "react";

import { Group, Placeholder, Spinner } from "@vkontakte/vkui";

import InfiniteScroll from "react-infinite-scroll-component";

const getRandomCat = async (): Promise<string> => {
  const newCat = (
    (await axios.get("https://aws.random.cat/meow")).data as {
      file: string;
    }
  ).file;
  return newCat;
};

const LoadingPlaceholder = (): JSX.Element => {
  return (
    <Placeholder>
      <Spinner size="xl" />
    </Placeholder>
  );
};

const ImageLoader = ({ src: url }: { src: string }): JSX.Element => {
  const [isLoad, setLoad] = useState(true);

  return (
    <>
      {isLoad && <LoadingPlaceholder />}
      <img
        style={{
          display: isLoad ? "none" : "block",
          width: "100%",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onLoad={(): void => setLoad(false)}
        alt=""
        src={url}
      />
    </>
  );
};

const CatScroll = (): JSX.Element => {
  const [cats, setCats] = useState<string[]>([]);
  const [isLoading, setLoading] = useState(true);

  const addCat = async (): Promise<void> => {
    setCats([...cats, await getRandomCat()]);
  };

  useEffect(() => {
    void (async (): Promise<void> => {
      await addCat();
      await addCat();
      await addCat();
      await addCat();
      await addCat();
      setLoading(false);
    })();

    return;
  }, []);

  if (isLoading) {
    return (
      <Group>
        <LoadingPlaceholder />
      </Group>
    );
  }

  return (
    <Group>
      <InfiniteScroll
        dataLength={cats.length}
        next={addCat}
        hasMore={true}
        loader={<LoadingPlaceholder />}
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
                <div
                  style={{
                    width: "90%",
                    marginTop: "20px",
                  }}
                >
                  <ImageLoader src={src} />
                </div>
                {index > 0 && index % 50 === 0 && (
                  <Group mode="plain" separator="hide" style={{}}>
                    <Placeholder title={index} />
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
