angular.module('jenkins')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/test', {
          template: '<welcome-user></welcome-user>'
        })
        .otherwise('/test');
    }
  ]);
