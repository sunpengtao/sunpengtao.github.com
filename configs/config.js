/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('default', {
            url: '',
            controller: function ($scope, $state) {
                $state.go('indexHome')
            }
        })
        .state('indexHome', {
            url: 'controllers/indexHome',
            tittle: '客厅',
            header: false,
            footer: true,
            views: {
                '': {
                    templateUrl: "controllers/indexHome.html",
                    controller: 'indexHomeCtrl'
                }
            }
        })
        .state('info', {
            url: 'controllers/info',
            tittle: '数据统计',
            header: false,
            footer: true,
            views: {
                '': {
                    templateUrl: "controllers/info.html",
                    controller: 'infoCtrl'
                }
            }
        })
        .state('timer', {
            url: 'controllers/timer',
            tittle: '时间轴',
            header: false,
            footer: true,
            views: {
                '': {
                    templateUrl: "controllers/timer.html",
                    controller: 'timerCtrl'
                }
            }
        })
        .state('search', {
            url: 'controllers/search',
            tittle: '搜索',
            header: true,
            footer: false,
            views: {
                '': {
                    templateUrl: "controllers/search.html",
                    controller: 'searchCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('controllers/indexHome');
});