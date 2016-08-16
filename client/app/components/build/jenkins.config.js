(function() {
  'use strict';

  angular.module('app')
    .directive('fullBuild', function() {
      return {
        restrict : 'E',
        templateUrl : 'app/components/views/jenkins-build.template.html',
        controller : jenkinsBuildCtrl,
        controllerAs : 'jenkinsFullBuild',
        bindToController : true
      };
    });

  jenkinsBuildCtrl.$inject = ['$http'];

  function jenkinsBuildCtrl($http) {
    var fullBuild = this;

    fullBuild.data = {};
    fullBuild.status = '';
    fullBuild.executeBuild = function() {
      $http.get('/api/things', fullBuild.data)
        .then(function (response) {
          fullBuild.thingList = response.data;
          fullBuild.status = 'Ok';
        }, function errorCallback(response) {
          alert('Error occured');
        });
    };
  }
})();
