import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationsContextProvider from './context/LocationsContext';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <LocationsContextProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
            <Map />
          </Route>
          <Route path="/list">
            <Search />
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
