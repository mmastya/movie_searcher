import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../../stores/Store";
import "../favorites/Favorites.scss";
import "../../blocks/toggle-list.scss";
import { observer } from "mobx-react-lite";
import { Films } from "../../components/Films";

export const Favorites = observer(() => {
  useEffect(() => {
    store.init();
    store.showFavorites(true);
    console.log(11111);
  }, []);

  return (
    <div className="favorites-block">
      Страница закладки
      <ul className="favorites-block__toggle-list toggle-list">
        <li className="toggle-list__item">
          <Link className="toggle-list__item-link" to="/">
            Фильмы
          </Link>
        </li>
        <li className="toggle-list__item toggle-list__item--active">
          <Link className="toggle-list__item-link" to="/favorites">
            Избранное
          </Link>
        </li>
      </ul>
      <Films/>>
    </div>
  );
});
