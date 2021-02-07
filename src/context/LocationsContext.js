import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [allowLocation, setAllowLocation] = useState(false);
  //state is updated in the Map component
  const [newCenter, setNewCenter] = useState();
  const [loading, setLoading] = useState(false);

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

  let coordinates = userLocation ? userCoordinates : defaultCoordinates;

  useEffect(() => {
    getLocations(coordinates.lat, coordinates.lng, setLocations);

    if (navigator.geolocation && allowLocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        },
      );
    }
  }, [allowLocation]);

  /*when the newCenter changes in the map componentt the useEffect
  makes a new api call & the new locations are updated */
  useEffect(() => {
    if (newCenter) {
      getLocations(newCenter.lat, newCenter.lng, setLocations);
    }
  }, [newCenter]);

  // When allowLocation is false clear state of user location and reset center to map center
  useEffect(() => {
    if (userLocation) {
      getLocations(coordinates.lat, coordinates.lng, setLocations);
      coordinates = userCoordinates;
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
        allowLocation,
        setAllowLocation,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
