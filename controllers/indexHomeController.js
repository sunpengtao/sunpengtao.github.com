/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($scope,$state,locals) {
    var vm = $scope.vm = {
        Search:false,
        showSearch:function(){
            $state.go('search')
        },
        goActions:function(num){
            switch(num){
                case "1":
                    $state.go('birthday');
                    break;
                case "2":
                    $state.go('habit');
                    break;
                case "3":
                    $state.go('account');
                    break;
                case "4":
                    $state.go('studyPlan');
                    break;
                case "b":
                default:
                    break;
            }
        },
        actions:[{name:"生日提醒",url:"ic_birthday",num:"1"},{name:"习惯养成",url:"ic_habit",num:"2"},{name:"个人流水",url:"ic_account",num:"3"},{name:"学习计划",url:"ic_studyPlan",num:"4"},{name:"生日提醒",url:"ic_birthday",num:"4"},{name:"习惯养成",url:"ic_habit",num:"2"},{name:"习惯养成",url:"ic_habit",num:"2"},{name:"生日提醒",url:"ic_birthday",num:"1"}]
    };
    locals.set('lastUrl','indexHome');
});
