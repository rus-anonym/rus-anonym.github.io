import { makeAutoObservable } from "mobx";
import queryString from "query-string";

interface IRouterProps {
    activeView: string;
    activePanel: string | null;
    modals: Modals;
    isGlobalLoading: boolean;
    popout: React.ReactNode | null;
}

class Modals {
    public active: string | null = null;

    private _resolve: ((value: unknown) => void) | null = null;
    private _reject: ((reason: unknown) => void) | null = null;

    private _reset(): void {
        this.active = null;
        this._resolve = null;
        this._reject = null;
    }

    constructor() {
        this._reset();

        makeAutoObservable(this);
    }

    public async open(modalId: string): Promise<unknown> {
        if (this.active !== null) {
            throw new Error("Modal is already open");
        }

        this.active = modalId;

        const promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });

        return promise;
    }

    public resolve(value?: unknown): void {
        if (this._resolve) {
            this._resolve(value);
            this._reset();
        }
    }

    public reject(value?: unknown): void {
        if (this._reject) {
            this._reject(value);
            this._reset();
        }
    }
}

class Router implements IRouterProps {
    public static load(): Router {
        const { hash } = window.location;
        const [url] = hash.split("?");
        const [activeView, activePanel] = url.substring(2).split("/");

        if (!activeView) {
            return new Router();
        }

        return new Router({
            activeView,
            activePanel: activePanel || null,
            modals: new Modals(),
            isGlobalLoading: true,
            popout: null,
        });
    }

    private static _createDefaultSession(): IRouterProps {
        return {
            activeView: "",
            activePanel: null,
            modals: new Modals(),
            isGlobalLoading: true,
            popout: null,
        };
    }

    private _activeView: string;
    private _activePanel: string | null;

    public modals: Modals;
    public isGlobalLoading: boolean;
    public popout: React.ReactNode | null;

    private constructor(params: IRouterProps = Router._createDefaultSession()) {
        this._activeView = params.activeView;
        this._activePanel = params.activePanel;
        this.isGlobalLoading = params.isGlobalLoading;
        this.popout = params.popout;
        this.modals = params.modals;

        makeAutoObservable(this);
    }

    private _updatePath(): void {
        let newHash = "";

        if (this._activeView !== null) {
            newHash += `/${this._activeView}`;
        }
        if (this._activePanel !== null) {
            newHash += `/${this._activePanel}`;
        }

        window.location.hash = newHash;
    }

    public get activeView(): string {
        return this._activeView;
    }

    public set activeView(view: string) {
        this._activeView = view;
        this._activePanel = null;
        this._updatePath();
    }

    public get activePanel(): string | null {
        return this._activePanel;
    }

    public set activePanel(panel: string | null) {
        this._activePanel = panel;
        this._updatePath();
    }

    public get url(): string {
        return window.location.href.split("?")[0];
    }

    public get queryParams(): Record<string, string> {
        const params = window.location.href.split("?")[1];
        return queryString.parse(params) as Record<string, string>;
    }
}

export default Router.load();
