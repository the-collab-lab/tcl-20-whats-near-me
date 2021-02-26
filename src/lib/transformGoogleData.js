/* function that transforms google map places results 
to mimic the format of wikipedia results */

/**
 * Tranform google map places results
 * to mimic the format wikipedia results
 *
 * @param {Object} googleSearchResult The nearby location result that the search term returns
 *
 * @return {Object} returns an object matching wikipedia format results
 */

const transformGooglePlaceData = (googleSearchResult) => {
  let transformedData = {
    title: '',
    thumbnail: {
      source: '',
      height: 100,
      width: 100,
    },
    coordinates: [{ lat: '', lon: '' }],
    description: '',
    pageid: '',
  };
  transformedData.title = googleSearchResult.name;
  transformedData.thumbnail.source = googleSearchResult.photos[0].getUrl({
    maxWidth: 100,
    maxHeight: 100,
  });
  transformedData.coordinates[0].lat = googleSearchResult.geometry.location.lat();
  transformedData.coordinates[0].lon = googleSearchResult.geometry.location.lng();
  transformedData.description = googleSearchResult.vicinity;
  transformedData.pageid = googleSearchResult.place_id;

  return transformedData;
};

/**
 *
 * @param {Array} googleSearchResults list of google places results
 * @param {Array} wikiResults list of wikipedia results
 *
 * @return {Array} combined list of wikipedia & google results in wikipedia format
 **/

export const combineGoogleWikiResults = (googleSearchResults, wikiResults) => {
  const transformedResults = googleSearchResults.map(transformGooglePlaceData);
  return [...wikiResults, ...transformedResults];
};
