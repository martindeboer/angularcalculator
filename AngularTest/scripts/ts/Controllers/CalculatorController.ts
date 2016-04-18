// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";


    interface ICalculatorController {

    }

  
    class CalculatorController implements ICalculatorController {

        operator: number;
        leftHand: number;
        rightHand: number;

        static $inject: string[] =
        ["$scope", "$rootScope", "SynchronizationService"];

        constructor(
            private $scope: ng.IScope,
            private rootScope: angular.IRootScopeService,
            private synchronizationService: App.AngularTest.Services.ICalculatorService
        ) {
            this.activate();
        }

        activate() {
         
        }

        cmdExecuteOnClick()
        {
        }
      
   

    }
    angular.module("app").controller("CalculatorController", CalculatorController);
}