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

  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  const request = {
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
      setSearchTerm(searchBoxRef.current.getPlaces());
    }
  }, [searchTerm, searchBoxRef]);

  useEffect(() => {
    if (!searchBoxRef.current) {
      // searchBoxRef.current = new maps.places.SearchBox(input.current);
      // searchBoxRef.current.addListener('places_changed', handleOnPlacesChanged);
      console.log({ searchBoxRef });
    }

    return () => {
      searchBoxRef.current = null;
      // maps.event.clearInstanceListeners(searchBoxRef);
    };
  }, [handleOnPlacesChanged]);
  // add a button with an onclick handler, put it in a form
  return <input ref={inputRef} placeholder="search" type="text" />;
}
