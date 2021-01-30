import React, { createContext, useEffect, useState } from 'react';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  //state is updated in the Map component
  const [recenter, setRecenter] = useState();

  //New Orleans
  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  //leaving room for the logic from the other groups ticket
  const coordinates = defaultCoordinates;

  const zoomLevel = 14;

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
  }, []);

  /*useEffect for when the recenter changes which happens in the map component, 
  the api is call the api & the new locations are set */
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
