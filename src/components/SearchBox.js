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

  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  const inputRef = useRef(null);
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
        ? places.map((element) => <p key={element.place_id}>{element.name}</p>)
        : null}
      {error ? <p className="errorMessage"> No results in this area!</p> : null}
    </div>
  );
}

// setNewCenter({
//   lat: results[0].geometry.location.lat(),
//   lng: results[0].geometry.location.lng(),
// });
