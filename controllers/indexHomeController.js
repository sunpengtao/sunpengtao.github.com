/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($scope) {
    var vm = $scope.vm = {
        actions:[{name:"生日提醒",url:"ic_birthday"},{name:"习惯养成",url:"ic_habit"},{name:"学习计划",url:"ic_studyPlan"},{name:"个人流水",url:"ic_account"}]
    }

});
