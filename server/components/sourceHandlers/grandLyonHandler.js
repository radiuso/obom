'use strict';

var _ = require('lodash');
import Poi from '../../api/poi/poi.model';
import request from 'request';

module.exports = {
  /**
   * Get the Poi JSON source then populate the database.
   *
   * @return {String}
   */
  populate: function() {
    console.log("Populating database ... ");
    request('https://download.data.grandlyon.com/ws/rdata/sit_sitra.sittourisme/all.json', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var pois = JSON.parse(body);

        pois.values.forEach(function(poi) {
          // If poi has no restauration type property we do nothing
          if (poi.type !== 'RESTAURATION')
            return;

          // Populate the new poi model
          var newPoi = new Poi(poi);
          newPoi._id = poi.id_sitra1;

          // Handle Tags
          if (poi.type_detail.length !== 0) {
            newPoi.tags = poi.type_detail.split(';');
          }

          newPoi.name = poi.nom;
          newPoi.city = poi.commune;
          newPoi.adress = poi.adresse;
          newPoi.phone = poi.telephone;
          newPoi.minRate = poi.tarifsmin;
          newPoi.open = poi.ouverture;
          newPoi.email = poi.email;

          // Convert the Model instance to a simple object using Model's 'toObject' function
          // to prevent weirdness like infinite looping...
          var upsertData = newPoi.toObject();

          // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
          delete upsertData._id;

          // Do the upsert, which works like this: If no Poi document exists with
          // _id = newPoi.id, then create a new doc using upsertData.
          // Otherwise, update the existing doc with upsertData
          Poi.update(
            {_id: newPoi._id},
            upsertData,
            {upsert: true},
            function(err, doc) {
              if (err)
                console.log(doc);
            });
        });

      } else {
        console.log(error);
      }
    })
  }
};
