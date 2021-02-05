import React, { useContext, useState } from 'react';
import './Search.css';
import { LocationsContext } from '../context/LocationsContext';

export default function Search() {
  const { searchTerm, setSearchTerm } = useContext(LocationsContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {};

  return (
    <div className="searchBar">
      <input type="text" placeholder="search" onChange={handleSearch} />
    </div>
  );
}
