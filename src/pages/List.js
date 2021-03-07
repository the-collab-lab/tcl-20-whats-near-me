import React, { useContext } from 'react';
import Table from '../components/Table';
import './List.css';
import { LocationsContext } from '../context/LocationsContext';
import getDistanceFromLatLonInKm from '../lib/haversineFunction';

export default function List() {
  const { locations, coordinates } = useContext(LocationsContext);

  const sortedLocations = locations.sort((a, b) => {
    if (a.coordinates[0].dist) {
      return a.coordinates[0].dist - b.coordinates[0].dist;
    } else {
      const c = getDistanceFromLatLonInKm(
        coordinates.lat,
        coordinates.lng,
        a.coordinates[0].lat,
        a.coordinates[0].lon,
      );
      const d = getDistanceFromLatLonInKm(
        coordinates.lat,
        coordinates.lng,
        b.coordinates[0].lat,
        b.coordinates[0].lon,
      );

      return c - d;
    }
  });

  return (
    <main className="listPage">
      <div className="list-border">
        <Table data={sortedLocations} className="table" />
      </div>
    </main>
  );
}
