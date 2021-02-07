import React, { useContext } from 'react';
import './Search.css';
import { LocationsContext } from '../context/LocationsContext';

export default function Search() {
  const { searchTerm, setSearchTerm } = useContext(LocationsContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      setSearchTerm(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchTerm(null);
    }
  };

  const error = false;

  return (
    <div className="searchBar">
      <label htmlFor="search-locations" id="search-locations">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>
      {error ? (
        <p className="errorMessage">Sorry, no locations available!</p>
      ) : null}
    </div>
  );
}
