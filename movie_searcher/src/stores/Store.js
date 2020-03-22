import { observable, action, configure } from "mobx";
import { films } from "../dataSource/index";
import { tags } from "../dataSource/index";
import * as uuid from "uuid";

configure({ enforceActions: "observed" });

export const store = observable(
  {
    isInit: false,
    allFilms: [],
    allTags: [],
    selectedTags: new Set(),
    search: "",
    limit: 15,
    offset: 0,
    favorites: new Set(),
    onlyFavorites: false,
    get films() {
      return this.allFilms.filter(film => {
        if (this.onlyFavorites) {
          return this.favorites.has(film.id);
        }

        const indexOfBySearch = film.title.indexOf(this.search) !== -1;

        if (this.selectedTags.size > 0) {
          const findBySelectedTags = film.tags.find(tag => {
            return this.selectedTags.has(tag);
          });

          return indexOfBySearch && findBySelectedTags;
        }

        return indexOfBySearch;
      });
    },

    init() {
      if (this.isInit) {
        return;
      }

      try {
        let localAllFilms = localStorage.getItem("films");
        let favorites = localStorage.getItem("favorites");

        if (localAllFilms) {
          this.allFilms = JSON.parse(localAllFilms);
        } else {
          this.allFilms = films.map(film => {
            return {
              ...film,
              id: uuid.v4()
            };
          });

          localStorage.setItem("films", JSON.stringify(this.allFilms));
        }

        this.allTags = tags;

        if (favorites) {
          favorites = JSON.parse(favorites);

          if (Array.isArray(favorites)) {
            this.favorites = new Set(favorites);
          }
        }
      } catch (error) {
        console.error(error);
      }

      this.isInit = true;
    },
    setSearch(search) {
      this.search = search;
    },
    setTags(selectedTags) {
      if (Array.isArray(selectedTags)) {
        this.selectedTags = new Set(selectedTags);
        this.limit = 15;
      } else {
        console.warn("Список выбранных тегов должен быть массивом строк");
      }
    },
    setLimit(currentLimit) {
      this.limit = currentLimit;
    },
    setFavorite(filmID) {
      if (this.favorites.has(filmID)) {
        this.favorites.delete(filmID);
      } else {
        this.favorites.add(filmID);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(Array.from(this.favorites))
      );
    },
    showFavorites(onlyFavorites) {
      this.onlyFavorites = onlyFavorites;
      this.limit = 15;
    }
  },
  {
    init: action,
    setSearch: action,
    setTags: action,
    setLimit: action,
    setFavorite: action,
    showFavorites: action
  }
);
