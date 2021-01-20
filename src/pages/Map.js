import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { ListContext } from '../context/ListContext';

export default function Map() {
  const listContext = useContext(ListContext);

  //set locations, zoomLevel & coordinates based on context
  const locations = listContext.locations;
  const zoomLevel = listContext.zoomLevel;
  const coordinates = listContext.coordinates;

  const _onChildClick = (key, childProps) => {
    //Do we need this -
    const childKey = locations.filter((location) => location.pageid == key);
    console.log(childKey + 'childKey');
    console.log(key + 'key');
    console.log(childProps + 'childProps');

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
