/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($scope) {
    var vm = $scope.vm = {
        goActions:function(){
          alert("跳转")
        },
        actions:[{name:"生日提醒",url:"ic_birthday"},{name:"生日提醒",url:"ic_birthday"},{name:"习惯养成",url:"ic_habit"},{name:"学习计划",url:"ic_studyPlan"},{name:"习惯养成",url:"ic_habit"},{name:"习惯养成",url:"ic_habit"},{name:"个人流水",url:"ic_account"},{name:"生日提醒",url:"ic_birthday"}]
    }
        $scope.show=function(){
            alert("dsdsds");
        }
});
