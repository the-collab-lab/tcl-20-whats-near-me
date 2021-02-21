import React, { useRef, useEffect, useContext, useState } from 'react';
import './SearchBox.css';
import { LocationsContext } from '../context/LocationsContext';

export default function SearchBox() {
  const {
    setNewCenter,
    coordinates,
    mapsApi,
    mapInstance,
    setPlaces,
    places,
  } = useContext(LocationsContext);

  //TODO: clear list & search results buttons // clear event listener
  // marker to show the recenter based on the search results.

  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  const handleSearchResults = () => {
    setNewCenter({
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng(),
    });
  };

  useEffect(() => {
    if (searchTerm && mapsApi) {
      const callback = (results, status) => {
        if (status === 'ZERO_RESULTS') {
          console.log('error');
          setError(true);
        }
        if (status == mapsApi.places.PlacesServiceStatus.OK) {
          setPlaces(results);
          for (var i = 0; i < places.length; i++) {
            console.log(places[i]);
          }
        }
      };
      const request = {
        keyword: searchTerm,
        //TODO: set location to wherever the user wants it to be
        location: coordinates,
        //TODO: discuss the radius with the team
        radius: '500',
      };
      const service = new mapsApi.places.PlacesService(mapInstance);
      service && service.nearbySearch(request, callback);
    }
  }, [mapsApi, mapInstance, searchTerm, coordinates]);

  return (
    <div>
      <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <input type="search" name="search-bar" ref={inputRef} />
        <input type="submit" value="search anywhere!" />
      </form>
      {places
        ? places.map((element) => (
            <button onClick={handleSearchResults} key={element.place_id}>
              {element.name}
            </button>
          ))
        : null}
      {error ? <p className="errorMessage"> No results in this area!</p> : null}
    </div>
  );
}
