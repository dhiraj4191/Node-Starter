(function() {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/',
      template : '<main></main>'
    });

    $stateProvider.state('jenkins', {
      url: '/jenkins',
      template: '<full-build></full-build>'
    });

    $urlRouterProvider.otherwise('/');
  }
})();
