(function () {
    'use strict';

    angular
        .module('app')
        .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$http'];

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
        $http.get('./api/int-value2/50').then(
            function (response) {
                $scope.val = response.data;
            },
            function (error) {
                console.log(error);
            });
        $http.get('./api/string-value/niloofar').then(
            function (response) {
                $scope.val2 = response.data;
            },
            function (error) {
                console.log(error);
            });
        $http.get('./api/array').then(
            function (response) {
                $scope.val3 = response.data;
            },
            function (error) {
                console.log(error);
            });
    }
})();
