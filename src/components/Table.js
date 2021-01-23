import React from 'react';
import './Table.css';

const Row = ({ location }) => {
  return (
    <tr className="tableListing">
      <td className="tableTitle">{location.title}</td>
      <td className="tableDescription">{location.description}</td>
      <td className="tableLink">
        {location.pageid ? (
          <a
            href={`https://en.wikipedia.org/?curid=${location.pageid}`}
            target="_blank"
            external="true"
            rel="noopener noreferrer"
          >
            Wikipedia Page{' '}
          </a>
        ) : (
          ''
        )}
      </td>
      <td className="tableThumbnail">
        {location.thumbnail ? (
          <img src={location.thumbnail.source} alt="location thumbnail" />
        ) : (
          ''
        )}
      </td>
    </tr>
  );
};

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr className="tableHeaders">
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
