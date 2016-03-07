'use strict';

import _ from 'lodash';
import GLHandler from '../../components/sourceHandlers/grandLyonHandler.js';
var CronJob = require('cron').CronJob;
var moment = require('moment-timezone');

var job = new CronJob({
  cronTime: '00 00 06 * * *',
  onTick: function() {
    /*
     * Runs every day
     * at 06:00:00 AM.
     */
     GLHandler.populate();
  },
  start: true
});
