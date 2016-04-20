// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.AngularTest.Controllers {
    "use strict";


    interface ICalculatorController {

    }

    enum calculatorOperator {
        add = 0,
        subtract,
        multiply,
        divide
    }

    enum calculatorFunctionType {
        power = 0,
        square,
        sinus,
        cosinus,
        tangent,
        naturalLogarithm,
        logarithm
    }

    class calculatorOperation {
        leftHand: any;
        operator: calculatorOperator;
        rightHand: any;

        constructor() {
            this.leftHand = null;
            this.operator = null;
            this.rightHand = null;
        }

        public toString(): string {
            var result: string = "";

            if (this.leftHand != null) {
                if (this.leftHand instanceof calculatorFunction) {
                    result += (this.leftHand as calculatorFunction).toString();
                } else {
                    result += this.leftHand;
                }
            }

            if (this.operator != null) {
                result += this.operator;
            }

            if (this.rightHand != null) {
                if (this.rightHand instanceof calculatorFunction) {
                    result += (this.rightHand as calculatorFunction).toString();
                } else {
                    result += this.rightHand;
                }
            }

            return result;
        }
    }

    class calculatorFunction {
        calculatorOperations: calculatorOperation[];
        parent: calculatorFunction;
        type: calculatorFunctionType;

        public constructor(myParent: calculatorFunction) {
            this.parent = myParent;
            this.calculatorOperations = [];
        }


        public toString(): string {
            var result: string = "";

            this.calculatorOperations.forEach((thisCalculatorOperation, index, array) => {
                if (thisCalculatorOperation.leftHand != null) {
                    if (thisCalculatorOperation.leftHand instanceof calculatorFunction) {
                        result += (thisCalculatorOperation.leftHand as calculatorFunction).toString();
                    } else {
                        result += thisCalculatorOperation.leftHand;
                    }
                }

                if (thisCalculatorOperation.operator != null) {
                    result += thisCalculatorOperation.operator;
                }

                if (thisCalculatorOperation.rightHand != null) {
                    if (thisCalculatorOperation.rightHand instanceof calculatorFunction) {
                        result += (thisCalculatorOperation.rightHand as calculatorFunction).toString();
                    } else {
                        result += thisCalculatorOperation.rightHand;
                    }
                }
            });

            return result;
        }
    }


    class CalculatorController implements ICalculatorController {

        operator: number;
        leftHand: number;
        rightHand: number;
        result: number;
        calculatorInput: string;

        mainFunction: calculatorFunction;
        mainFunctionPointer: calculatorFunction;

        calculatorOperatorDescriptions: string[] = [" + ", " - ", " * ", " / "];
        calculatorFunctionTypes: string[] = [" pow", " sqr", " sin", " cos", " tan", " ln", " log"];


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

            this.mainFunction = new calculatorFunction(null);
            this.mainFunctionPointer = this.mainFunction;
            this.calculatorInput = "";
        }


        cmdOperatorOnClick(operator: string) {
            var buffer = this.calculatorInput.toString();
            buffer.replace("[0]{0,}", "");

            this.calculatorInput = buffer;
        }

        cmdNumberOnClick(numberClicked: number) {
            var buffer = this.calculatorInput.toString();
            buffer = buffer.concat(numberClicked.toString());

            buffer.replace("[0]{0,}", "");

            this.calculatorInput = buffer;
        }


        cmdExecuteOnClick() {
            switch (parseInt(this.operator as any)) {
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

        private AddNumber(thisNumber: number) {
            var lastIndex = this.mainFunctionPointer.calculatorOperations.length - 1;

            if (lastIndex < 0) {
                this.mainFunctionPointer.calculatorOperations.push({
                    leftHand: thisNumber,
                    operator: null,
                    rightHand: null
                });
            }

            if (this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand == null)
            {
                this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand = thisNumber;
            }
            else
            {
                if (this.mainFunctionPointer.calculatorOperations[lastIndex].operator == null) {
                    console.log("Error: Add an operator first.");
                } else
                {
                    if (this.mainFunctionPointer.calculatorOperations[lastIndex].rightHand == null)
                    {
                    }
                }
            }

            else {
                if (this.mainFunctionPointer.calculatorOperations[lastIndex].operator == null) {
                    console.log("Error: Add an operator first.");
                } else {
                    this.mainFunctionPointer.calculatorOperations[lastIndex].rightHand = thisNumber;
                }
            }
        }

        private AddOperator(operator: calculatorOperator) {
            var lastIndex = this.mainFunctionPointer.calculatorOperations.length - 1;

            if (lastIndex < 0) {
                console.log("Error: Add a function or number first.");
            } else {
                if (this.mainFunctionPointer.calculatorOperations[lastIndex].rightHand != null) {
                    this.mainFunctionPointer.calculatorOperations.push({ leftHand: null, operator: null, rightHand: null });
                    lastIndex++;
                }

                if (this.mainFunctionPointer.calculatorOperations[lastIndex].operator != null ||
                    this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand == null) {
                    console.log("Error: Add a function or number first.");
                    return;
                } else {
                    this.mainFunctionPointer.calculatorOperations[lastIndex].operator = operator;
                }

            }
        }

        private OpenFunction() {
            var lastIndex = this.mainFunctionPointer.calculatorOperations.length - 1;
            if (this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand == null) {
                this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand = new calculatorFunction(this.mainFunctionPointer);
                this.mainFunctionPointer = this.mainFunctionPointer.calculatorOperations[lastIndex].leftHand;
            }
        }

        private CloseFunction() {
            if (this.mainFunctionPointer.parent != null) {
                this.mainFunctionPointer = this.mainFunctionPointer.parent;
            }
        }



    }
    angular.module("app").controller("CalculatorController", CalculatorController);
}