'use strict';

angular.module('obmApp', [
  'obmApp.auth',
  'obmApp.admin',
  'obmApp.constants',
  'obmApp.things',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial',
  'ngMessages',
  'uiGmapgoogle-maps'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .warnPalette('orange')
  });
