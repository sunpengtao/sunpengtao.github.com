/**
 * Created by SPT on 2017/2/21.
 */
var app = angular.module('app');
app.factory('locals', ['$window', function () {
    return {
        //存储
        set: function (key, value,add) {
            function setlocal(key,value){
                localStorage.setItem(key,JSON.stringify(value));
            }
            function getlocal(key){
                return JSON.parse(localStorage.getItem(key));
            }
            if(add){
                var judge=getlocal(key) != null;
                if(judge==false){
                    var empty=[];
                    empty.push(value);
                    setlocal(key,empty);
                }else{
                    var Old=getlocal(key);
                    Old.push(value);
                    setlocal(key,Old);
                };
            }else {
                setlocal(key,value);
            };
        },
        //读取
        get: function (key) {
            return JSON.parse(localStorage.getItem(key));
        },
        //删除
        remove: function (key) {
            localStorage.removeItem(key)
        }
    }
}]);
app.service('action', function ($state) {
        this.go=function (num) {
            switch (num) {
                case "1":
                    $state.go('account');
                    break;
                case "2":
                    $state.go('birthday');
                    break;
                case "3":
                    $state.go('doctor');
                    break;
                case "4":
                    $state.go('habit');
                    break;
                case "5":
                    $state.go('studyPlan');
                    break;
                case "6":
                    $state.go('woman');
                    break;
                case "7":
                    $state.go('manage');
                    break;
                case "8":
                    $state.go('repayment');
                    break;
                case "b":
                default:
                    break;
            }
    }
});
app.service("gradeColor",function(){
    return  function (num){
        switch(num){
            case "1":
                return 'bc_b';
                break;
            case "2":
                return 'bc_y1';
                break;
            case "3":
                return 'bc_o';
                break;
            case "4":
                return 'bc_r';
                break;
            default:
                return 'bc_b';
                break;
        }
    }
});
app.service("search",function(){
    return  function (value,array,obj){
        var len = array.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(obj){
                if(array[i][obj].indexOf(value)>=0){
                    arr.push(array[i]);
                }
            }else {
                if(array[i].indexOf(value)>=0){
                    arr.push(array[i]);
                }
            }
        }
        return arr;
    };
});


