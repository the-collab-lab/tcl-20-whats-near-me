import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import { Icon } from '@iconify/react';
import location12Filled from '@iconify-icons/fluent/location-12-filled';
import './Map.css';
import LocationPin from '../components/LocationPin.js';

const location = {
  lat: 45,
  lng: -123.456,
};

const zoomLevel = 12;

export default function Map({ locations }) {
  const [showWindow, setShowWindow] = useState(false);

  const handleWindow = () => {
    setShowWindow(!showWindow);
    console.log(`state set to ${showWindow}`);
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
        {locations &&
          locations.map((locationData) => {
            return locationData.thumbnail === undefined ? (
              <Icon
                key={locationData.pageid}
                icon={location12Filled}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
                width={24}
                height={24}
                onClick={handleWindow}
              />
            ) : (
              <LocationPin
                key={locationData.pageid}
                img={locationData.thumbnail.source}
                text={locationData.title}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
                onClick={handleWindow}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
