module App.AngularTest.Services {
    "use strict";

    export interface ICalculatorService {

       Multiply(leftHand: number, rightHand: number): angular.IPromise<number>;
       Divide(leftHand: number, rightHand: number) : angular.IPromise<number>;
       Add(leftHand: number, rightHand: number): angular.IPromise<number>;
       Subtract(leftHand: number, rightHand: number): angular.IPromise<number>;
    }

    class CalculatorService implements ICalculatorService {
        mainHub;

        static $inject: string[] = [];

        constructor(
        ) {


        }

        Multiply(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return null;
        }

        Divide(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return null;
        }

        Add(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return null;
        }

        Subtract(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return null;
        }

      
    }

    angular.module("app").service("CalculatorService", CalculatorService);
}