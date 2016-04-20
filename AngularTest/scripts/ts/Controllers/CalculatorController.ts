// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";


    interface ICalculatorController {

    }

  
    class CalculatorController implements ICalculatorController {

        operator: number;
        leftHand: number;
        rightHand: number;
        result: number;
        calculatorInput: number;

        static $inject: string[] =
        ["$scope", "$rootScope", "CalculatorService"];

        constructor(
            private $scope: ng.IScope,
            private rootScope: angular.IRootScopeService,
            private calculatorService: App.AngularTest.Services.ICalculatorService
        ) {
            this.activate();
        }

        activate() {
         
        }

        cmdNumberOnClick(numberClicked: number)
        {
            var buffer = this.calculatorInput.toString();
            buffer = buffer.concat(numberClicked.toString());

            this.calculatorInput = parseInt(buffer);
        }

        cmdExecuteOnClick()
        {
            switch (parseInt(this.operator as any))
            {
                case 0:
                    this.calculatorService.Add(this.leftHand, this.rightHand).then((result) =>
                    {
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
    angular.module("app").controller("CalculatorController", CalculatorController);
}