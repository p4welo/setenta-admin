angular.module("setentaAdmin", ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/courses');

        $stateProvider.state('courses', {
            url: '/courses',
            controller: 'courseCtrl',
            templateUrl: 'app/courses/courses.tpl.html'
        });
        $stateProvider.state('styles', {
            url: '/styles',
            controller: 'styleCtrl',
            templateUrl: 'app/styles/styles.tpl.html'
        });
        $stateProvider.state('categories', {
            url: '/categories',
            controller: 'categoryCtrl',
            templateUrl: 'app/categories/categories.tpl.html'
        });
        $stateProvider.state('instructors', {
            url: '/instructors',
            controller: 'instructorCtrl',
            templateUrl: 'app/instructors/instructors.tpl.html'
        });
        $stateProvider.state('rooms', {
            url: '/rooms',
            controller: 'roomCtrl',
            templateUrl: 'app/rooms/rooms.tpl.html'
        });
    })

    .controller("courseCtrl", function ($scope) {
        $scope.test = "courseCtrl";
    })

    .controller("styleCtrl", function ($scope) {
        $scope.test = "styleCtrl";
    })

    .controller("categoryCtrl", function ($scope) {
        $scope.test = "categoryCtrl";
    })

    .controller("instructorCtrl", function ($scope) {
        $scope.test = "instructorCtrl";
    })

    .controller("roomCtrl", function ($scope) {
        $scope.test = "roomCtrl";
    })