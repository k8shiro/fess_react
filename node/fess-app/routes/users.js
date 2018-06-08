var express = require('express');
var router = express.Router();

tmp = ""

router.get('/', function(req, res, next) {

  //var url = 'https://ntp-a1.nict.go.jp/cgi-bin/ntp'; // リクエスト先URL
  var url = 'http://fess:8080/json/?q=*\&num=1\&sort=last_modified.desc'


  var request = require('sync-request');

  var response = request('GET', url);

  console.log(response.getBody().toString());
  console.log(response.body.toString());

  tmp = JSON.parse(response.getBody('utf8')).response;
  console.log(tmp)

  res.json([ tmp ])
  //res.json([{
  //	id: 1,
  // 	username: "samsepi0l!!!!!!!!"
  //}, {
  //	id: 2,
  //	username: tmp
  //}]);
});

module.exports = router;
