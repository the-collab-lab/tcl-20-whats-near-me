import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';

export default function Map() {
  const {
    locations,
    zoomLevel,
    coordinates,
    recenter,
    setRecenter,
  } = useContext(LocationsContext);

  const [showWindow, setShowWindow] = useState({ show: false, id: '' });

  const onChildClick = (key) => {
    setShowWindow({
      show: true,
      id: key,
    });
  };

  //added in case we want to access the googleMapApiInternals
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  //When the map moves it recenters the map and updates locationData
  const handleChange = (e) => {
    setRecenter({ lat: e.center.lat, lng: e.center.lng });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={recenter}
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
