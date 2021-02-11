import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocationsContext } from '../context/LocationsContext';
import './Nav.css';

export default function Nav() {
  const { allowLocation, setAllowLocation, loading } = useContext(
    LocationsContext,
  );

  const handleLocation = () => {
    setAllowLocation(!allowLocation);
  };

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
        <button onClick={handleLocation}>
          {allowLocation ? 'Turn Off Location' : 'Turn On Location'}
        </button>
      </ul>
    </nav>
  );
}
