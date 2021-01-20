import React, { useContext } from 'react';
import { getDistanceFromLatLonInKm } from '../helpers/Haversine';
import { LocationsContext } from '../context/LocationsContext';

export default function InfoWindow({ text, $dimensionKey }) {
  const locationsContext = useContext(LocationsContext);

  const location = locationsContext.locations.filter(
    (item) => item.pageid == $dimensionKey,
  );

  console.log(locationsContext.coordinates.lat);
  console.log(locationsContext.coordinates.lon);
  console.log(location[0].coordinates[0].lat);
  console.log(location[0].coordinates[0].lon);

  const handleClose = () => {
    document.querySelector(`.info-window-${$dimensionKey}`).style.display =
      'none';
  };

  return (
    <div
      className={`info-window-${$dimensionKey}`}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'pink',
        border: '1px solid black',
        display: 'none',
      }}
    >
      <ul>
        <li>Title: {location[0].title}</li>
        <li>Description: {location[0].description}</li>
        {/* TODO: make condition rendering based on img  <li 
          style={{ backgroundImage: `url(${location[0].thumbnail.source})`, height: location[0].thumbnail.height, width: location[0].thumbnail.width }} >Thumbnail </li> */}

        <li>Kms from Center: </li>
        <li>
          <a
            href={`https://en.wikipedia.org/?curid=${location[0].pageid}`}
            target="_blank"
            // type="noreferrer" ?
          >
            Link{' '}
          </a>{' '}
        </li>
      </ul>
      <button onClick={handleClose}>x</button>
    </div>
  );
}
