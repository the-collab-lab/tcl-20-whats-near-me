import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './LoadingMessage.css';

export default function LoadingMessage() {
  const { loading, setLoading } = useContext(LocationsContext);

  return (
    <>
      {!loading.loading && loading.message !== '' ? (
        <div className="loading-message">
          <p className="message">{loading.message}</p>
          <button
            className="close-message"
            onClick={() => setLoading({ loading: false, message: '' })}
          >
            x
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
