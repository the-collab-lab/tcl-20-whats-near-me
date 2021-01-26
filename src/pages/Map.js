import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';

export default function Map() {
  const [showWindow, setShowWindow] = useState({ show: false, id: '' });

  const locationsContext = useContext(LocationsContext);

  //set locations, zoomLevel & coordinates based on context
  const locations = locationsContext.locations;
  const zoomLevel = locationsContext.zoomLevel;
  const coordinates = locationsContext.coordinates;

  const onChildClick = (key) => {
    setShowWindow({
      show: true,
      id: key,
    });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={onChildClick}
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
                showWindow={showWindow}
                closeWindow={setShowWindow}
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
                showWindow={showWindow}
                closeWindow={setShowWindow}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
