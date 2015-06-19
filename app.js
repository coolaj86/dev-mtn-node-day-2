'use strict';

module.exports = function () {
  var express = require('express');
  var app = express();

  app.use('/', function (request, response) {

    var messages = [];

    if ('/' === request.url) {
      response.end('<html>Hello</html>');
      return;
    }

    if ('/api/message' === request.url && 'get' === request.method) {
      response.end(JSON.stringify(messages));
      return;
    }

    if ('/api/message' === request.url && 'post' === request.method) {
      var msg = '';
      request.on('data', function (chunk) {
        msg += chunk.toString('utf-8');
      });
      request.on('end', function () {
        messages.push(msg);
        response.end('{ success: true }');
      });
      return;
    }

    response.end('hello');
  });

  return app;
};
