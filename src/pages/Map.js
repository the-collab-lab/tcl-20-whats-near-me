import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';
import { Icon } from '@iconify/react';
import myLocation24Filled from '@iconify-icons/fluent/my-location-24-filled';
import LoadingMessage from '../components/LoadingMessage.js';

export default function Map() {
  const {
    locations,
    coordinates,
    setNewCenter,
    userLocation,
    setMapsApi,
    setMapInstance,
    setMapApiLoaded,
    allowLocation,
  } = useContext(LocationsContext);

  const [showWindow, setShowWindow] = useState({ show: false, id: undefined });

  const zoomLevel = 15;

  const onChildClick = (key) => {
    setShowWindow({
      show: true,
      id: key,
    });
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    setMapApiLoaded(true);
    setMapInstance(map);
    setMapsApi(maps);
  };

  /*When the map moves it resets the center to recenter
  we are updating the state with the setRecenter which updates context and updates locationData */
  const handleNewCenter = (e) => {
    setNewCenter({ lat: e.center.lat(), lng: e.center.lng() });
  };

  return (
    <>
      <LoadingMessage />
      <div className="mapWrapper">
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY, libraries: ['places'] }}
            center={coordinates}
            defaultZoom={zoomLevel}
            yesIWantToUseGoogleMapApiInternals
            onChildClick={onChildClick}
            onDragEnd={(e) => handleNewCenter(e)}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {userLocation && allowLocation ? (
              <Icon
                icon={myLocation24Filled}
                lat={userLocation.latitude}
                lng={userLocation.longitude}
                width={24}
                height={24}
                aria-label="your current location"
                zIndex={1}
              />
            ) : null}
            {locations &&
              locations.map((locationData) => {
                return locationData.thumbnail === undefined ||
                  locationData.thumbnail === null ? (
                  <LocationPin
                    className="location-pin"
                    key={locationData.pageid}
                    lat={locationData.coordinates[0].lat}
                    lng={locationData.coordinates[0].lon}
                    locationData={locationData}
                    showWindow={showWindow}
                    closeWindow={setShowWindow}
                    zIndex={2}
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
                    zIndex={2}
                  />
                );
              })}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
