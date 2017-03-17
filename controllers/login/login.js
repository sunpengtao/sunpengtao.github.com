/**
 * Created by SPT on 2017/3/17.
 */
var app = angular.module('app');
app.controller('loginsCtrl',function($scope,ui,alertCont,inputReg){
  var vm=$scope.vm={
      butCont:"登录",
      protocolSure:"ic_sure2",
      butStyles:["top:350px","top:420px","top:420px"],
      butConts:["登录","注册","设置"],
      activeSlides:[0,1,2],
      begins:[0,2,6],
      lasts:[2,6,10],
      lens:[2,4,4],
      prompts:['请输入6-16位英文或数字','密码不相同'],
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
          function cut(index,index1){
              vm.pmt[index].css({right:'0'}).text(vm.prompts[index1]);
          };
          function cut1(index){
              return vm.value[index].val()
          };
          var num=0;
          var num1=0;
          //console.log(vm.pmt.length);
          for(i in vm.value){
              if(num==1){
                  return
              };
              if(alertCont._null(cut1(i))){
                num=1;
              };
          };
          for(i in vm.value){
              if(num==0){
                  if(inputReg.numEnglish(cut1(i))){
                      cut(i,0);
                      num1=1;
                  };
              };
          };
          if(num1==0&&num==0){
              if(type=="登录"){
                  return
              }
              if(type=="注册"&&cut1(1)!=cut1(2)){
                  cut(2,1);
                  return
              }else if(type=="注册"){
                  ui._alert("恭喜注册成功","<p class='ta_l f_12 pd_15'>注册信息:<br/>1.账号: <span class='cl_r'> "+cut1(0)+"</span><br/>2.密码: <span class='cl_r'> "+cut1(1)+"</span><br/>2.安全码: <span class='cl_r'>"+cut1(3)+" </span><span class='d_b'><i class='f_r'>请牢记</i></span><p>","indexHome");
                  return
              }
              if(type=="设置"&&cut1(2)!=cut1(3)){
                  cut(3,1);
              }else {

              }
          };
      },
      slideHasChanged:function(index){
          vm.butStyle=vm.butStyles[index];
          vm.butCont=vm.butConts[index];
          vm.activeSlide=vm.activeSlides[index];
          var begin=vm.begins[index];
          var last=vm.lasts[index];
          var len=vm.lens[index];
          vm.getDom(begin,last,len);
      },
      //初始化表单
      inputFocus:function(ind){
          //console.log(ind);
          vm.pmt[ind].css({right:'-140px'})
      },
      recoveryPmt:function(){
          var num=$(".val").size();
          for(var i=0;i<num;i++){
              $(".val").eq(i).val("");
              $(".prompt").css({right:'-140px'});
          };
      },
      getDom:function(begin,last,len){
          vm.recoveryPmt();
          vm.value=[];
          vm.pmt=[];
          for(var i=begin,j=0;i<last,j<len;i++,j++){
              vm.value[j]=$(".val").eq(i);
              vm.pmt[j]=$(".prompt").eq(i);
              //console.log(j+","+i)
          };
      }
  };
    $scope.$on("onRepeatFinished", function () {
        vm.getDom(0,2,2)
    });
});
