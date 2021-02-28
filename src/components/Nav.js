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
  const { loading, allowLocation, setAllowLocation } = useContext(
    LocationsContext,
  );

  const handleLocation = () => {
    setAllowLocation(!allowLocation);
  };

  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/">
            <Icon icon={mapIcon} className="nav-icon" aria-label="map-icon" />
          </Link>
          <Link to="/list">
            <Icon
              icon={unorderedListOutlined}
              className="nav-icon"
              aria-label="list-icon"
            />
          </Link>
        </div>
        <button
          onClick={handleLocation}
          className={(loading.loading ? 'loading-icon' : '', 'locationButton')}
          aria-label="your-location-icon"
        >
          {allowLocation ? (
            <Icon
              icon={bxCurrentLocation}
              color="#FFFFFF"
              id="locationOn"
              height="80px"
              width="33px"
            />
          ) : (
            <Icon
              icon={bxCurrentLocation}
              color="#FFFFFF"
              id="locationOff"
              height="80px"
              width="33px"
            />
          )}
        </button>
        <div className="nav-right">
          <Link to="/settings">
            <Icon
              icon={settingsLine}
              className="nav-icon"
              aria-label="settings-icon"
            />
          </Link>
          <Link to="/help">
            <Icon icon={helpIcon} className="nav-icon" aria-label="help-icon" />
          </Link>
        </div>
      </nav>
      <LoadingMessage />
    </>
  );
}
