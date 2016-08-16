'use strict';

var express = require('express');
var router = express.Router();

var thing = require('./../../controller/build/jenkins.build.controller.js');

// things ressources
router.get('/test', thing.makecall);
router.get('/api/things', thing.makecall);
router.get('/api/things/:id', thing.get);
router.post('/api/things', thing.post);
router.put('/api/things/:id', thing.put);

module.exports = router;
