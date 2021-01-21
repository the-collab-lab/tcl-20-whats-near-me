import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './InfoWindow.css';

export default function InfoWindow({ $dimensionKey }) {
  const locationsContext = useContext(LocationsContext);

  const location = locationsContext.locations.filter(
    (item) => item.pageid == $dimensionKey,
  );

  const handleClose = () => {
    document.querySelector(`.info-window-${$dimensionKey}`).style.display =
      'none';
  };

  return (
    <div
      className={`info-window-${$dimensionKey} info-window`}
      onFocus={handleClose}
    >
      <ul className="info-window-details">
        <li className="detail">Title: {location[0].title}</li>

        {location[0].thumbnail ? (
          <img
            className="info-window-image"
            src={location[0].thumbnail.source}
            alt={location[0].title}
          ></img>
        ) : null}
        <li className="detail">
          Description:{' '}
          {location[0].description
            ? location[0].description
            : 'No Description Available'}
        </li>
        <li className="detail">
          Distance from Center: {location[0].coordinates[0].dist} kms
        </li>
        <li className="detail">
          <a
            href={`https://en.wikipedia.org/?curid=${location[0].pageid}`}
            target="_blank"
            external="true"
            rel="noopener noreferrer"
          >
            Wikipedia Page{' '}
          </a>{' '}
        </li>
      </ul>
      <button onClick={handleClose} className="close-info-window">
        x
      </button>
    </div>
  );
}
