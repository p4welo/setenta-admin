angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('courses', {
            url: '/courses',
            controller: 'courseCtrl',
            templateUrl: 'app/courses/courses.tpl.html'
        });
    })

    .controller("courseCtrl", function ($scope, courseFactory) {
        $scope.test = "courseCtrl";
    });