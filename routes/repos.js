var express = require('express');
var router = express.Router();
var config = require('../config.json');
var http = require('http');
var request = require('request');
var syncRequest = require('sync-request');

/* GET users listing. */
router.get('/sync', function (req, res, next) {
    var requestRes = syncRequest('GET', config.host + '/api/v1/user/repos?token=' + config.token);
    var resjson = JSON.parse(requestRes.getBody('utf8'));
    res.send(resjson);
});

router.get('/', function (req, res, next) {
    request(config.host + '/api/v1/user/repos?token=' + config.token, function (error, response, body) {
        var result = JSON.parse(body);
        var urls = new Array();
        for (var i = 0; i < result.length; i++) {
            urls[i] = result[i].clone_url;
        }
        res.send(JSON.stringify(urls));
    });

});

module.exports = router;