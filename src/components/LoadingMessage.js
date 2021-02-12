import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './LoadingMessage.css';

export default function LoadingMessage() {
  const { loading, allowLocation } = useContext(LocationsContext);

  return (
    <div className="loading-message">
      {loading.loading && allowLocation ? (
        <h1>loading</h1>
      ) : (
        <h1>{loading.message}</h1>
      )}
    </div>
  );
}
