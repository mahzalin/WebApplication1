(function () {
    'use strict';

    angular
        .module('app')
        .controller('page2Controller', page2Controller);

    page2Controller.$inject = ['$scope', '$http'];

    function page2Controller($scope, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller';

        $http.get('./api/Values/api/array').then(
            function (response) {
                $scope.val3 = response.data;
            },
            function (error) {
                console.log(error);
            });
    }
})();
