import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LocationsContextProvider from './context/LocationsContext';
import Help from './pages/Help';
import Header from './components/Header';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import './App.css';
import LoadingIcon from './components/LoadingMessage';

function App() {
  return (
    <Router>
      <LocationsContextProvider>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBox />
            <LoadingIcon />
            <Map />
          </Route>
          <Route path="/list">
            <Header />
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
