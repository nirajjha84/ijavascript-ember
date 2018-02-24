/* eslint-env node */
'use strict';

var success_res = {     
  "success": true,
  "isUserAuthenticated": true,
  "customerid": "IJ101"
};

module.exports = function(app) {
  const express = require('express');
  let authenticateUserRouter = express.Router();

  authenticateUserRouter.get('/', function(req, res) {
    res.send({
      'authenticate-user': success_res
    });
  });

  authenticateUserRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  authenticateUserRouter.get('/:id', function(req, res) {
    res.send({
      'authenticate-user': {
        id: req.params.id
      }
    });
  });

  authenticateUserRouter.put('/:id', function(req, res) {
    res.send({
      'authenticate-user': {
        id: req.params.id
      }
    });
  });

  authenticateUserRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/authenticate_user', require('body-parser').json());
  app.use('/api/authenticate_user', authenticateUserRouter);
};
