import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationsContextProvider from './context/LocationsContext';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <LocationsContextProvider>
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
      </LocationsContextProvider>
    </Router>
  );
}

export default App;
