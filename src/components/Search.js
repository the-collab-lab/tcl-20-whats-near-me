import React, { useContext } from 'react';
import './Search.css';
import { LocationsContext } from '../context/LocationsContext';

export default function Search() {
  const { setSearchTerm } = useContext(LocationsContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      setSearchTerm(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchTerm(null);
    }
  };

  // TODO: make the corresponding button to clear the search
  // reset the locations -- on focus?
  // const handleClear = () => {
  //   setSearchTerm(null);
  // };

  return (
    <div className="searchBar">
      <label htmlFor="search-locations" id="search-locations">
        <input
          type="search"
          placeholder="wiki search"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}
