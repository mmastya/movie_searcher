import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Movies } from './pages/movies/Movies';
import { Bookmarkers } from './pages/movies/bookmarkers/Bookmarkers';
import { films, tags } from "./dataSource";

function App() {
  console.log(films);
  console.log(tags);
  return (
    <Router>
      <Route path="/" exact component={Movies} />
      <Route path="/bookmarkers" component={Bookmarkers} />
    </Router>
  );
}

export default App;
