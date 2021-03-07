import React, { useRef, useEffect, useState } from 'react';
import './SearchBox.css';

export default function AutoComplete({ mapInstance, mapsApi }) {
  const autoCompleteRef = useRef(null);
  const [query, setQuery] = useState('');

  let autoComplete;

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    const options = {
      fields: ['formatted_address', 'geometry', 'name'],
      strictBounds: false,
      types: ['address', 'cities'],
    };

    autoComplete = new mapsApi.places.Autocomplete(autoCompleteRef, options);

    autoComplete.setFields(['address_components', 'formatted_address']);
    autoComplete.addListener('place_changed', () => {
      handlePlaceSelect(updateQuery);
    });
    autoComplete.bindTo('bounds', mapInstance);
  };

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    await updateQuery(query);
    console.log(addressObject);
  }

  useEffect(() => {
    if (mapsApi) {
      handleScriptLoad();
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        ref={autoCompleteRef}
        placeholder="enter a location"
        type="text"
        onChange={handleChange}
        value={query}
      />
    </div>
  );
}
