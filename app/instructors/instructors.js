angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('instructors', {
            url: '/instructors',
            controller: 'instructorCtrl',
            templateUrl: 'app/instructors/instructors.tpl.html'
        });
    })

    .controller("instructorCtrl", function ($scope, instructorFactory) {
        $scope.instructors = instructorFactory.findAll();

        $scope.sort = {
            column: 'firstName',
            descending: false
        };
        $scope.toggleSort = function (column) {
            var sort = $scope.sort;
            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };
        $scope.sortIcon = function (column) {
            var sort = $scope.sort;
            if (sort.column == column) {
                return sort.descending ? "fa fa-caret-down" : "fa fa-caret-up";
            }
            return "";
        };

        $scope.newInstructor = {
            firstName: "",
            lastName: "",
            nick: ""
        };
        $scope.isSelected = function (instructor) {
            return instructor == $scope.selected;
        };
        $scope.select = function (instructor) {
            if ($scope.selected == instructor) {
                $scope.selected = null;
            }
            else {
                $scope.selected = instructor;
            }
        };
        $scope.save = function () {
            instructorFactory.save($scope.newInstructor);
            $scope.newInstructor = {
                firstName: "",
                lastName: "",
                nick: ""
            };
        };
        $scope.delete = function (instructor) {
            instructorFactory.delete(instructor);
        };
    });