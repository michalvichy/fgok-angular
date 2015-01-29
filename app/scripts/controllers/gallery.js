'use strict';

/**
 * @ngdoc function
 * @name fgokAngularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the fgokAngularApp
 */
angular.module('fgokAngularApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
