angular.module('setentaAdmin')

    .directive('formTranslatedCombo', function () {
        return {
            restrict: 'E',
            scope: {
                object: '=',
                label: "@",
                field: "@",
                list: "=",
                onSave: "="
            },
            replace: true,
            templateUrl: 'common/form/translatedCombo.tpl.html',
            controller: function ($scope) {
                $scope.editing = false;
                $scope.edit = function () {
                    $scope.oldValue = $scope.object[$scope.field];
                    $scope.editing = true;
                };
                $scope.cancel = function () {
                    $scope.object[$scope.field] = $scope.oldValue;
                    $scope.editing = false;
                };
                $scope.save = function () {
                    $scope.saving = true;
                    $scope.onSave($scope.object, $scope.field, function () {
                        $scope.saving = false;
                        $scope.editing = false;
                    });
                };
            }
        };
    })
;