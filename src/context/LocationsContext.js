import React, { createContext, useEffect, useState } from 'react';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [recenter, setRecenter] = useState();

  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  const recenterCoordinates = recenter && {
    lat: recenter.lat,
    lng: recenter.lng,
  };

  // const coordinates = recenter ? recenterCoordinates : defaultCoordinates;

  const coordinates = defaultCoordinates;

  const zoomLevel = 14;

  const url = `https://segdeha.com/api/nearby.php?lat=${defaultCoordinates.lat}&lng=${defaultCoordinates.lng}`;

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
  }, []);

  useEffect(() => {
    const recenterUrl =
      recenter &&
      `https://segdeha.com/api/nearby.php?lat=${recenter.lat}&lng=${recenter.lng}`;

    fetch(recenterUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pages = response.query ? response.query.pages : [];
        setLocations(pages);
      })
      .catch(console.log);
  }, [recenter]);

  return (
    <LocationsContext.Provider
      value={{ locations, coordinates, zoomLevel, recenter, setRecenter }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
