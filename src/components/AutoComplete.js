import React, { useRef, useEffect, useState } from 'react';

export default function AutoComplete({ map, mapApi }) {
  const autoCompleteRef = useRef(null);
  const [query, setQuery] = useState('');

  let autoComplete;

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    const options = {
      fields: ['formatted_address', 'geometry', 'name'],
      strictBounds: false,
      types: ['address', 'cities'],
    };

    autoComplete = new mapApi.places.Autocomplete(autoCompleteRef, options);

    autoComplete.setFields(['address_components', 'formatted_address']);
    autoComplete.addListener('place_changed', () => {
      handlePlaceSelect(updateQuery);
    });
    autoComplete.bindTo('bounds', map);
  };

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    await updateQuery(query);
    console.log(addressObject);
  }

  useEffect(() => {
    if (mapApi) {
      handleScriptLoad();
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input
        id=" "
        className="search-input"
        ref={autoCompleteRef}
        placeholder="enter a location"
        type="text"
        onChange={handleChange}
        value={query}
      />
    </>
  );
}
