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
    setNewCenter,
    newCenter,
    mapsApi,
    mapInstance,
    mapApiLoaded,
    places,
    setPlaces,
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
      const request = {
        query: searchTerm,
        fields: ['name', 'geometry', 'formatted_address'],
      };
      const service = new mapsApi.places.PlacesService(mapInstance);
      service &&
        service.findPlaceFromQuery(request, (results, status) => {
          console.log({ results });
          setNewCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
          console.log(newCenter);
          console.log({ status });
        });
    }
  }, [mapsApi, mapInstance, searchTerm]);

  return (
    <form className="searchBar" onSubmit={(e) => handleSubmit(e)}>
      <input type="search" name="search-bar" ref={inputRef} />
      <input type="submit" value="search anywhere!" />
    </form>
  );
}

// const handleOnPlacesChanged = useCallback(() => {
//   if (mapsApi) {
//     const service = new mapsApi.places.PlacesService(mapInstance);
//     if (service) {
//       console.log({ service });
//     }
//     if (searchTerm) {
//       setSearchTerm(searchBoxRef.current.getPlaces());
//     }
//   }
// }, [searchTerm, searchBoxRef]);

// useEffect(() => {
//   if (!searchBoxRef.current && mapsApi) {
//     searchBoxRef.current = new mapsApi.places.SearchBox(searchBoxRef.current);
//     searchBoxRef.current.addListener('places_changed', handleOnPlacesChanged);
//     console.log({ searchBoxRef });
//   }

//   return () => {
//     searchBoxRef.current = null;
//     mapsApi.event.clearInstanceListeners(searchBoxRef);
//   };
// }, [handleOnPlacesChanged]);
