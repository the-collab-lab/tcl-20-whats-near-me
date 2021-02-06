import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  //state is updated in the Search component
  const [searchTerm, setSearchTerm] = useState(null);
  //state is updated in the Nav component
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

  const coordinates = userLocation ? userCoordinates : defaultCoordinates;

  useEffect(() => {
    // if('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position, 'position')
    //     setUserLocation(position.coords);
    getLocations(coordinates.lat, coordinates.lng, setLocations);
    //   });
    // } else {
    //   console.log( 'position')
    // }

    setUserLocation({
      latitude: 35.9132,
      longitude: -79.055847,
    });
  }, []);

  useEffect(() => {
    if (allowLocation && navigator.geolocation) {
      var options = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 27000,
      };

      function success(pos) {
        var crd = pos.coords;

        setUserLocation(crd);

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.watchPosition(success, error, options);
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
  }, [userLocation]);

  /*sets the locations to a filtered locations based on search term*/
  useEffect(() => {
    if (searchTerm) {
      let filtered =
        locations &&
        locations.filter((location) => {
          return location.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
      setLocations(filtered);
    } else if (searchTerm === null) {
      getLocations(coordinates.lat, coordinates.lng, setLocations);
    }
  }, [searchTerm]);

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
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
