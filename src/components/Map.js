import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';

export default function Map({ location, zoomLevel }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: API_KEY,
      }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    ></GoogleMapReact>
  );
}
