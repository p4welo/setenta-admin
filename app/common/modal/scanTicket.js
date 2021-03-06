angular.module('setentaAdmin')

    .controller('scanTicketDialogCtrl', function ($scope, $state, $modalInstance, $timeout, ticketHttpClient, customerFactory) {

        $scope.customerLoading = false;
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirm = function (code) {
            $scope.customerLoading = true;
            if (code !== undefined) {
                ticketHttpClient.findCustomerByCode({code: code}).$promise.then(
                    function (result) {
                        if (angular.isObject(result) && result.hasOwnProperty("sid")) {
                            customerFactory.setCustomer(result);
                            $state.go("customerCard", {sid: result.sid, code: code});
                        }
                        else {
                            $state.go("sellTicket", {code: code});
                        }
                        $modalInstance.close();
                    }
                );
            }
        };
        $scope.focusInput = function (id) {
            $timeout(function () {
                $(id).focus();
            }, 100);
        };
    })
;