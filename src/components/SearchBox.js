import React, { useCallback, useRef, useEffect, useContext } from 'react';
import './SearchBox.css';
import { LocationsContext } from '../context/LocationsContext';
import googleMapReact from 'google-map-react';

export default function SearchBox() {
  const {
    newCenter,
    searchTerm,
    setSearchTerm,
    // rename this to mapsApi
    mapApi,
    setMapApi,
    mapInstance,
    setMapInstance,
    mapApiLoaded,
    setMapApiLoaded,
  } = useContext(LocationsContext);
  // const searchBox = new googlemaps.places.SearchBox(input);

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value;
  //   if (searchTerm.length > 0) {
  //     setSearchTerm(searchTerm);
  //   } else if (searchTerm.length === 0) {
  //     setSearchTerm(null);
  //   }
  // };

  // const error = false;

  const input = useRef(null);
  const searchBox = useRef(null);

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name'],
  };
  // const service = new mapApi.places.PlacesService(mapInstance);
  console.log('instance', typeof mapInstance);
  mapApi &&
    console.log(
      'find from query: ',
      new mapApi.places.PlacesService(mapInstance).findPlaceFromQuery(
        request,
        function (results, status) {
          console.log({ results });
        },
      ),
    );

  const handleOnPlacesChanged = useCallback(() => {
    // if (service) {
    // console.log({ service });
    // }
    if (searchTerm) {
      setSearchTerm(searchBox.current.getPlaces());
    }
  }, [searchTerm, searchBox]);

  useEffect(() => {
    if (!searchBox.current) {
      // searchBox.current = new maps.places.SearchBox(input.current);
      // searchBox.current.addListener('places_changed', handleOnPlacesChanged);
      console.log({ searchBox });
    }

    return () => {
      searchBox.current = null;
      // maps.event.clearInstanceListeners(searchBox);
    };
  }, [handleOnPlacesChanged]);
  // add a button with an onclick handler, put it in a form
  return <input ref={input} placeholder="search" type="text" />;
}
