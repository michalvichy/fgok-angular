'use strict';

/**
 * @ngdoc function
 * @name fgokAngularApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the fgokAngularApp
 */
angular.module('fgokAngularApp')
	.controller('TodoCtrl', function ($scope, localStorageService) {
		
		var todosInStore = localStorageService.get('todos');

		$scope.todos = todosInStore || [];

		$scope.$watch('todos', function() {
			localStorageService.set('todos', $scope.todos);
		}, true);   

		$scope.addTodo = function() {
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
	});
