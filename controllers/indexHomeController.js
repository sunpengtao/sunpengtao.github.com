/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($ionicScrollDelegate,$scope,$state,locals,ary,demo,action,gradeColor) {
    var vm = $scope.vm = {
        four:[{},{},{},{}],
        timer1:demo.timer1,
        actions:ary.actions,
        bannerUrl:"background-image:url('img/jpg/banner1.jpg')",
        timer:[],
        action:[],
        activeSlide:0,
        Search:false,
        pDom:document.getElementsByClassName('controllerBox')[0].getElementsByTagName('p'),
        showSearch:function(){
            $state.go('search')
        },
        goActions:function(num){
            action.go(num)
        },
        controllerBox:function(num){
            //点击切换文字
            for(var i=0;i<4;i++){
                vm.pDom[i].style.fontSize="16px";
                vm.pDom[i].style.fontWeight="normal";
            };
            vm.pDom[num].style.fontSize="18px";
            vm.pDom[num].style.fontWeight="bold";

            vm.bannerUrl="background-image:url('img/jpg/banner"+(num+1)+".jpg')";
            vm.styleBox='left:'+(num*25)+'%';
            vm.activeSlide=num;
            //滑动切换功能模块
        },
        actionBox:function(index){
            vm.action=[];
            for(var i=0;i<vm.actions.length;i++){
                if(vm.actions[i].type==index)(
                    vm.action.push(vm.actions[i])
                );
            };
        }
    };
    //vm.action.push({孙鹏他:"1"});
    //滑动box事件;
    vm.slideHasChanged=function(index){
        //滑动切换文字
        vm.controllerBox(index);
        //滑动切换功能模块
        vm.actionBox(index);
        //切换后初始化位置
        $ionicScrollDelegate.$getByHandle('leftScroll').scrollTo(0,0,[true]);
    };
    vm.actionBox(0);
    for(var i=0;i<vm.timer1.length;i++){
        vm.timer1[i].color=gradeColor(vm.timer1[i].eventGrade);
        vm.timer.push(vm.timer1[i]);
    }
    locals.set('lastUrl','indexHome');
});
