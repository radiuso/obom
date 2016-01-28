'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PoiSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  photo: String,
  rate: Number
});

export default mongoose.model('Poi', PoiSchema);
