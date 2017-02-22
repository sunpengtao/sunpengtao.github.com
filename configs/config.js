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
        })
        .state('account', {
            url: 'controllers/account',
            tittle: '个人流水',
            header: true,
            footer: false,
            views: {
                '': {
                    templateUrl: "controllers/account.html",
                    controller: 'accountCtrl'
                }
            }
        })
        .state('birthday', {
            url: 'controllers/birthday',
            tittle: '生日提醒',
            header: true,
            footer: false,
            views: {
                '': {
                    templateUrl: "controllers/birthday.html",
                    controller: 'birthdayCtrl'
                }
            }
        })
        .state('habit', {
            url: 'controllers/habit',
            tittle: '习惯养成',
            header: true,
            footer: false,
            views: {
                '': {
                    templateUrl: "controllers/habit.html",
                    controller: 'habitCtrl'
                }
            }
        })
        .state('studyPlan', {
            url: 'controllers/studyPlan',
            tittle: '学习计划',
            header: true,
            footer: false,
            views: {
                '': {
                    templateUrl: "controllers/studyPlan.html",
                    controller: 'studyPlanCtrl'
                }
            }
        });


    $urlRouterProvider.otherwise('controllers/indexHome');
});