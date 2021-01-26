import React from 'react';
import Table from '../components/Table';
import './List.css';

export default function List({ locations }) {
  return (
    <main className="listPage">
      <h2 className="listTitle">Explore Your World</h2>
      <Table data={locations} />
    </main>
  );
}
