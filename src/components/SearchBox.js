import React, { useCallback, useRef, useEffect, useContext } from 'react';
import './SearchBox.css';
import { LocationsContext } from '../context/LocationsContext';

export default function SearchBox() {
  const {
    newCenter,
    searchTerm,
    setSearchTerm,
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

  const handleOnPlacesChanged = useCallback(() => {
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

  return <input ref={input} placeholder="search" type="text" />;
}

//   return (
//     <div className="searchBar">
//       <label htmlFor="search-locations" id="search-locations">
//         <input
//           type="search"
//           ref="input"
//           placeholder="Search"
//           onChange={handleSearch}
//         />
//       </label>
//       {error ? (
//         <p className="errorMessage">Sorry, no locations available!</p>
//       ) : null}
//     </div>
//   );
// }
