'use strict';

var Client = require('node-rest-client').Client;
var client = new Client();
var request = require('request');
var Thing = require('./../../model/build/jenkins.build.model');
var path = require('path');

/**
 * GET /things
 *
 * @description
 * list of things
 *
 */
exports.find = function(req, res, next) {
  Thing.find(function(err, things) {
    if (err) {
      return next(err);
    }
    return res.status(200).json(things);
  });
};

exports.makecall = function(req, res, next) {
  client.get('http://jsonplaceholder.typicode.com/posts/1', function(data, response) {
    console.log('passed');
    return res.status(200).json(data);
  }).on('error', function(err) {

    return  res.status(500).json({body : "Error occured !!!"});
  });
};
/**
 * GET /things/:id
 *
 * @description
 * Find thing by id
 *
 */
exports.get = function(req, res, next) {
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return next(err);
    }
    if (!thing) {
      return res.status(404).send('Not Found');
    }
    return res.status(200).json(thing);
  });
};

/**
 * POST /things
 *
 * @description
 * Create a new thing
 *
 */
exports.post = function(req, res, next) {
  Thing.create(req.body, function(err, thing) {
    if (err) {
      return next(err);
    }
    return res.status(201).json(thing);
  });
};

/**
 * PUT /things/:id
 *
 * @description
 * Update a thing
 *
 */
exports.put = function(req, res, next) {
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return next(err);
    }
    if (!thing) {
      return res.status(404).send('Not Found');
    }

    thing.name = req.body.name;
    thing.description = req.body.description;

    thing.save(function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(thing);
    });
  });
};
