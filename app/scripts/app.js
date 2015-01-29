'use strict';

/**
 * @ngdoc overview
 * @name fgokAngularApp
 * @description
 * # fgokAngularApp
 *
 * Main module of the application.
 */
angular
  .module('fgokAngularApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
