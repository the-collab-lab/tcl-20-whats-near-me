import React, { useContext } from 'react';
import { LocationsContext } from '../context/LocationsContext';
import { Icon, InlineIcon } from '@iconify/react';
import arrowCycle from '@iconify-icons/akar-icons/arrow-cycle';

import './LoadingMessage.css';

export default function LoadingMessage() {
  const { loading, allowLocation } = useContext(LocationsContext);

  return (
    <div className="loading-message">
      {loading.loading && allowLocation ? (
        <Icon icon={arrowCycle} className="loading-icon" />
      ) : (
        <p>{loading.message}</p>
      )}
    </div>
  );
}
