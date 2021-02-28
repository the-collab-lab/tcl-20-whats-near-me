import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';

import './LoadingMessage.css';

export default function LoadingMessage() {
  const { loading, allowLocation } = useContext(LocationsContext);

  return (
    <>
      {loading.loading && allowLocation ? (
        <div className="loading-icon"></div>
      ) : (
        ''
      )}
    </>
  );
}
