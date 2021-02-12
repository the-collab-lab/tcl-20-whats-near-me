import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocationsContext } from '../context/LocationsContext';
import './Nav.css';

export default function Nav() {
  const { allowLocation, setAllowLocation } = useContext(LocationsContext);

  // TODO: Make this async and only toggle after response from api call is returned
  const handleLocation = async () => {
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
        {/* Need to handle user turning off location */}
        <button onClick={handleLocation}>
          {allowLocation ? 'Turn Off Location' : 'Turn On Location'}
        </button>
      </ul>
    </nav>
  );
}
