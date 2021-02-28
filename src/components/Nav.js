import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import mapIcon from '@iconify-icons/fa-regular/map';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import bxCurrentLocation from '@iconify-icons/bx/bx-current-location';
import settingsLine from '@iconify-icons/clarity/settings-line';
import helpIcon from '@iconify-icons/carbon/help';

import { LocationsContext } from '../context/LocationsContext';
import './Nav.css';
import LoadingIcon from './LoadingIcon';

export default function Nav() {
  const { loading, allowLocation, setAllowLocation } = useContext(
    LocationsContext,
  );

  // TODO: Make this async and only toggle after response from api call is returned
  const handleLocation = async () => {
    setAllowLocation(!allowLocation);
  };

  return (
    <>
      <nav>
        <LoadingIcon />
        <div className="nav-left">
          <Link to="/">
            <Icon icon={mapIcon} className="nav-icon" />
          </Link>
          {/* <Link to="/list">
            <Icon icon={unorderedListOutlined} className="nav-icon" />
          </Link> */}
        </div>
        <button
          onClick={handleLocation}
          className={(loading.loading ? 'loading-icon' : '', 'locationButton')}
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
          <Link to="/list">
            <Icon icon={unorderedListOutlined} className="nav-icon" />
          </Link>
          {/* <Link to="/settings">
            <Icon icon={settingsLine} className="nav-icon" />
          </Link>
          <Link to="/help">
            <Icon icon={helpIcon} className="nav-icon" />
          </Link> */}
        </div>
      </nav>
    </>
  );
}
