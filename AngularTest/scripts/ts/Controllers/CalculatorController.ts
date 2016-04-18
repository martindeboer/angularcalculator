// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";


    interface ICalculatorController {

    }

  
    class CalculatorController implements ICalculatorController {
      
        static $inject: string[] =
        ["$scope", "$rootScope", "SynchronizationService"];

        constructor(
            private $scope: ng.IScope,
            private rootScope: angular.IRootScopeService,
            private synchronizationService: App.AngularTest.Services.ISynchronizationService
        ) {
            this.activate();
        }

        activate() {
         
        }

      
   

    }
    angular.module("app").controller("CalculatorController", CalculatorController);
}