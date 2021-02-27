import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './InfoWindow.css';
import getDistanceFromLatLonInKm from '../lib/haversineFunction';

export default function InfoWindow({
  $dimensionKey,
  locationData,
  closeWindow,
}) {
  const { coordinates } = useContext(LocationsContext);
  const reg = new RegExp('^[0-9]*$');
  let isValidPageid = reg.test(locationData.pageid);

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
        {locationData.coordinates[0].dist
          ? (locationData.coordinates[0].dist / 1000).toFixed(1)
          : getDistanceFromLatLonInKm(
              coordinates.lat,
              coordinates.lng,
              locationData.coordinates[0].lat,
              locationData.coordinates[0].lon,
            ).toFixed(1)}{' '}
        kms
      </p>
      {isValidPageid ? (
        <a
          href={`https://en.wikipedia.org/?curid=${locationData.pageid}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia Page{' '}
        </a>
      ) : null}{' '}
      <button
        className="close-info-window"
        aria-label="close info window"
        onClick={() => closeWindow({ show: false, id: '' })}
      >
        x
      </button>
    </div>
  );
}
