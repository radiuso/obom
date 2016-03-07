'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/obm-dev'
  },

  // Seed database on startup
  seedDB: false,

  //Enable cron job to populate the DB
  cron: true

};
