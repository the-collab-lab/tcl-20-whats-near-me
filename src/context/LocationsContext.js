import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [allowLocation, setAllowLocation] = useState(false);
  //state is updated in the Map component
  const [newCenter, setNewCenter] = useState();

  const allowLocationServices = () => {
    setAllowLocation(!allowLocation);
  };

  const userCoordinates = userLocation && {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };
  //New Orleans
  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  //leaving room for the logic from the other groups ticket
  const coordinates = userLocation ? userCoordinates : defaultCoordinates;

  const url = `https://segdeha.com/api/nearby.php?lat=${coordinates.lat}&lng=${coordinates.lng}`;

  useEffect(() => {
    getLocations(coordinates.lat, coordinates.lng, setLocations);

    if (navigator.geolocation && allowLocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
      console.log('i cowkr');
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setUserLocation(position.coords);
    }
  }, []);

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
  }, [userLocation]);

  return (
    <LocationsContext.Provider
      value={{
        locations,
        coordinates,
        newCenter,
        userLocation,
        setNewCenter,
        allowLocationServices,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
