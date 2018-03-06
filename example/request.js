// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/sync-request
// npm install request

var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

request
  .get('https://www.baidu.com/img/bd_logo1.png')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'))