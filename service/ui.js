/**
 * Created by Administrator on 2017/2/25.
 */
//弹出框
var app=angular.module('app');
app.factory('ui',function($ionicPopup){
        return{
            _alert:function(title,cont){
                 return $ionicPopup.alert({
                     title: title,
                     template: cont
                });
            }
        }
});
//更多选项
app.service("moreBut",function($ionicActionSheet,$state){
    return function (tle){
        var h1={
            个人流水:{buttons:[{text:"高级功能"},{text:"智能提醒"}],url:[{go:"indexHome"},{go:"indexHome"}]},
            不告诉你:{buttons:[{text:"高级功能"},{text:"智能提醒"}],url:[{go:"indexHome"},{go:"indexHome"}]},
        };
        $ionicActionSheet.show({
            buttons:h1[tle].buttons,
            cancelText: '取消',
            buttonClicked: function(index) {
                $state.go(h1[tle].url[index].go)
            }
        });
    };
});
