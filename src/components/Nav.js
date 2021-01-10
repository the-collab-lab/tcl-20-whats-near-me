import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Map</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </nav>
  );
}
