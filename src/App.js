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

  var url = 'https://segdeha.com/api/nearby.php?lat=45&lng=-123.456';

  let locationImages = [];

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let pages = response.query.pages;
      for (const page in pages) {
        console.log(pages[page].title + ': ' + pages[page].thumbnail.source);

        locationImages.push(pages[page].thumbnail.source);
      }
      setLocations(locationImages);
    })
    .catch(function (error) {
      console.log(error);
    });

  useEffect(() => {
    setLocations(locationImages);
  }, locationImages);

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
  );
}

export default App;
