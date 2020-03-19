import React from 'react';
import { Link } from "react-router-dom";

export function Bookmarkers() {
    return (
        <div>Bookmarkers
            <ul>
                <li>
                    <Link to="/">Фильмы</Link>
                </li>
                <li>
                    <Link to="/bookmarkers">Избранное</Link>
                </li>
            </ul>
            <ul></ul>
        </div>
    )
}