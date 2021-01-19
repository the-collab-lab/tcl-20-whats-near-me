import React from 'react';

export default function InfoWindow({ show, handleWindow }) {
  return show ? (
    <button style={{ width: 100, height: 100 }} onClick={handleWindow}>
      x
    </button>
  ) : (
    <div style={{ display: 'none' }}></div>
  );
}
