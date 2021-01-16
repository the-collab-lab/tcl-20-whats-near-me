import React from 'react';

export default function LocationPin({ img, text }) {
  return (
    <div
      className="pin"
      style={{ borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }}
    >
      <img
        src={img}
        alt="location"
        style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          objectFit: 'cover',
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(45deg)',
        }}
      ></img>
    </div>
  );
}
