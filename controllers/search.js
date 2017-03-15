/**
 * Created by SPT on 2017/2/22.
 */
var app=angular.module('app');
app.controller('searchCtrl',function($scope,locals,ary,action,search,ui){
    var vm=$scope.vm={
        searchCont:"",
        showSearchCont:true,
        actions:ary.actions,
        searchResult:true,
        input:document.getElementById("text"),
        goActions:function(num){
            action.go(num)
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
    //$("#text")[0].focus();
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
        if(vm.value==''||vm.value==null&&type==undefined){
            ui._alert("提示","输入内容不能为空");
            return
        };
        //储存搜索记录
        value={name:vm.value};
        locals.set('commonSearch',value,"add");
        //console.log(vm.actions);
        //搜索结果

        function getResult(){
            var result=search(vm.value,vm.actions,"name");
            //console.log(result);
            if(result.length==0){
                vm.searchResult=true;
            }else {
                vm.searchResult=false;
                vm.action=result;
            }
        }
        getResult();
        //刷新搜索记录
        vm.getSearchCont();
    };
});