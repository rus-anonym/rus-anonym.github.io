import { makeAutoObservable } from "mobx";
import i18n from "../i18n";

interface ISession {
    theme: "light" | "dark" | "auto";
    language: "en" | "ru";
}

class Session {
    public static load(): Session {
        const oldSession = localStorage.getItem("session");

        if (oldSession !== null) {
            return new Session(JSON.parse(oldSession) as ISession);
        } else {
            return new Session();
        }
    }

    public save(): void {
        return localStorage.setItem("session", JSON.stringify(this._raw));
    }

    private get _raw(): ISession {
        return {
            theme: this._theme,
            language: this._language,
        };
    }

    private static _createDefaultSession(): ISession {
        const languages = ["en", "ru"] as const;
        const language = languages.find((lang) =>
            new RegExp(lang).test(navigator.language)
        );

        return {
            theme: "auto",
            language: language || "en",
        };
    }

    private constructor(params: ISession = Session._createDefaultSession()) {
        this._theme = params.theme;
        this._language = params.language;

        document.documentElement.setAttribute("lang", this.language);

        makeAutoObservable(this);
        this.save();
    }

    private _theme: "light" | "dark" | "auto";
    private _language: "en" | "ru";

    public get theme(): "light" | "dark" {
        if (this._theme === "auto") {
            return window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        } else {
            return this._theme;
        }
    }

    public set theme(theme: "light" | "dark" | "auto") {
        this._theme = theme;
        this.save();
    }

    public get language(): "en" | "ru" {
        return this._language;
    }

    public set language(language: "en" | "ru") {
        document.documentElement.setAttribute("lang", language);
        this._language = language;
        void i18n.changeLanguage(this._language);
        this.save();
    }
}

export default Session.load();
