import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [allowLocation, setAllowLocation] = useState(false);
  const [newCenter, setNewCenter] = useState();

  const allowLocationServices = () => {
    setAllowLocation(!allowLocation);
  };

  const userCoordinates = userLocation && {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };

  const zoomLevel = 12;
  //state is updated in the Map component

  //New Orleans
  const defaultCoordinates = {
    lat: 29.9511,
    lng: -90.0715,
  };

  const coordinates = userLocation ? userCoordinates : defaultCoordinates;

  const url = `https://segdeha.com/api/nearby.php?lat=${coordinates.lat}&lng=${coordinates.lng}`;

  useEffect(() => {
    getLocations(coordinates.lat, coordinates.lng);

    if (navigator.geolocation && allowLocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setUserLocation(position.coords);
    }
  }, []);

  useEffect(() => {
    let lat, lng;
    if (newCenter) {
      lat = newCenter.lat;
      lng = newCenter.lng;
    } else {
      lat = defaultCoordinates.lat;
      lng = defaultCoordinates.lng;
    }
    const newCenterUrl = `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`;
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
    <LocationsContext.Provider
      value={{ locations, coordinates, newCenter, setNewCenter }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
