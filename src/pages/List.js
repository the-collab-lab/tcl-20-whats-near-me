import React, { useContext } from 'react';
import Table from '../components/Table';
import './List.css';
import { LocationsContext } from '../context/LocationsContext';

export default function List() {
  const locationsContext = useContext(LocationsContext);
  const locations = locationsContext.locations.sort((a, b) => {
    return a.coordinates[0].dist - b.coordinates[0].dist;
  });

  return (
    <main className="listPage">
      <Table data={locations} className="table" />
    </main>
  );
}
