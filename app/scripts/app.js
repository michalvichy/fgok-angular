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
    'ngRoute',
    'LocalStorageModule'
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
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('todo')
      .setNotify(true, true);
  });
