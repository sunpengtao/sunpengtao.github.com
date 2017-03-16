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
//显示事件级别颜色
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
//搜索
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
        if(arr.length!=0){
            return arr;
        }else {
            return false
        }
    };
});
//判断数组里面的对象是否包含指定的内容
app.service("equals",function(){
    return  function (array,obj,value){
            var num=0;
        array.map(function(item){
           if(item[obj]==value){
               num=1;
           }
        });
        if(num==0){
            return false
        }else{
            return true
        }
    };
});
//利用angular指令监听ng-repeat渲染完成后执行脚本
app.directive('onRepeatFinish',function(){
    return {
        link: function(scope,element,attr){
            //console.log(scope.$index)
            if(scope.$last == true){
                //console.log('ng-repeat执行完毕')
                //scope.$eval( attr.repeatFinish );
                //向子控制器传递事件
                //scope.$broadcast('to-child');
                //向父控制器传递事件
                scope.$emit('onRepeatFinished');
            }
        }
    }
});
