/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.directive('appMain', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/main/main.html',
        controller: 'mainCtrl'
    };
});
app.directive('mainHeader', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/main/mainHeader.html'
    };
})
app.directive('mainFooter', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'components/main/mainFooter.html'
    };
});
document.createElement('app-main');
//document.createElement('main-header');
//document.createElement('main-footer');

