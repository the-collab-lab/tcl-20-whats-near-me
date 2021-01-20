import React, { useContext, useEffect } from 'react';
import { ListContext } from '../context/ListContext';

export default function InfoWindow({ text, $dimensionKey }) {
  const listContext = useContext(ListContext);

  const location = listContext.locations.filter(
    (item) => item.pageid == $dimensionKey,
  );

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
        <li>Thumbnail </li>
        <li>Kms from Center </li>
        <li>
          <a href={`https://en.wikipedia.org/?curid=${location[0].pageid}`}>
            Link{' '}
          </a>{' '}
        </li>
      </ul>
      <button onClick={handleClose}>x</button>
    </div>
  );
}
