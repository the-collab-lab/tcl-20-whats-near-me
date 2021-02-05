import React, { useContext, useState } from 'react';
import './Search.css';
import { LocationsContext } from '../context/LocationsContext';

export default function Search() {
  const { locations } = useContext(LocationsContext);

  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    setFilteredLocations();

    // useEffect(() => {
    //   let listFilter = currentList.userList;
    //   let filtered =
    //     listFilter &&
    //     listFilter.filter((item) => {
    //       return item.itemName.toLowerCase().includes(filterValue.toLowerCase());
    //     });
    //   setFilteredList(filtered);
    // }, [filterValue]);
  };

  const handleClear = () => {};

  return (
    <div className="searchBar">
      <input type="text" placeholder="search" onChange={handleSearch} />
    </div>
  );
}
