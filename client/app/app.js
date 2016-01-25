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
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
