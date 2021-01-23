import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import { Icon } from '@iconify/react';
import location12Filled from '@iconify-icons/fluent/location-12-filled';
import './Map.css';
import LocationPin from '../components/LocationPin.js';

const location = {
  lat: 29.951,
  lng: -90.0715,
};

const zoomLevel = 14;

export default function Map({ locations }) {
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
              />
            ) : (
              <LocationPin
                key={locationData.pageid}
                img={locationData.thumbnail.source}
                text={locationData.title}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
