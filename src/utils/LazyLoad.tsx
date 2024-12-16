import { Group, Placeholder, Spinner } from "@vkontakte/vkui";
import React, { Suspense, useMemo } from "react";

type TLazyImportCallback = () => Promise<{
  default: React.ComponentType<unknown>;
}>;

interface ILazyLoadParams {
  delay: number;
  useCache: boolean;
  withFallback: boolean;
  fallback: React.ReactNode;
}

const defaultLazyLoadParams: ILazyLoadParams = {
  delay: 0,
  useCache: true,
  withFallback: true,
  fallback: (
    <Group separator="hide">
      <Placeholder>
        <Spinner size="xl" />
      </Placeholder>
    </Group>
  ),
};

const LazyLoadComponent = ({
  params,
  callbacks,
}: {
  params?: Partial<ILazyLoadParams>;
  callbacks: TLazyImportCallback[];
}): JSX.Element => {
  const options: ILazyLoadParams = params
    ? {
        ...defaultLazyLoadParams,
        ...params,
      }
    : defaultLazyLoadParams;

  if (options.delay > 0) {
    callbacks = callbacks.map((callback) => {
      return async () => {
        const [moduleExports] = await Promise.all([
          callback(),
          new Promise((resolve) => setTimeout(resolve, options.delay)),
        ]);
        return moduleExports;
      };
    });
  }

  const elements = options.useCache
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useMemo(
        () => callbacks.map((callback) => React.lazy(callback)),
        [callbacks]
      )
    : callbacks.map((callback) => React.lazy(callback));

  return (
    <Suspense fallback={options.withFallback && options.fallback}>
      {elements.map((Component) => {
        return <Component />;
      })}
    </Suspense>
  );
};

export default LazyLoadComponent;
