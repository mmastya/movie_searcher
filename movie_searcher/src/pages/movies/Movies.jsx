import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../../stores/Store";
import { observer } from "mobx-react-lite";
import { Films } from "../../components/Films";
import "../movies/Movies.scss";
import "../../blocks/toggle-list.scss";
import "../../blocks/movies-list.scss";
import "../../blocks/button.scss";

import { Select } from "antd";

const { Option } = Select;

export const Movies = observer(() => {
  const { search, allTags, selectedTags } = store;

  useEffect(() => {
    store.init();
    store.showFavorites(false);
  }, []);

  const filterBySearch = event => {
    store.setSearch(event.target.value);
  };

  const filterByTags = tags => {
    store.setTags(tags);
  };

  return (
    <div className="movies-block">
      Страница Фильмы
      <ul className="movies-block__toggle-list toggle-list">
        <li className="toggle-list__item toggle-list__item--active">
          <Link className="toggle-list__item-link" to="/">
            Фильмы
          </Link>
        </li>
        <li className="toggle-list__item">
          <Link className="toggle-list__item-link" to="/favorites">
            Избранное
          </Link>
        </li>
      </ul>
      <form className="movies-block__form">
        <input
          className="movies-block__form-input"
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={filterBySearch}
        ></input>
        <Select
          className="movies-block__form-select"
          placeholder="Please select"
          mode="multiple"
          style={{ width: "100%" }}
          value={Array.from(selectedTags)}
          onChange={filterByTags}
        >
          {allTags.map(tag => {
            return (
              <Option value={tag} key={tag}>
                {tag}
              </Option>
            );
          })}
        </Select>
      </form>
      <div className="movies-block__movies-list">
        <Films />
      </div>
    </div>
  );
});
