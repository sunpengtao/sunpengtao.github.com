/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($scope,$state,locals) {
    var vm = $scope.vm = {
        activeSlide:0,
        Search:false,
        pDom:document.getElementsByClassName('controllerBox')[0].getElementsByTagName('p'),
        timer:[],
        actions:[{name:"生日提醒",url:"ic_birthday",num:"1"},
            {name:"习惯养成",url:"ic_habit",num:"2"},
            {name:"个人流水",url:"ic_account",num:"3"},
            {name:"学习计划",url:"ic_studyPlan",num:"4"},
            {name:"生日提醒",url:"ic_birthday",num:"4"},
            {name:"习惯养成",url:"ic_habit",num:"2"},
            {name:"习惯养成",url:"ic_habit",num:"2"},
            {name:"生日提醒",url:"ic_birthday",num:"1"}],
        timer1:[{eventTime:"2小时21分钟",eventName:"信用卡还款323233232",eventGrade:"1",code:"23231"},
            {eventTime:"3小时1分钟",eventName:"生日323233232",eventGrade:"2",code:"23232"},
            {eventTime:"5小时2分钟",eventName:"参加例会323232323232",eventGrade:"3",code:"23243"},
            {eventTime:"1天2小时09分钟",eventName:"交友23232323",eventGrade:"4",code:"43324"},
            {eventTime:"1月20天12小时32分钟",eventName:"房租232323",eventGrade:"2",code:"87633"}],
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
        controllerBox:function(num){
            for(var i=0;i<4;i++){
                vm.pDom[i].style="font-size:16px;font-weight:normal";
            }
            vm.pDom[num].style="font-size:18px;font-weight:bold";
            switch(num){
                case 0:
                    vm.styleBox='left:0';
                    vm.activeSlide=0;
                    break;
                case 1:
                    vm.styleBox='left:25%';
                    vm.activeSlide=1;
                    break;
                case 2:
                    vm.styleBox='left:50%';
                    vm.activeSlide=2;
                    break;
                case 3:
                    vm.styleBox='left:75%';
                    vm.activeSlide=3;
                    break;
                case "b":
                default:
                    break;
            }
        },
        slideHasChanged:function(index){
            vm.controllerBox(index)
        }
    };
    for(var i=0;i<vm.timer1.length;i++){
        switch(vm.timer1[i].eventGrade){
            case "1":
                vm.timer1[i].color='bc_b';
                break;
            case "2":
                vm.timer1[i].color='bc_y1';
                break;
            case "3":
                vm.timer1[i].color='bc_o';
                break;
            case "4":
                vm.timer1[i].color='bc_r';
                break;
            case "":
            default:
                break;
        }
        vm.timer[i]=vm.timer1[i];

    }
    $('#one').css("display","none");
    locals.set('lastUrl','indexHome');

});
