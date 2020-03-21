import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Store } from "../../stores/Store";
import { observer } from "mobx-react-lite";
import "../movies/Movies.scss";
import "../../blocks/toggle-list.scss";
import "../../blocks/movies-list.scss";

export const Movies = observer (() => {
    const { moviesList, search, allTags, selectedTags} = Store;

    useEffect(() => {
        Store.init();
    }, []);

    const handleChange = (event) => {
        Store.setSearch(event.target.value)
    };

    const selectChange = (event) => {
        Store.setTags(event.target.value)
    }
    console.log(allTags);

    return (
        <div className="movies-block">
            <ul className="movies-block__toggle-list toggle-list">
                <li className="toggle-list__item">
                    <Link className="toggle-list__item-link" to="/">Фильмы</Link>
                </li>
                <li className="toggle-list__item">
                    <Link className="toggle-list__item-link" to="/bookmarkers">Избранное</Link>
                </li>
            </ul>
            <form className="movies-block__form">
                <input
                    className="movies-block__form-input"
                    type="text"
                    placeholder="Поиск"
                    value={search}
                    onChange={handleChange}>
                </input>
                <select className="movies-block__form-select" value={selectedTags} onChange={selectChange} placeholder="Please select">
                    {allTags.map((tag) => {
                        return (
                            <option value={tag} key={tag}>
                                {tag}
                            </option>
                        )
                    })}
                </select>
            </form>
            <ul className="movies-block__movies-list movies-list">
                {moviesList.map(({index,title}) => {
                    return(
                    <li className="movies-list__item" key={index}>{title}</li>
                    )
                })}
            </ul>
        </div>
    )
});