import React from 'react';
import './InfoWindow.css';

export default function InfoWindow({ $dimensionKey, locationData }) {
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
        <li className="detail">Title: {locationData.title}</li>

        {locationData.thumbnail ? (
          <img
            className="info-window-image"
            src={locationData.thumbnail.source}
            alt={locationData.title}
          ></img>
        ) : null}
        <li className="detail">
          Description:{' '}
          {locationData.description
            ? locationData.description
            : 'No Description Available'}
        </li>
        <li className="detail">
          Distance from Center:{' '}
          {(locationData.coordinates[0].dist / 1000).toFixed(1)} kms
        </li>
        <li className="detail">
          <a
            href={`https://en.wikipedia.org/?curid=${locationData.pageid}`}
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
