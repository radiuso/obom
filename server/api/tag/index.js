'use strict';

var express = require('express');
var controller = require('../poi/poi.controller');

var router = express.Router();

router.put('/:tag/:id', controller.addTag);
router.patch('/:tag/:id', controller.addTag);
router.delete('/:tag/:id', controller.removeTag);

module.exports = router;
