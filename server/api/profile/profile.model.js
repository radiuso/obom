'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProfileSchema = new mongoose.Schema({
  distanceMax: Number,
  tags: { type: Array, default: [] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});

export default mongoose.model('Profile', ProfileSchema);
