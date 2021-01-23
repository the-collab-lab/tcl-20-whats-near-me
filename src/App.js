<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [locations, setLocations] = useState([]);

  const url = 'https://segdeha.com/api/nearby.php?lat=45&lng=-123.456';

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pages = response.query ? response.query.pages : [];
        setLocations(pages);
      })
      .catch(console.log);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Map locations={locations} />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
      <Nav />
    </Router>
>>>>>>> 3ebfb8f0bb093acec50923c22a35f9fc58db400f
  );
}

export default App;
