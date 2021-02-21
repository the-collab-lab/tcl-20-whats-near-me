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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  const error = false;

  const inputRef = useRef(null);
  // const searchBoxRef = useRef(null);

  useEffect(() => {
    if (searchTerm && mapsApi) {
      const callback = (results, status) => {
        if (status == mapsApi.places.PlacesServiceStatus.OK) {
          setPlaces(results);
          for (var i = 0; i < places.length; i++) {
            console.log(places[i]);
          }
        }
      };
      const request = {
        type: searchTerm,
        //TODO: set location to wherever the user wants it to be
        location: coordinates,
        radius: '500',
      };
      const service = new mapsApi.places.PlacesService(mapInstance);
      service && service.nearbySearch(request, callback);
    }
  }, [mapsApi, mapInstance, searchTerm]);

  return (
    <div>
      <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
        <input type="search" name="search-bar" ref={inputRef} />
        <input type="submit" value="search anywhere!" />
      </form>
      <p>{searchTerm}</p>
    </div>
  );
}

// setNewCenter({
//   lat: results[0].geometry.location.lat(),
//   lng: results[0].geometry.location.lng(),
// });
