angular.module('$selectBox', []).directive('selectBox', function () {
    return {
        restrict: 'E',
        require: ['ngModel', 'ngData', 'ngSelectedId', 'ngSelectedValue', '?ngTitle', 'ngiItemName', 'ngItemId'],
        template: '<input id="showed" type="text" ng-click="showSelectModal()" readonly/>' + '<span id="hidden" type="text" style="display: none;"></span>',
        controller: function ($scope, $element, $attrs, $ionicModal, $parse) {
            $scope.modal = {};

            $scope.showSelectModal = function () {
                var val = $parse($attrs.ngData);
                $scope.data = val($scope);

                $scope.modal.show();
            };

            $scope.closeSelectModal = function () {
                $scope.modal.hide();
            };

            $scope.$on('$destroy', function (id) {
                $scope.modal.remove();
            });

            //{{'Gift.modalTitle' | translate}}
            $scope.modal = $ionicModal.fromTemplate('<div class="modal" id="select">' + '<ion-header-bar>' + '<h1 class="title">' + $attrs.ngTitle + '</h1>' + ' <a ng-click="closeSelectModal()" class="button button-icon icon ion-close"></a>' + '</ion-header-bar>' + '<ion-content>' + '<ul class="list">' + '<li class="item" ng-click="clickItem(item)" ng-repeat="item in data" ng-bind-html="item[\'' + $attrs.ngItemName + '\']"></li>' + '</ul>' + ' </ion-content>' + '</div>', {
                scope: $scope,
                animation: 'slide-in-right'
            });

            $scope.clickItem = function (item) {
                var index = $parse($attrs.ngSelectedId);
                index.assign($scope.$parent, item[$attrs.ngItemId]);

                var value = $parse($attrs.ngSelectedValue);
                value.assign($scope.$parent, item[$attrs.ngItemName]);

                $scope.closeSelectModal();
            };
        },
        compile: function ($element, $attrs) {
            var input = $element.find('input');
            angular.forEach({
                'name': $attrs.name,
                'placeholder': $attrs.ngPlaceholder,
                'ng-model': $attrs.ngSelectedValue
            }, function (value, name) {
                if (angular.isDefined(value)) {
                    input.attr(name, value);
                }
            });

            var span = $element.find('span');
            if (angular.isDefined($attrs.ngSelectedId)) {
                span.attr('ng-model', $attrs.ngSelectedId);
            }
        }
    };
});
//# sourceMappingURL=selectBox.js.map
