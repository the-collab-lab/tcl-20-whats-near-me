import React, { createContext, useEffect, useState } from 'react';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();

  const defaultCoordinates = {
    lat: 45,
    lng: -123.456,
  };

  const userCoordinates = userLocation && {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };

  const coordinates = userLocation ? userCoordinates : defaultCoordinates;

  const zoomLevel = 12;

  const url = `https://segdeha.com/api/nearby.php?lat=${coordinates.lat}&lng=${coordinates.lng}`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pages = response.query ? response.query.pages : [];
        setLocations(pages);
      })
      .catch(console.log);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setUserLocation(position.coords);
    }
  }, []);

  useEffect(() => {
    const userUrl =
      userLocation &&
      `https://segdeha.com/api/nearby.php?lat=${userLocation.latitude}&lng=${userLocation.longitude}`;

    fetch(userUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pages = response.query ? response.query.pages : [];
        setLocations(pages);
      })
      .catch(console.log);
  }, [userLocation]);

  return (
    <LocationsContext.Provider value={{ locations, coordinates, zoomLevel }}>
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
