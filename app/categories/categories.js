angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('categories', {
            url: '/categories',
            controller: 'categoryCtrl',
            templateUrl: 'app/categories/categories.tpl.html'
        });
    })

    .controller("categoryCtrl", function ($scope, categoryFactory) {
        $scope.categories = categoryFactory.findAll();

        $scope.sort = {
            column: 'name',
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

        $scope.newCategory = {
            name: ""
        };
        $scope.isSelected = function (category) {
            return category == $scope.selected;
        };
        $scope.select = function (category) {
            if ($scope.selected == category) {
                $scope.selected = null;
            }
            else {
                $scope.selected = category;
            }
        };
        $scope.save = function () {
            categoryFactory.save($scope.newCategory);
            $scope.newCategory = {
                name: ""
            };
        };
        $scope.delete = function (category) {
            categoryFactory.delete(category);
        };
    });