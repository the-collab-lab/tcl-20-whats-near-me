import React from 'react';
import Table from '../components/Table';

export default function List({ locations }) {
  return (
    <main>
      <h1>List</h1>
      {console.log({ locations })}
      <Table data={locations} />
    </main>
  );
}
