angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('styles', {
            url: '/styles',
            controller: 'styleCtrl',
            templateUrl: 'app/styles/styles.tpl.html'
        });
    })

    .controller("styleCtrl", function ($scope, styleFactory, categoryFactory) {

        $scope.loading = true;
        styleFactory.findAll().$loaded(
            function (result) {
                $scope.categories = result;
                $scope.loading = false;
            }
        );

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

        $scope.newStyle = {
            name: ""
        };
        $scope.isSelected = function (style) {
            return style == $scope.selected;
        };
        $scope.select = function (style) {
            if ($scope.selected == style) {
                $scope.selected = null;
            }
            else {
                $scope.selected = style;
            }
        };
        $scope.save = function () {
            styleFactory.save($scope.newStyle);
            $scope.newStyle = {
                name: ""
            };
        };
        $scope.delete = function (style) {
            styleFactory.delete(style);
            delete $scope.selected;
        };
    });