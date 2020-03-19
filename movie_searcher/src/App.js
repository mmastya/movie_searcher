import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Movies } from './pages/Movies';
import { Bookmarkers } from './pages/Bookmarkers';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Movies} />
      <Route path="/bookmarkers" component={Bookmarkers} />
    </Router>
  );
}

export default App;
