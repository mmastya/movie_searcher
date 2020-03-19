import React from 'react';
import { Link } from "react-router-dom";

export function Movies() {
    return (
        <div>Movies
            <ul>
                <li>
                    <Link to="/">Фильмы</Link>
                </li>
                <li>
                    <Link to="/bookmarkers">Избранное</Link>
                </li>
            </ul>
            <form>
                <input></input>
                <select></select>
            </form>
            <ul></ul>
        </div>
    )
}