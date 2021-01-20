import React, { createContext, useEffect, useState } from 'react';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const coordinates = {
    lat: 45,
    lng: -123.456,
  };

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
  }, []);

  return (
    <LocationsContext.Provider value={{ locations, coordinates, zoomLevel }}>
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
