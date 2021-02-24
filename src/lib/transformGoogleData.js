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

// const transformGooglePlaceData = (googleSearchResult) => {

//     return {
//         pageid: null,
//         title,
//         coordinates,
//         thumbnail,
//         description
//     }
// }

/**
 *
 * @param {Array} googleSearchResults list of google places results
 * @param {Array} wikiResults list of wikipedia results
 *
 * @return {Array} combined list of wikipedia & google results in wikipedia format
 **/

export const combineGoogleWikiResults = (googleSearchResults, wikiResults) => {
  // const transformedResults = googleSearchResults.map(transformGooglePlaceData)
  // return [...wikiResults, ...transformedResults]
};
