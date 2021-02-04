import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [allowLocation, setAllowLocation] = useState(false);
  //state is updated in the Map component
  const [newCenter, setNewCenter] = useState();

  //New Orleans
  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  const userCoordinates = userLocation && {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };

  //leaving room for the logic from the other groups ticket
  const coordinates = userLocation ? userCoordinates : defaultCoordinates;

  useEffect(() => {
    getLocations(coordinates.lat, coordinates.lng, setLocations);
    console.log('navigator,', navigator.geolocation);

    if (navigator.geolocation && allowLocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
      console.log('i work!');
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setUserLocation(position.coords);
    }
  }, [allowLocation]);

  /*when the newCenter changes in the map componentt the useEffect
  makes a new api call & the new locations are updated */
  useEffect(() => {
    if (newCenter) {
      getLocations(newCenter.lat, newCenter.lng, setLocations);
    }
  }, [newCenter]);

  useEffect(() => {
    if (userLocation) {
      getLocations(coordinates.lat, coordinates.lng, setLocations);
    }
  }, []);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        coordinates,
        newCenter,
        userLocation,
        setNewCenter,
        allowLocation,
        setAllowLocation,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
