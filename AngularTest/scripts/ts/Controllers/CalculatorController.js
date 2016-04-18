// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            class CalculatorController {
                constructor($scope, rootScope, calculatorService) {
                    this.$scope = $scope;
                    this.rootScope = rootScope;
                    this.calculatorService = calculatorService;
                    this.activate();
                }
                activate() {
                }
                cmdExecuteOnClick() {
                    switch (parseInt(this.operator)) {
                        case 0:
                            this.calculatorService.Add(this.leftHand, this.rightHand).then((result) => {
                                console.log(this.leftHand + " + " + this.rightHand + " = " + result);
                                this.result = result;
                            });
                            break;
                        case 1:
                            this.calculatorService.Subtract(this.leftHand, this.rightHand).then((result) => {
                                console.log(this.leftHand + " - " + this.rightHand + " = " + result);
                                this.result = result;
                            });
                            break;
                        case 2:
                            this.calculatorService.Divide(this.leftHand, this.rightHand).then((result) => {
                                console.log(this.leftHand + " / " + this.rightHand + " = " + result);
                                this.result = result;
                            });
                            break;
                        case 3:
                            this.calculatorService.Multiply(this.leftHand, this.rightHand).then((result) => {
                                console.log(this.leftHand + " * " + this.rightHand + " = " + result);
                                this.result = result;
                            });
                            break;
                        default:
                            break;
                    }
                }
            }
            CalculatorController.$inject = ["$scope", "$rootScope", "CalculatorService"];
            angular.module("app").controller("CalculatorController", CalculatorController);
        })(Controllers = AngularTest.Controllers || (AngularTest.Controllers = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=CalculatorController.js.map