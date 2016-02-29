'use strict';

var express = require('express');
var controller = require('../poi/poi.controller');

var router = express.Router();

// router.get('/', controller.gatAllTags);
// router.get('/:id', controller.getTags);
// router.put('/:id', controller.addTag);
router.patch('/:id', controller.addTag);
// router.delete('/:id', controller.destroyTag);

module.exports = router;
