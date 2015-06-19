'use strict';

module.exports = function () {
  var express = require('express');
  var app = express();
  var messages = ['Hello', 'My name is bob!'];

  app.use('/', function (request, response, next) {
    console.log(request.method, request.url);
    next();
  });

  app.use('/secret', function (request, response) {
    response.end('You FOUND ME!!!! bwahahahaha');
  });

  app.get('/api/message', function (request, response) {
    response.send(messages);
  });

  app.post('/api/message', function (request, response) {
    var msg = '';
    request.on('data', function (chunk) {
      msg += chunk.toString('utf-8');
    });
    request.on('end', function () {
      messages.push(msg);
      response.end('{ success: true }');
    });
  });

  app.use('/api', function (request, response) {
    response.end('api error');
  });

  return app;
};
