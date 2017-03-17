/**
 * Created by SPT on 2017/3/17.
 */
var app = angular.module('app');
app.controller('loginsCtrl',function($scope,ui,alertCont){
  var vm=$scope.vm={
      butCont:"登录",
      protocolSure:"ic_sure2",
      butStyles:["top:350px","top:420px","top:420px"],
      butConts:["登录","注册","设置"],
      activeSlides:[0,1,2],
      inputCont:[[{src:"ic_userName",cont:"请输入登录账号",type:"text"},{src:"ic_passWorld",cont:"请输入登录密码",type:"password"}],
           [{src:"ic_userName",cont:"请输入登录账号",type:"text"},{src:"ic_passWorld",cont:"请输入登录密码",type:"password"},{src:"ic_surePassWorld",cont:"确认登录密码",type:"password"},{src:"ic_123Code",cont:"输入安全码(找回密码用)",type:"password"}],
           [{src:"ic_userName",cont:"请输入要找回的账号",type:"text"},{src:"ic_123Code",cont:"请输入安全码",type:"password"},{src:"ic_passWorld",cont:"请输入新的登录密码",type:"password"},{src:"ic_surePassWorld",cont:"确认新的登录密码",type:"password"}]
    ],

      sureBut:function(){
          if(vm.protocolSure=="ic_sure2"){
              vm.protocolSure="ic_sure1";
          }else {
              vm.protocolSure="ic_sure2";
          };
      },
      succeed:function(type){
          vm.getDom();
          if(type=="登录"){

          }else {
          }
          for(var i=0;i<2;i++){
              alertCont._null(vm.value[i])
          }
      },
      slideHasChanged:function(index){
          vm.butStyle=vm.butStyles[index];
          vm.butCont=vm.butConts[index];
          vm.activeSlide=vm.activeSlides[index];
          var len,begin;
          if(index==0){
              len=2;
              begin=0;
          }else if(index==1){
              begin=2;
              len=4;
          }else {
              begin=2;
              len=4;
          }
          vm.getDom()
      },
      getDom:function(){
          vm.value=[];
          var num=$(".val").size();
          for(var i=0;i<num;i++){
              vm.value[i]=$(".val").eq(i).val("");
          };
      }
  };
});
