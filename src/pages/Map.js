import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';

export default function Map() {
  const locationsContext = useContext(LocationsContext);

  //set locations, zoomLevel & coordinates based on context
  const locations = locationsContext.locations;
  const zoomLevel = locationsContext.zoomLevel;
  const coordinates = locationsContext.coordinates;

  const _onChildClick = (key) => {
    //set child class to visible
    document.querySelector(`.info-window-${key}`).style.display = 'block';
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coordinates}
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
                locationData={locationData}
              />
            ) : (
              <LocationPin
                className="location-pin"
                key={locationData.pageid}
                img={locationData.thumbnail.source}
                text={locationData.title}
                lat={locationData.coordinates[0].lat}
                lng={locationData.coordinates[0].lon}
                locationData={locationData}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
