import React from 'react';
import { Link } from "react-router-dom";

export function Bookmarkers() {
    return (
        <div>Bookmarkers
            <ul className="movies-block__toggle-list toggle-list">
                <li className="toggle-list__item">
                    <Link className="toggle-list__item-link" to="/">Фильмы</Link>
                </li>
                <li className="toggle-list__item">
                    <Link className="toggle-list__item-link" to="/bookmarkers">Избранное</Link>
                </li>
            </ul>
            <ul></ul>
        </div>
    )
}