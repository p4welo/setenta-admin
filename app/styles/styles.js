angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('styles', {
            url: '/styles',
            controller: 'styleCtrl',
            templateUrl: 'app/styles/styles.tpl.html'
        });
    })

    .controller("styleCtrl", function ($scope) {
        $scope.test = "styleCtrl";
    });