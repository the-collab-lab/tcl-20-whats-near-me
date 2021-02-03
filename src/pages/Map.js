import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';

export default function Map() {
  //refactored context
  const { locations, coordinates, newCenter, setNewCenter } = useContext(
    LocationsContext,
  );

  const [showWindow, setShowWindow] = useState({ show: false, id: undefined });

  const zoomLevel = 12;

  const onChildClick = (key) => {
    setShowWindow({
      show: true,
      id: key,
    });
  };

  //TODO: added just in case we want to access the googleMapApiInternals
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  /*When the map moves it resets the center to recenter 
  we are updating the state with the setRecenter which updates context and updates locationData */
  const handleNewCenter = (e) => {
    setNewCenter({ lat: e.center.lat(), lng: e.center.lng() });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={newCenter}
        defaultCenter={coordinates}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onChildClick={onChildClick}
        onDragEnd={(e) => handleNewCenter(e)}
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
