import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import mapIcon from '@iconify-icons/fa-regular/map';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import bxCurrentLocation from '@iconify-icons/bx/bx-current-location';
import settingsLine from '@iconify-icons/clarity/settings-line';
import helpIcon from '@iconify-icons/carbon/help';

import { LocationsContext } from '../context/LocationsContext';
import LoadingMessage from '../components/LoadingMessage';
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
          <Link to="/">
            <Icon icon={mapIcon} />
          </Link>
        </li>
        <li>
          <Link to="/list">
            <Icon icon={unorderedListOutlined} />
          </Link>
        </li>
        <button onClick={handleLocation} className="locationButton">
          {allowLocation ? (
            <Icon icon={bxCurrentLocation} id="locationOn" />
          ) : (
            <Icon icon={bxCurrentLocation} id="locationOff" />
          )}
        </button>
        <li>
          <Link to="/settings">
            <Icon icon={settingsLine} />
          </Link>
        </li>
        <li>
          <Link to="/help">
            <Icon icon={helpIcon} />
          </Link>
        </li>
        <LoadingMessage />
      </ul>
    </nav>
  );
}
