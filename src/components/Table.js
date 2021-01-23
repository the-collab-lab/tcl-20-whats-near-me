import React from 'react';
const Row = ({ location }) => {
  return (
    <tr>
      <td>{location.title}</td>
    </tr>
  );
};
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Location</td>
          <td>Description</td>
          <td>Link</td>
          <td>Image</td>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((location) => {
            return <Row key={location.pageid} location={location} />;
          })}
      </tbody>
    </table>
  );
};

export default Table;
