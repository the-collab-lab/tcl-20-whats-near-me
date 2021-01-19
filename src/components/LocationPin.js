import React, { useState } from 'react';
import './LocationPin.css';
import InfoWindow from '../components/InfoWindow.js';

export default function LocationPin({ img }) {
  const [show, setShow] = useState(false);

  const handleWindow = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div className="pin">
      <div
        className="pin-fill"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <InfoWindow show={show} onClick={handleWindow}>
        Info Window
      </InfoWindow>
    </div>
  );
}
