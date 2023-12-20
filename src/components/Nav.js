import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import mapIcon from '@iconify-icons/fa-regular/map';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import bxCurrentLocation from '@iconify-icons/bx/bx-current-location';

import { LocationsContext } from '../context/LocationsContext';
import './Nav.css';
import LoadingIcon from './LoadingIcon';

export default function Nav() {
  const { loading, allowLocation, setAllowLocation } =
    useContext(LocationsContext);

  const handleLocation = () => {
    setAllowLocation(!allowLocation);
  };

  return (
    <>
      <nav>
        <LoadingIcon />
        <div className="nav-left">
          <Link to="/">
            <Icon icon={mapIcon} className="nav-icon" aria-label="map icon" />
          </Link>
          {/* <Link to="/list">
            <Icon icon={unorderedListOutlined} className="nav-icon" aria-label="list icon" />
          </Link> */}
        </div>
        <button
          onClick={handleLocation}
          className={(loading.loading ? 'loading-icon' : '', 'locationButton')}
          aria-label="your location icon"
        >
          {allowLocation ? (
            <Icon
              icon={bxCurrentLocation}
              color="#59221d"
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
            <Icon
              icon={unorderedListOutlined}
              className="nav-icon"
              aria-label="list icon"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
