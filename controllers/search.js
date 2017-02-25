/**
 * Created by SPT on 2017/2/22.
 */
var app=angular.module('app');
app.controller('searchCtrl',function($scope,locals){
    var vm=$scope.vm={
        searchCont:"",
        showSearchCont:true

    };
    function getSearchCont(){
        vm.commonCont=locals.get("commonSearch");
        if(vm.commonCont==null){
            vm.searchCont='无搜索记录';
            vm.showSearchCont=true;
        }else{
            vm.searchCont=vm.commonCont;
            vm.showSearchCont=false;
        }
    }
    getSearchCont();
    vm.search=function(clear){
        if(clear){
            locals.remove('commonSearch');
            getSearchCont();
            return
        }
        if(vm.value==''||vm.value==null){
            alert("输入内容不能为空");
            return
        };
        var value={name:vm.value};
        locals.set('commonSearch',value,"add");
        getSearchCont();
        console.log(vm.searchCont);
    };
    angular.element(document.getElementById("text")).focus();
});