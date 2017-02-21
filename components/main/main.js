var app=angular.module('app');
app.controller('mainCtrl',function($scope,$state,locals){
    var vm=$scope.vm={
        tittle:"",
        oneClass:true,
        configCont:$scope.$on('$stateChangeSuccess', function (event,state){
            vm.tittle=state.tittle;
            vm.header=state.header;
            vm.footer=state.footer;
            vm.iconLeft=state.iconLeft;
            vm.cut=vm.cut1="display:none;";
            var cont="display:block;opacity:0;";
            vm.cut1=cont+"top:-10px";
            vm.cut=cont+"top:0px";
            setTimeout(function(){
                var cont2="opacity:1;transition:0.5s all;";
                vm.cut1=cont2+"top:0px";
                vm.cut=cont2+"top:10px";
           },10)
        }),
        goback:function(){
            if(locals.set("lastUrl")){
                $state.go(locals.set("lastUrl"));
            }else{
                location.href=document.referrer;
            }
        },
        munClass:function(num){
            vm.oneClass=vm.twoClass=vm.threeClass=false;
            if(num=="one"){
                vm.oneClass=true;
            }else if(num=="two"){
                vm.twoClass=true;
            }else{
                vm.threeClass=true;
            }
        }
    };
    $state.go('indexHome');
});