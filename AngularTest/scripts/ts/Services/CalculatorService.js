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
                    return this.QueryServer(this.multiplyUrl, leftHand, rightHand);
                }
                Divide(leftHand, rightHand) {
                    return this.QueryServer(this.divideUrl, leftHand, rightHand);
                }
                Add(leftHand, rightHand) {
                    return this.QueryServer(this.addUrl, leftHand, rightHand);
                }
                Subtract(leftHand, rightHand) {
                    return this.QueryServer(this.subtractUrl, leftHand, rightHand);
                }
                QueryServer(subApi, leftHand, rightHand) {
                    var defer = this.q.defer();
                    this.http.get(this.apiUrl + subApi + this.argumentsUrl(leftHand, rightHand))
                        .then((response) => {
                        var result = response.data;
                        defer.resolve(result);
                    }, (response) => {
                        alert(response);
                        var debug = 0;
                    });
                    return defer.promise;
                }
                argumentsUrl(leftHand, rightHand) {
                    return `?leftHand=${leftHand}&rightHand=${rightHand}`;
                }
            }
            CalculatorService.$inject = ["$q", "$http"];
            angular.module("app").service("CalculatorService", CalculatorService);
        })(Services = AngularTest.Services || (AngularTest.Services = {}));
    })(AngularTest = App.AngularTest || (App.AngularTest = {}));
})(App || (App = {}));
//# sourceMappingURL=CalculatorService.js.map