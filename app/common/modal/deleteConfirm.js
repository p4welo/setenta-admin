angular.module('setentaAdmin')

    .controller('deleteConfirmDialogCtrl', function ($scope, $modalInstance) {

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirm = function () {
            $modalInstance.close();
        };
    })
;