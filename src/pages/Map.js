import React, { useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../config.js';
import './Map.css';
import AutoComplete from '../components/AutoComplete';
import LocationPin from '../components/LocationPin.js';
import { LocationsContext } from '../context/LocationsContext';

import { Icon } from '@iconify/react';
import myLocation24Filled from '@iconify-icons/fluent/my-location-24-filled';

export default function Map() {
  //refactored context
  const {
    locations,
    coordinates,
    setNewCenter,
    userLocation,
    setMapApi,
    setMapInstance,
    setMapApiLoaded,
    mapApiLoaded,
    mapInstance,
    mapApi,
  } = useContext(LocationsContext);

  const [showWindow, setShowWindow] = useState({ show: false, id: undefined });
  const [places, setPlaces] = useState([]);

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
    setMapApi(maps);
  };

  const addPlaces = (place) => {
    setPlaces({
      places: [place],
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };
  /*When the map moves it resets the center to recenter
  we are updating the state with the setRecenter which updates context and updates locationData */
  const handleNewCenter = (e) => {
    setNewCenter({ lat: e.center.lat(), lng: e.center.lng() });
  };

  // TODO: Rachel and Caitlyn's Ticket:

  // TODO: Rachel: Access the Places Library

  // TODO: Recenter the map based on the new place (whether its a new city like Rome or a specific place like Franklin Libraru)

  // TODO: If the searched place is a city like Rome, repopulate all the pins in that area

  // TODO: Caitlyn: If there are no results, show an error message in the search component

  // TODO: Caitlyn: Make the search bar a little prettier

  return (
    <div>
      {mapApiLoaded && (
        <div>
          <AutoComplete
            map={mapInstance}
            mapApi={mapApi}
            addPlaces={addPlaces}
            onChange={() => null}
          />
        </div>
      )}
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'en',
            libraries: ['places', 'geometry'],
          }}
          center={coordinates}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
          onChildClick={onChildClick}
          onDragEnd={(e) => handleNewCenter(e)}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {userLocation ? (
            <Icon
              className="your-location"
              icon={myLocation24Filled}
              lat={userLocation.latitude}
              lng={userLocation.longitude}
              width={48}
              height={48}
              aria-label="your current location"
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
    </div>
  );
}
