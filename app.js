'use strict';

module.exports = function () {
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var messages = [];

  // C:\blablatnaoeh\ntaoeunstahoeu
  // /Users/bob/Documents
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/api', bodyParser.json({
    inflate: true
  , limit: 1024 * 1024
  , reviver: null
  , strict: true
  }));

  app.use('/', function (request, response, next) {
    console.log(request.method, request.url);
    next();
  });

  app.use('/secret', function (request, response) {
    response.send('You FOUND ME!!!! bwahahahaha');
  });

  app.get('/api/echo/:msg?', function (request, response) {
    response.send(request.params.msg || 'The cake is a lie!');
  });

  app.get('/api/message', function (request, response) {
    response.send(messages);
  });

  app.get('/api/message', function (request, response) {
    response.send(messages);
  });

  app.post('/api/message', function (request, response) {
    var msg = request.body;
    messages.push(msg);
    response.send({ success: true });
  });

  app.use('/api', function (request, response) {
    response.end('api error');
  });

  return app;
};
