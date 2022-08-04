import React, { Suspense } from "react";
import { Group, Placeholder, Spinner } from "@vkontakte/vkui";

type TLazyImportCallback = () => Promise<{
    default: React.ComponentType<unknown>;
}>;

interface ILazyLoadParams {
    withFallback: boolean;
    fallback: React.ReactNode;
}

const defaultLazyLoadParams: ILazyLoadParams = {
    withFallback: true,
    fallback: (
        <Group>
            <Placeholder>
                <Spinner size="large" />
            </Placeholder>
        </Group>
    ),
};

const lazyLoad = (
    paramsOrImportCallback: Partial<ILazyLoadParams> | TLazyImportCallback,
    ...callbacks: TLazyImportCallback[]
): JSX.Element => {
    let params: ILazyLoadParams;

    if (typeof paramsOrImportCallback !== "object") {
        callbacks.splice(0, 0, paramsOrImportCallback);
        params = defaultLazyLoadParams;
    } else {
        params = { ...defaultLazyLoadParams, ...paramsOrImportCallback };
    }

    const elements = callbacks.map((callback) => React.lazy(callback));

    return (
        <Suspense fallback={params.withFallback && params.fallback}>
            {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
            {elements.map((Component) => {
                return <Component />;
            })}
        </Suspense>
    );
};

export default lazyLoad;
