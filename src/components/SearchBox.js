import React, {
  useCallback,
  useRef,
  useEffect,
  useContext,
  useState,
} from 'react';
import './SearchBox.css';
import { LocationsContext } from '../context/LocationsContext';

export default function SearchBox() {
  const {
    newCenter,
    searchTerm,
    setSearchTerm,
    mapsApi,
    mapInstance,
    mapApiLoaded,
    places,
    setPlaces,
  } = useContext(LocationsContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      setSearchTerm(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchTerm(null);
    }
  };

  const error = false;

  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    if (mapsApi && searchTerm) {
      const request = {
        query: searchTerm,
        fields: ['name', 'geometry', 'formatted_address'],
      };
      const service = new mapsApi.places.PlacesService(mapInstance);
      service &&
        service.findPlaceFromQuery(request, (results, status) => {
          console.log(results);
          if (results) {
            setPlaces(results);
          }
          console.log(status);
        });
    }
  }, [mapsApi, mapInstance, searchTerm]);

  const handleOnPlacesChanged = useCallback(() => {
    if (mapsApi) {
      const service = new mapsApi.places.PlacesService(mapInstance);
      if (service) {
        console.log({ service });
      }
      if (searchTerm) {
        setSearchTerm(searchBoxRef.current.getPlaces());
      }
    }
  }, [searchTerm, searchBoxRef]);

  useEffect(() => {
    if (!searchBoxRef.current && mapsApi) {
      searchBoxRef.current = new mapsApi.places.SearchBox(searchBoxRef.current);
      searchBoxRef.current.addListener('places_changed', handleOnPlacesChanged);
      console.log({ searchBoxRef });
    }

    return () => {
      searchBoxRef.current = null;
      mapsApi.event.clearInstanceListeners(searchBoxRef);
    };
  }, [handleOnPlacesChanged]);

  // add a button with an onclick handler, put it in a form
  return (
    <form className="searchBar" type="submit">
      <input ref={inputRef} type="search" />
      <input
        type="submit"
        value="search anywhere in the world!"
        onSubmit={handleSearch}
      />
    </form>
  );
}
