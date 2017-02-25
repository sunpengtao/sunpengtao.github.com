/**
 * Created by Administrator on 2017/2/25.
 */
angular.module('app').factory('ui',function($ionicPopup){
        return{
            _alert:function(title,cont){
                 return $ionicPopup.alert({
                     title: title,
                     template: cont
                });
            }
        }
});