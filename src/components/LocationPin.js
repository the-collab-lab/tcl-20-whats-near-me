import React from 'react';
import './LocationPin.css';

export default function LocationPin({ img }) {
  return (
    <div className="pin">
      <div
        className="pin-fill"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
}
