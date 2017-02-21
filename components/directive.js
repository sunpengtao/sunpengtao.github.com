/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('actionCtrl',function ($scope){

})
app.directive('appMain', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/main/main.html',
        controller: 'mainCtrl'
    };
});
app.directive('appAction', function () {
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'components/action.html',
        controller: 'actionCtrl'
    };
});
document.createElement('app-main');
document.createElement('app-action');
//document.createElement('main-footer');

