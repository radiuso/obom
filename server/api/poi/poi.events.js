/**
 * Poi model events
 */

'use strict';

import {EventEmitter} from 'events';
var Poi = require('./poi.model');
var PoiEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PoiEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Poi.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PoiEvents.emit(event + ':' + doc._id, doc);
    PoiEvents.emit(event, doc);
  }
}

export default PoiEvents;
