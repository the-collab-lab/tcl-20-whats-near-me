import React, { useContext, useEffect, useState } from 'react';
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

  const [showWindow, setShowWindow] = useState({ show: false, id: '' });
  const [center, setCenter] = useState({
    lat: coordinates.lat,
    lng: coordinates.lng,
  });

  const onChildClick = (key, childProps) => {
    setShowWindow({
      show: true,
      id: key,
    });
  };

  const handleApiLoaded = (map, maps) => {
    setCenter({ lat: map.getCenter().lat(), lng: map.getCenter().lng() });
  };
  const handleChange = (e) => {
    console.log(e);
    setCenter({ lat: e.center.lat, lng: e.center.lng });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={center}
        defaultCenter={coordinates}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={onChildClick}
        onChange={(e) => handleChange(e)}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
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
