/**
 * Created by SPT on 2017/2/21.
 */
var app=angular.module('app');
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