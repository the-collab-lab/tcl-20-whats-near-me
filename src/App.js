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

  const url = 'https://segdeha.com/api/nearby.php?lat=29.951&lng=-90.0715';

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
          <List locations={locations} />
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
  );
}

export default App;
