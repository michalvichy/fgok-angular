'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('fgokAngularApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  describe('#addTodo', function() {
    it('add new todo to the list', function(){
      scope.todo = 'foobar';
      scope.addTodo();
      expect(scope.todos.length).toBe(4);
    });

    it('checks if input is not empty string', function(){
      scope.todo = '';
      scope.addTodo();
      expect(scope.todos.length).toBe(3);
    });

    it('checks if input is not undefined', function(){
      scope.addTodo();
      expect(scope.todos.length).toBe(3);
    });
  });

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(3);
  });

  it('Removes task from todos', function(){
    scope.removeTodo();
    expect(scope.todos.length).toBe(2);
  });
});
