import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocationsContext } from '../context/LocationsContext';
import './Nav.css';

export default function Nav() {
  const { allowLocation, setAllowLocation } = useContext(LocationsContext);

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
        {/* Thinking to attaching an onClick function on the li below to stop listening on the users location, would save the last used location as the current location in context  */}
        {/* {userLocation ? (
          <button>Turn Off Location</button>
        ) : ( */}
        <button onClick={handleLocation}>
          {allowLocation ? 'Turn Off Location' : 'Turn On Location'}
        </button>
        {/* )} */}
      </ul>
    </nav>
  );
}
