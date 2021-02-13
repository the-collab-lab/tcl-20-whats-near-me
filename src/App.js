import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationsContextProvider from './context/LocationsContext';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <LocationsContextProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBox />
            <Map />
          </Route>
          <Route path="/list">
            <SearchBox />
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
