import { makeAutoObservable } from "mobx";

interface IRouterProps {
    activeView: string;
    activePanel: string | null;
    isGlobalLoading: boolean;
    popout: React.ReactNode | null;
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
            isGlobalLoading: true,
            popout: null,
        });
    }

    private static _createDefaultSession(): IRouterProps {
        return {
            activeView: "",
            activePanel: null,
            isGlobalLoading: true,
            popout: null,
        };
    }

    private _activeView: string;
    private _activePanel: string | null;
    public isGlobalLoading: boolean;
    public popout: React.ReactNode | null = null;

    private constructor(params: IRouterProps = Router._createDefaultSession()) {
        this._activeView = params.activeView;
        this._activePanel = params.activePanel;
        this.isGlobalLoading = params.isGlobalLoading;

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
}

export default Router.load();
