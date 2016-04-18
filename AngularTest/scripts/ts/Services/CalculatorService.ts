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
        // TODO: use repository pattern.
        divideUrl = "/divide";
        multiplyUrl = "/multiply";
        addUrl = "/add";
        subtractUrl = "/subtract";
        apiUrl = "/api/math"

        static $inject: string[] = ["$q","$http"];

        constructor(private q: any, private http: ng.IHttpService)
        {


        }

        Multiply(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            var defer = this.q.defer();
                      
            this.http.get(this.apiUrl + this.multiplyUrl)
                .then((response: any) => {

                    var result = response.data;

                    defer.resolve(result);

                }, (response: any) => {
                    alert(response);
                    var debug = 0;
                });

            return defer.promise;
        }

        Divide(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            var defer = this.q.defer();

            this.http.get(this.apiUrl + this.divideUrl)
                .then((response: any) => {

                    var result = response.data;

                    defer.resolve(result);

                }, (response: any) => {
                    alert(response);
                    var debug = 0;
                });

            return defer.promise;
        }

        Add(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            var defer = this.q.defer();

            this.http.get(this.apiUrl + this.addUrl)
                .then((response: any) => {

                    var result = response.data;

                    defer.resolve(result);

                }, (response: any) => {
                    alert(response);
                    var debug = 0;
                });

            return defer.promise;
        }

        Subtract(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            var defer = this.q.defer();

            this.http.get(this.apiUrl + this.subtractUrl)
                .then((response: any) => {

                    var result = response.data;

                    defer.resolve(result);

                }, (response: any) => {
                    alert(response);
                    var debug = 0;
                });

            return defer.promise;
        }

      
    }

    angular.module("app").service("CalculatorService", CalculatorService);
}