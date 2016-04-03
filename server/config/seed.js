/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
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

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

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
