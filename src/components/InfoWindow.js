import React from 'react';

export default function InfoWindow({ text, $dimensionKey }) {
  const handleClose = () => {
    document.querySelector(`.info-window-${$dimensionKey}`).style.display =
      'none';
  };

  return (
    <div
      className={`info-window-${$dimensionKey}`}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'pink',
        border: '1px solid black',
        display: 'none',
      }}
    >
      <button onClick={handleClose}>x</button>
    </div>
  );
}
