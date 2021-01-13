import React from 'react';

export default function LocationPin({ img }) {
  return (
    <div className="pin">
      <p>This is a Location</p>
      <img
        src={img}
        alt="location"
        style={{ width: '50px', height: '50px' }}
      ></img>
    </div>
  );
}
