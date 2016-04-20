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
            return this.QueryServer(this.multiplyUrl, leftHand, rightHand);
        }

        Divide(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return this.QueryServer(this.divideUrl, leftHand, rightHand);
        }

        Add(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return this.QueryServer(this.addUrl, leftHand, rightHand);
        }

        Subtract(leftHand: number, rightHand: number): angular.IPromise<number>
        {
            return this.QueryServer(this.subtractUrl, leftHand, rightHand);
        }

        private QueryServer(subApi: string, leftHand: number, rightHand: number): angular.IPromise<number>
        {
            var defer = this.q.defer();

            this.http.get(this.apiUrl + subApi + this.argumentsUrl(leftHand, rightHand))
                .then((response: any) => {

                    var result = response.data;

                    defer.resolve(result);

                }, (response: any) => {
                    alert(response);
                    var debug = 0;
                });

            return defer.promise;
        }

        private argumentsUrl(leftHand: number, rightHand: number): string
        {
            return `?leftHand=${leftHand}&rightHand=${rightHand}`;
        }

      
    }

    angular.module("app").service("CalculatorService", CalculatorService);
}