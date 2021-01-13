var url = 'https://en.wikipedia.org/w/api.php';

var params = {
  action: 'query',
  generator: 'geosearch',
  prop: 'coordinates|pageimages',
  ggscoord: '37.7891838|-122.4033522',
  format: 'json',
};

url = url + '?origin=*';
Object.keys(params).forEach(function (key) {
  url += '&' + key + '=' + params[key];
});

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    var pages = response.query.pages;
    for (var page in pages) {
      console.log(pages[page].title + ': ' + pages[page].thumbnail.source);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
