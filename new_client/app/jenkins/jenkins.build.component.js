angular.module('jenkins')
  .component('welcomeUser', {
    template : 'welcome {{$ctrl.user}}',
    controller : ['$routeParams',
      function welcomeCtrl($routeParams) {
        this.name = $routeParams.greet;
      }
    ]
  });
