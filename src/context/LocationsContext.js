import React, { createContext, useEffect, useState } from 'react';
import { getLocations } from '../lib/fetchPlaces';
import { combineGoogleWikiResults } from '../lib/transformGoogleData';

export const LocationsContext = createContext();

const LocationsContextProvider = (props) => {
  const [locations, setLocations] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const [loading, setLoading] = useState({ loading: false, message: '' });
  const [watchId, setWatchId] = useState();

  //state is updated in the Search component
  const [nearByPlaces, setNearByPlaces] = useState([]);

  //state is updated in the Nav component
  const [allowLocation, setAllowLocation] = useState(false);

  //state is updated in the Map component
  const [newCenter, setNewCenter] = useState();
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapsApi, setMapsApi] = useState(null);
  const [coordinates, setCoordinates] = useState({
    //New Orleans
    lat: 29.9511,
    lng: -90.0715,
  });

  const userCoordinates = userLocation && {
    lat: userLocation.latitude,
    lng: userLocation.longitude,
  };

  useEffect(() => {
    getLocations(coordinates.lat, coordinates.lng, setLocations);

    if (navigator.geolocation && allowLocation) {
      setLoading({ loading: true, message: '' });
      setWatchId(
        navigator.geolocation.watchPosition(
          (position) => {
            setUserLocation(position.coords);
            setLoading({ loading: false, message: '' });
          },
          (error) => {
            console.error(error);
            switch (error.code) {
              case 1:
                setLoading({
                  loading: false,
                  message: 'Please turn on location services',
                });
                break;
              case 3:
                setLoading({
                  loading: false,
                  message:
                    'Request timed out please check your connection and ensure location services are tured on',
                });
                break;
              default:
                return;
            }
          },
          { timeout: 10000 },
        ),
      );
    }
    if (navigator.geolocation && !allowLocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowLocation]);

  /*when the newCenter changes in the map component the useEffect
  makes a new api call & the new locations are updated */
  useEffect(() => {
    if (newCenter) {
      getLocations(newCenter.lat, newCenter.lng, setLocations);
      setCoordinates({ lat: newCenter.lat, lng: newCenter.lng });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCenter]);

  // When allowLocation is false clear state of user location and reset center to map center
  useEffect(() => {
    if (userLocation) {
      getLocations(coordinates.lat, coordinates.lng, setLocations);
      setCoordinates(userCoordinates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation]);

  useEffect(() => {
    if (locations && nearByPlaces) {
      setLocations(combineGoogleWikiResults(nearByPlaces, locations));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nearByPlaces]);

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
        mapsApi,
        setMapsApi,
        mapInstance,
        setMapInstance,
        mapApiLoaded,
        setMapApiLoaded,
        loading,
        setLoading,
        nearByPlaces,
        setNearByPlaces,
      }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
};

export default LocationsContextProvider;
