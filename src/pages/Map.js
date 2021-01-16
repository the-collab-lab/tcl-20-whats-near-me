import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';

const location = {
  lat: 45,
  lng: -123.456,
};

const zoomLevel = 8;

export default function Map({ locations }) {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        {locations &&
          locations.map((locationData) => {
            return (
              <LocationPin
                img={locationData}
                // lat={locationData.coordinates[0].lat} lng={locationData.coordinates[0].lat}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
