import React, { useContext, useState } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import './LoadingMessage.css';

export default function LoadingMessage() {
  const { loading } = useContext(LocationsContext);

  return (
    <div className="loading-message">{loading ? <h1>loading</h1> : null}</div>
  );
}
