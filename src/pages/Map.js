import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';

const location = {
  lat: 45,
  lng: -123.456,
};

const zoomLevel = 12;

export default function Map({ locations }) {
  const [showWindow, setShowWindow] = useState(false);

  const handleWindow = (key) => {
    setShowWindow(!showWindow);
    console.log(`state set to ${showWindow}`);
  };

  const _onChildClick = (key, childProps) => {
    const childKey = locations.filter((location) => location.pageid == key);
    console.log(childKey);
    console.log(key);
    console.log(childProps);

    //Need to be able to set props on child

    document.querySelector(`.info-window-${key}`).style.display = 'block';
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={_onChildClick}
      >
        {locations &&
          locations.map((locationData) => {
            return locationData.thumbnail === undefined ? (
              <LocationPin
                className="location-pin"
                key={locationData.pageid}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
                defaultProp={showWindow}
              />
            ) : (
              <LocationPin
                className="location-pin"
                key={locationData.pageid}
                img={locationData.thumbnail.source}
                text={locationData.title}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
                defaultProp={showWindow}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
