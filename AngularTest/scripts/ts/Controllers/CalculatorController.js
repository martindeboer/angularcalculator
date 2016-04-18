// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            class HomeController {
                constructor($scope, rootScope, synchronizationService) {
                    this.$scope = $scope;
                    this.rootScope = rootScope;
                    this.synchronizationService = synchronizationService;
                    this.activate();
                }
                activate() {
                }
            }
            HomeController.$inject = ["$scope", "$rootScope", "SynchronizationService"];
            angular.module("app").controller("HomeController", HomeController);
        })(Controllers = AngularTest.Controllers || (AngularTest.Controllers = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=CalculatorController.js.map