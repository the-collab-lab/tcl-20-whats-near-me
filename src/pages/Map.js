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

  const _onChildClick = (key, childProps) => {
    //Do we need this -
    const childKey = locations.filter((location) => location.pageid == key);
    console.log(childKey);
    console.log(key);
    console.log(childProps);

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
              />
            ) : (
              <LocationPin
                className="location-pin"
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
