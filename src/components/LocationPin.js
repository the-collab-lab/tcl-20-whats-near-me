import React from 'react';
import './LocationPin.css';
import { Icon } from '@iconify/react';
import InfoWindow from '../components/InfoWindow.js';
import location12Filled from '@iconify-icons/fluent/location-12-filled';

//$dimesnionKey is the same thing as the key prop passed to this component from Map.js (locationData.pageid)
export default function LocationPin({
  img,
  $dimensionKey,
  locationData,
  showWindow,
  closeWindow,
}) {
  return img ? (
    <>
      <button
        className="pin"
        tabIndex="0"
        aria-label="location pin icon with image"
      >
        <div
          className="pin-fill"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </button>
      {showWindow.id === $dimensionKey ? (
        <InfoWindow
          $dimensionKey={$dimensionKey}
          locationData={locationData}
          closeWindow={closeWindow}
        />
      ) : null}
    </>
  ) : (
    <>
      <Icon
        icon={location12Filled}
        width={24}
        height={24}
        tabIndex="0"
        aria-label="location pin icon"
      ></Icon>
      {showWindow.id === $dimensionKey ? (
        <InfoWindow
          $dimensionKey={$dimensionKey}
          locationData={locationData}
          closeWindow={closeWindow}
        />
      ) : null}
    </>
  );
}
