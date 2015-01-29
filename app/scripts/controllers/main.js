'use strict';

/**
 * @ngdoc function
 * @name fgokAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fgokAngularApp
 */
angular.module('fgokAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
