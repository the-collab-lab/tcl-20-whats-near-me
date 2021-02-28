import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './LoadingIcon.css';

export default function LoadingIcon() {
  const { loading } = useContext(LocationsContext);

  return (
    <>
      {!loading.loading && loading.message !== '' ? (
        <p className="loading-message">{loading.message}</p>
      ) : (
        ''
      )}
    </>
  );
}
