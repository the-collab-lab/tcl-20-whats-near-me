import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';

const location = {
  lat: 21.694,
  lng: 71.7979,
};

const zoomLevel = 8;

export default function Map() {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: API_KEY,
        }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      ></GoogleMapReact>
    </div>
  );
}
