import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';

export default function LoadingIcon() {
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
