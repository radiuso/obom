/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Poi from '../api/poi/poi.model';
import Profile from '../api/profile/profile.model';

Profile.find({}).removeAsync()
  .then(() => {
    Profile.create({
      distanceMax: 2000,
      tags: ['restaurant']
    });
  });

// Poi.find({}).removeAsync()
//   .then(() => {
//     Poi.create({
//       name: 'Poivron bleu'
//       , info: 'Le poivron bleu propose une cuisine élaborée exclusivement à partir de produits frais et de qualité. L\'ensemble de nos plats et de nos desserts sont réellement faits maison.'
//       , photo: 'http://www.lepoivronbleurestaurant.fr/visuels/restaurant/enseigne2.JPG'
//       , rate: 4
//     },
//     {
//       name: 'Lucien & la Cocotte'
//       , info: 'Du poulet de grande qualité, des herbes, des épices, des marinades sucrées ou salées et des produits frais sont cuisinés par Lucien d\'après chaque recette ramenée de voyage. '
//       , photo: 'http://espace-gaia.com/wp-content/uploads/2013/06/02-Lucien-mosaique.png'
//       , rate: 3
//     },
//     {
//       name: 'Salt and Pepper'
//       , info: 'NOOOONNN'
//       , photo: 'http://kebabemir.pl/wp-content/uploads/2014/11/kebab1.jpg'
//       , rate: 5
//     },
//     {
//       name: 'Le 126'
//       , info: '126 r. de Seze 69006 Lyon 06'
//       , photo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxm8ILX6ugApjGEeUA0S0StNuukFvNhznPXs6OT29tTS40NCMJLA'
//       , rate: 5
//     });
//   });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
