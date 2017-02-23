/**
 * Created by SPT on 2017/2/21.
 */
var app = angular.module('app');
app.factory('locals', ['$window', function ($window) {
    return {
        //存储单个属性
        set: function (key, value) {
            $window.localStorage[key] = value;
        },
        //读取单个属性
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        //删除单个属性
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },

        clear: function () {
            var inApp = this.get('inApp');
            var referId = this.get('referId');
            $window.localStorage.clear();
            this.set('inApp', inApp);
            this.set('referId', referId);
        },
        //存储对象，以JSON格式存储
        setObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        //读取对象
        getObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}]);
app.service('action', function ($state) {
        this.go=function (num) {
            switch (num) {
                case "1":
                    $state.go('account');
                    break;
                case "2":
                    $state.go('birthday');
                    break;
                case "3":
                    $state.go('doctor');
                    break;
                case "4":
                    $state.go('habit');
                    break;
                case "5":
                    $state.go('studyPlan');
                    break;
                case "6":
                    $state.go('woman');
                    break;
                case "7":
                    $state.go('manage');
                    break;
                case "8":
                    $state.go('repayment');
                    break;
                case "b":
                default:
                    break;
            }
    }

});

