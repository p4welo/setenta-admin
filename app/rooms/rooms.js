angular.module("setentaAdmin")

    .config(function ($stateProvider) {

        $stateProvider.state('rooms', {
            url: '/rooms',
            controller: 'roomCtrl',
            templateUrl: 'app/rooms/rooms.tpl.html'
        });
    })

    .controller("roomCtrl", function ($scope, roomFactory) {
        $scope.rooms = roomFactory.findAll();

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

        $scope.newRoom = {
            name: ""
        };
        $scope.isSelected = function (room) {
            return room == $scope.selected;
        };
        $scope.select = function (room) {
            if ($scope.selected == room) {
                $scope.selected = null;
            }
            else {
                $scope.selected = room;
            }
        };
        $scope.save = function () {
            roomFactory.save($scope.newRoom);
            $scope.newRoom = {
                name: ""
            };
        };
        $scope.delete = function (room) {
            roomFactory.delete(room);
        };
    });