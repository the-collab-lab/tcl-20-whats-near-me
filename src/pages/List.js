import React from 'react';
import Table from '../components/Table';
import './List.css';

export default function List({ locations }) {
  return (
    <main className="listPage">
      <Table data={locations} />
    </main>
  );
}
