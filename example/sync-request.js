// http://blog.csdn.net/isaisai/article/details/51387793
// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/sync-request
// npm install sync-request
var request = require('sync-request');
var res = request('GET', 'http://www.baidu.com');
console.log(res.getBody().toString());