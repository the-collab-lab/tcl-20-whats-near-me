import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationsContextProvider from './context/LocationsContext';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import './App.css';
import LoadingIcon from './components/LoadingIcon';

function App() {
  return (
    <Router>
      <LocationsContextProvider>
        <Switch>
          <Route exact path="/">
            <LoadingIcon />
            <Map />
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
      </LocationsContextProvider>
    </Router>
  );
}

export default App;
