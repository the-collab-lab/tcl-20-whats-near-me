import React, { useContext, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';
import { Icon } from '@iconify/react';
import myLocation24Filled from '@iconify-icons/fluent/my-location-24-filled';

export default function Map() {
  const [showWindow, setShowWindow] = useState({ show: false, id: '' });

  const locationsContext = useContext(LocationsContext);
  const userLocation = locationsContext.userLocation;

  //set locations, zoomLevel & coordinates based on context
  let locations = locationsContext.locations;
  let zoomLevel = locationsContext.zoomLevel;
  let coordinates = locationsContext.coordinates;

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
        center={coordinates}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={onChildClick}
      >
        {userLocation ? (
          <Icon
            icon={myLocation24Filled}
            lat={userLocation.latitude}
            lng={userLocation.longitude}
            width={24}
            height={24}
          />
        ) : null}
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
