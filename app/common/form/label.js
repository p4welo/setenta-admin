angular.module('setentaAdmin')

    .directive('formLabel', function () {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                ngModel: '=',
                label: "@"
            },
            templateUrl: 'common/form/label.tpl.html'
        };
    })
;