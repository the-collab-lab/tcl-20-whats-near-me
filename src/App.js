import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './pages/Help';
import Map from './pages/Map';
import List from './pages/List';
import Settings from './pages/Settings';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
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
      </div>
    </Router>
  );
}

export default App;
