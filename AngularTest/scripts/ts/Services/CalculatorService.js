var App;
(function (App) {
    var AngularTest;
    (function (AngularTest) {
        var Services;
        (function (Services) {
            "use strict";
            class CalculatorService {
                constructor(q, http) {
                    this.q = q;
                    this.http = http;
                    // TODO: use repository pattern.
                    this.divideUrl = "/divide";
                    this.multiplyUrl = "/multiply";
                    this.addUrl = "/add";
                    this.subtractUrl = "/subtract";
                    this.apiUrl = "/api/math";
                }
                Multiply(leftHand, rightHand) {
                    var defer = this.q.defer();
                    this.http.get(this.apiUrl + this.multiplyUrl)
                        .then((response) => {
                        var result = response.data;
                        defer.resolve(result);
                    }, (response) => {
                        alert(response);
                        var debug = 0;
                    });
                    return defer.promise;
                }
                Divide(leftHand, rightHand) {
                    var defer = this.q.defer();
                    this.http.get(this.apiUrl + this.divideUrl)
                        .then((response) => {
                        var result = response.data;
                        defer.resolve(result);
                    }, (response) => {
                        alert(response);
                        var debug = 0;
                    });
                    return defer.promise;
                }
                Add(leftHand, rightHand) {
                    var defer = this.q.defer();
                    this.http.get(this.apiUrl + this.addUrl)
                        .then((response) => {
                        var result = response.data;
                        defer.resolve(result);
                    }, (response) => {
                        alert(response);
                        var debug = 0;
                    });
                    return defer.promise;
                }
                Subtract(leftHand, rightHand) {
                    var defer = this.q.defer();
                    this.http.get(this.apiUrl + this.subtractUrl)
                        .then((response) => {
                        var result = response.data;
                        defer.resolve(result);
                    }, (response) => {
                        alert(response);
                        var debug = 0;
                    });
                    return defer.promise;
                }
            }
            CalculatorService.$inject = ["$q", "$http"];
            angular.module("app").service("CalculatorService", CalculatorService);
        })(Services = AngularTest.Services || (AngularTest.Services = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=CalculatorService.js.map