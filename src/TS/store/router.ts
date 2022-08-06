import { makeAutoObservable } from "mobx";
import queryString from "query-string";

import EventsEmitter from "eventemitter3";

const MODAL_EVENTS = [
    "onModalOpen",
    "onModalOpened",
    "onModalClose",
    "onModalClosed",
] as const;

interface IEvents {
    on(event: typeof MODAL_EVENTS[number], fn: (modalId: string) => void): this;
    once(
        event: typeof MODAL_EVENTS[number],
        fn: (modalId: string) => void
    ): this;
    emit(event: typeof MODAL_EVENTS[number], modalId: string): boolean;
}

interface IRouterProps {
    activeView: string;
    activePanel: string | null;
    activeModal: string | null;
    events: IEvents & EventsEmitter;
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
            activeModal: null,
            isGlobalLoading: true,
            popout: null,
            events: new EventsEmitter(),
        });
    }

    private static _createDefaultSession(): IRouterProps {
        return {
            activeView: "",
            activePanel: null,
            activeModal: null,
            isGlobalLoading: true,
            popout: null,
            events: new EventsEmitter(),
        };
    }

    private _activeView: string;
    private _activePanel: string | null;
    public activeModal: string | null;

    public isGlobalLoading: boolean;
    public popout: React.ReactNode | null;
    public events: EventsEmitter & IEvents;

    private constructor(params: IRouterProps = Router._createDefaultSession()) {
        this._activeView = params.activeView;
        this._activePanel = params.activePanel;
        this.activeModal = params.activeModal;
        this.isGlobalLoading = params.isGlobalLoading;
        this.popout = params.popout;
        this.events = params.events;

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
