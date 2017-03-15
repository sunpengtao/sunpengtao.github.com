/**
 * Created by SPT on 2017/2/20.
 */
var app = angular.module('app');
app.controller('indexHomeCtrl', function ($ionicScrollDelegate,$scope,$state,$ionicSideMenuDelegate,locals,ary,demo,action,gradeColor) {
    var vm = $scope.vm = {
        cutNum:0,
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
    };
    locals.set('lastUrl','indexHome');
    vm.avatar=function(){
        if(vm.cutNum==0){
            //点击头像打开左滑栏
            vm.cut="left:200px;transform:scale(0.8,0.8);";
            vm.cut1="transform:scale(1.4,1.4);left:100px;top:80px";
            vm.cut2="background-color:#84c0f2";
            vm.cutNum++;
        }else{
            //点击头像恢复主视图
            vm.cut=vm.cut1=vm.cut2="";
            vm.cutNum=0;
        }

    };
});
