/**
 * Created by SPT on 2017/2/22.
 */
var app=angular.module('app');
app.controller('searchCtrl',function($scope,locals,ary,search,ui,equals,alertCont){
    var vm=$scope.vm={
        searchCont:"",
        showSearchCont:true,
        actions:ary.actions,
        searchResult:true,
        input:document.getElementById("text"),
        goActions:function(url){
            $state.go(url)
        },
        getSearchCont:function(){
            vm.commonCont=locals.get("commonSearch");
            if(vm.commonCont==null){
                vm.searchCont='无搜索记录';
                vm.showSearchCont=true;
            }else{
                vm.searchCont=vm.commonCont;
                vm.showSearchCont=false;
            }
        }
    };
    //初始化事件区域
    setTimeout(function(){
        angular.element(document.getElementById('text')).focus();
    },700);
    vm.getSearchCont();
    //主动触发事件区域
    vm.search=function(type){
        //清除内容
        if(type=='clear'){
            locals.remove('commonSearch');
            vm.getSearchCont();
            return
        }
        //通过常用搜索搜索
        if(type){
            vm.input.value=type;
            vm.value=vm.input.value;
            getResult();
            return
        }
        //点击搜索
        var value;
        //获取输入框的值
        vm.value=vm.input.value;
        //为空弹出层
        if(alertCont._null(vm.value)){
            return
        }
        //储存搜索记录
        value={name:vm.value};
        if(vm.searchCont!='无搜索记录'){
            if(!equals(vm.searchCont,"name",vm.value)){
                locals.set('commonSearch',value,"add");
            }
        }else{
            locals.set('commonSearch',value,"add");
        }
        //搜索结果
        function getResult(){
            vm.action=search(vm.value,vm.actions,"name");
        }
        getResult();
        //刷新搜索记录
        vm.getSearchCont();
    };
});