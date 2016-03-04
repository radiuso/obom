'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PoiSchema = new mongoose.Schema({
  _id: { type: String, index: true },
  name: String,
  tags: { type: Array, default: [] },
  city: String,
  adress: String,
  phone: String,
  minRate: String,
  open: String,
  email: String
});

export default mongoose.model('Poi', PoiSchema);

// {
//   "classement": "",
//   "siteweb": "",
//   "commune": "Lyon 5\u00e8me",
//   "telephone": "",
//   "codepostal": "69005",
//   "id": "130894",
//   "telephonefax": "",
//   "last_update": "2013-09-06 08:27:37",
//   "gid": "5",
//   "tarifsenclair": "",
//   "type": "PATRIMOINE_CULTUREL",
//   "email": "",
//   "nom": "Fresque de la Cour des Loges",
//   "fax": "",
//   "adresse": "26 quai de Bondy / 3 place Ennemont Fousseret",
//   "tarifsmax": "None",
//   "facebook": "",
//   "producteur": "Lyon Tourisme et Congr\u00e8s",
//   "last_update_fme": "2015-09-30 00:08:56",
//   "tarifsmin": "None",
//   "date_creation": "2008-07-19 12:55:49",
//   "id_sitra1": "sitraPCU380735",
//   "ouverture": "",
//   "type_detail": ""
// }
