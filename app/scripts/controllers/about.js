'use strict';

/**
 * @ngdoc function
 * @name fgokAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fgokAngularApp
 */
angular.module('fgokAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
