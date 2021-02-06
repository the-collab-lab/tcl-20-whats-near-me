import React, { useContext } from 'react';
import './Search.css';
import { LocationsContext } from '../context/LocationsContext';

export default function Search() {
  const { setSearchTerm } = useContext(LocationsContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  /* TODO: make the corresponding button to clear the search
  /reset the locations
  const handleClear = () => {
    setSearchTerm(null)
   }; */

  return (
    <div className="searchBar">
      <label htmlFor="search-locations" id="search-locations">
        <input type="search" placeholder="search" onChange={handleSearch} />
      </label>
    </div>
  );
}
