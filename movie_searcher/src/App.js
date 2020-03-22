import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Movies } from './pages/movies/Movies';
import { Favorites } from './pages/favorites/Favorites';
import { films, tags } from "./dataSource";

function App() {
  console.log(films);
  console.log(tags);
  return (
    <Router>
      <Route path={process.env.PUBLIC_URL} exact component={Movies} />
      <Route path={`${process.env.PUBLIC_URL}favorites`} component={Favorites} />
    </Router>
  );
}

export default App;
