import React, { useRef, useEffect, useContext, useState } from 'react';
import './SearchBox.css';
import { LocationsContext } from '../context/LocationsContext';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify-icons/bi/search';

export default function SearchBox() {
  const { coordinates, mapsApi, mapInstance, setNearByPlaces } = useContext(
    LocationsContext,
  );

  const inputRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  useEffect(() => {
    if (searchTerm && mapsApi) {
      const callback = (results, status) => {
        if (status === 'ZERO_RESULTS') {
          setError(true);
        }
        if (status === mapsApi.places.PlacesServiceStatus.OK) {
          setNearByPlaces(results);
          setError(false);
        }
      };
      const request = {
        keyword: searchTerm,
        location: coordinates,
        radius: '500',
      };
      const service = new mapsApi.places.PlacesService(mapInstance);
      service && service.nearbySearch(request, callback);
    }
  }, [mapsApi, mapInstance, searchTerm, coordinates]);

  return (
    <div className="searchSection">
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-bar"
          ref={inputRef}
          aria-label="search input"
        />
        <button type="submit" className="searchButton" aria-label="search icon">
          <Icon icon={searchIcon} className="searchIcon" />
        </button>
      </form>
      {error ? <p className="errorMessage"> No results in this area!</p> : null}
    </div>
  );
}
