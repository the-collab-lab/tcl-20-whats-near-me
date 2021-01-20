import React, { createContext, useEffect, useState } from 'react';

export const ListContext = createContext();

const ListContextProvider = (props) => {
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
    <ListContext.Provider value={{ locations, coordinates, zoomLevel }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
