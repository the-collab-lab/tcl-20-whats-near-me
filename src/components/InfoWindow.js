import React from 'react';
import './InfoWindow.css';

export default function InfoWindow({
  $dimensionKey,
  locationData,
  closeWindow,
}) {
  const handleClose = () => {
    document.querySelector(`.info-window-${$dimensionKey}`).style.display =
      'none';
  };

  return (
    <div
      className={`info-window-${$dimensionKey} info-window`}
      aria-label={`info window for ${locationData.title}`}
    >
      <h3 className="detail">{locationData.title}</h3>
      {locationData.thumbnail ? (
        <img
          className="info-window-image"
          src={locationData.thumbnail.source}
          alt={locationData.title}
        ></img>
      ) : null}
      <p className="detail">
        <strong>Description:</strong>{' '}
        {locationData.description
          ? locationData.description
          : 'No Description Available'}
      </p>
      <p className="detail">
        <strong>Distance from Center:</strong>{' '}
        {(locationData.coordinates[0].dist / 1000).toFixed(1)} kms
      </p>
      <a
        href={`https://en.wikipedia.org/?curid=${locationData.pageid}`}
        target="_blank"
        external="true"
        rel="noopener noreferrer"
      >
        Wikipedia Page{' '}
      </a>{' '}
      <button
        onClick={handleClose}
        className="close-info-window"
        aria-label="close info window"
        onClick={() => closeWindow({ show: false, id: '' })}
      >
        x
      </button>
    </div>
  );
}
