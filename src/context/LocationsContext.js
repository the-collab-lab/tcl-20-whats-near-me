import React, { createContext, useEffect, useState } from 'react';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  //state is updated in the Map component
  const [newCenter, setNewCenter] = useState();

  //New Orleans
  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  //leaving room for the logic from the other groups ticket
  const coordinates = defaultCoordinates;

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

  /*when the newCenter changes in the map componentt the useEffect
  makes a new api call & the new locations are updated */
  useEffect(() => {
    const newCenterUrl =
      newCenter &&
      `https://segdeha.com/api/nearby.php?lat=${newCenter.lat}&lng=${newCenter.lng}`;

    fetch(newCenterUrl)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pages = response.query ? response.query.pages : [];
        setLocations(pages);
      })
      .catch(console.log);
  }, [newCenter]);

  return (
    <LocationsContext.Provider
      value={{ locations, coordinates, newCenter, setNewCenter }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
