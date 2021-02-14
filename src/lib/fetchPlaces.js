//function that takes in a lat and lng and returns an array of nearby locations from the proxy endpoint

export const getLocations = (lat, lng, setLocations) => {
  const url = `https://segdeha.com/api/nearby.php?lat=${lat}&lng=${lng}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let pages = response.query ? response.query.pages : [];
      console.log('response', response.query);
      setLocations(pages);
    })
    .catch(console.log);
};
