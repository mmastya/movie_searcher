import { observer } from "mobx-react-lite";
import React from "react";
import "../blocks/button.scss";
import "../blocks/movies-list.scss";
import { store } from "../stores/Store";

export const Films = observer(() => {
  const { films, limit, offset, favorites } = store;
  const start = offset;
  const end = limit;

  const showMoreFilms = () => {
    store.setLimit(limit + 15);
  };

  return (
    <>
      <ul className="movies-list">
        {films
          .map(film => {
            return (
              <li className="movies-list__item" key={film.id}>
                {film.title}
                <input
                  type="checkbox"
                  onChange={() => {
                    store.setFavorite(film.id);
                  }}
                  checked={favorites.has(film.id)}
                ></input>
              </li>
            );
          })
          .slice(start, end)}
      </ul>
      {films.length > limit ? (
        <button className="button" onClick={showMoreFilms}>
          Показать еще
        </button>
      ) : null}
    </>
  );
});
