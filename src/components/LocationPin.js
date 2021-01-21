import React from 'react';
import './LocationPin.css';
import { Icon } from '@iconify/react';
import InfoWindow from '../components/InfoWindow.js';
import location12Filled from '@iconify-icons/fluent/location-12-filled';

export default function LocationPin({ img, $dimensionKey }) {
  return !img ? (
    <>
      <Icon icon={location12Filled} width={24} height={24}></Icon>
      <InfoWindow $dimensionKey={$dimensionKey} />
    </>
  ) : (
    <>
      <button className="pin">
        <div
          className="pin-fill"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </button>
      <InfoWindow $dimensionKey={$dimensionKey} />
    </>
  );
}
