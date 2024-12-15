import { autorun, makeAutoObservable } from "mobx";
import session from "./session";

interface IArticlesFilters {
  isLanguageFilter: boolean;
  isExplicitFilter: boolean;
}

interface IArticlesStorage {
  filters: IArticlesFilters;
}

interface IUtilsSpeedtypeHistoryElement {
  lang: typeof session.language;
  cpm: number;
  errors: number;
  date: number;
}

interface IUtilsStorage {
  filters: {
    isLanguageFilter: boolean;
  };
  storage: {
    speedtype: {
      history: IUtilsSpeedtypeHistoryElement[];
    };
  };
}

interface IStorage {
  articles: IArticlesStorage;
  utils: IUtilsStorage;
}

const defaultStorage: IStorage = {
  articles: {
    filters: {
      isExplicitFilter: true,
      isLanguageFilter: true,
    },
  },
  utils: {
    filters: {
      isLanguageFilter: true,
    },
    storage: {
      speedtype: {
        history: [],
      },
    },
  },
};

class Storage implements IStorage {
  public articles: IArticlesStorage;
  public utils: IUtilsStorage;

  private static _getStorage(): IStorage {
    const oldStorage = localStorage.getItem("storage");

    if (oldStorage !== null) {
      return {
        ...defaultStorage,
        ...(JSON.parse(oldStorage) as IStorage),
      };
    } else {
      return defaultStorage;
    }
  }

  constructor() {
    const storage = Storage._getStorage();
    this.articles = storage.articles;
    this.utils = storage.utils;

    makeAutoObservable(
      this,
      {},
      {
        deep: true,
      }
    );
    autorun(() => {
      localStorage.setItem("storage", JSON.stringify(this));
    });
  }
}

export default new Storage();
