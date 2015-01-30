'use strict';

/**
 * @ngdoc function
 * @name fgokAngularApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the fgokAngularApp
 */
angular.module('fgokAngularApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = ['Zakupy', 'Napisać CV', 'Rocznica'];

    $scope.addTodo = function() {
    	// console.log($scope.todo);
    	if( !isEmpty($scope.todo) ) {
	    	$scope.todos.push($scope.todo);
	    	$scope.todo = '';    		
    	}
    };

    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };

    var isEmpty = function(object) {
    	if (object === '' || object === undefined) {
    		return true;
    	}
    	else { return false; }
    };
  })
  .filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
		};
	});
