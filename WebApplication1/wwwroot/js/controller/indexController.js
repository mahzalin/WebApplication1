(function () {
    'use strict';

    angular
        .module('app')
      .controller('indexController', indexController);

    indexController.$inject = ['$scope' , '$http'];

    function indexController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';

        $http.get('./api/Values/api/object').then(
          function (response) {
          $scope.data = response.data;
          },
          function (error) {
            console.log(error);
          });

        
      
    }
})();
