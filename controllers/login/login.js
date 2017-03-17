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
      begins:[0,2,6],
      lasts:[1,5,9],
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
          console.log(vm.value);
          for(var i=0;i<vm.value;i++){
              //console.log(vm.value[i].val())
          };
      },
      slideHasChanged:function(index){
          vm.butStyle=vm.butStyles[index];
          vm.butCont=vm.butConts[index];
          vm.activeSlide=vm.activeSlides[index];
          var begin=vm.begins[index];
          var last=vm.lasts[index];
          vm.getDom(begin,last);
      },
      getDom:function(begin,last){
          vm.value=[];
          var num=$(".val").size();
          for(var i=0;i<num;i++){
              $(".val").eq(i).val("");
          };
          for(var i=begin,j=0;i<last,j<len;i++){
              vm.value[i]=$(".val").eq(i);
          };
      }
  };
});
