!function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("components/action/action.html",'<div class="actions bc_w">\n    <ion-scroll direction="x" scrollbar-x="false" class="bb-bt_G ws_n of_h" delegate-handle="leftScroll">\n        <div ng-repeat="item in vm.action" ng-click="vm.goActions(item.url)" class="pt_10 br_G w_25 d_ib pb_10">\n            <i class="ic ic40 {{item.src}}"></i>\n            <p class="ta_c w_100 pt_5 pb_10 cl_g2 f_14">{{item.name}}</p>\n        </div>\n    </ion-scroll>\n</div>\n\n\n')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("components/main/main.html",'<ion-header-bar align-title="center" style="border-bottom:1px solid #38710b" ng-if="vm.header">\n    <i class="butLeft" style="{{vm.cut}}" ng-click="vm.goback()"></i>\n    <h1 class="title cl_g2" style="{{vm.cut1}}">{{vm.tittle}}</h1>\n    <i class="ic ic25 ic_more h25 w25 p_f r_15 l_a t_10" style="{{vm.cut}}" ng-click="vm.clickMore()" ng-show="vm.more"></i>\n</ion-header-bar>\n<ion-nav-view></ion-nav-view>\n<ion-footer-bar ng-if="vm.footer">\n    <p class="ic ic35" ng-class="{\'ic_home1\':vm.oneClass,\'ic_home2\':!vm.oneClass}" ng-click="vm.munClass(\'one\')" ui-sref="indexHome()" nav-transition="none"></p>\n    <p class="ic ic35" ng-class="{\'ic_time1\':vm.twoClass,\'ic_time2\':!vm.twoClass}" ng-click="vm.munClass(\'two\')" ui-sref="timer()" nav-transition="none"></p>\n    <p class="ic ic35" ng-class="{\'ic_info1\':vm.threeClass,\'ic_info2\':!vm.threeClass}" ng-click="vm.munClass(\'three\')" ui-sref="info()" nav-transition="none"></p>\n</ion-footer-bar>\n\x3c!-----------通知条----------\x3e\n<div class="messages p_a w_100 r_40 f_14 z_4 br_5 t_130 di_n"></div>\n\x3c!-----------加载loading----------\x3e\n<div class="modal_waiting d_n">\n    <div class="modal_backdrop">\n        <p class="modal_wait"></p>\n        <p class="modal_inner"></p>\n    </div>\n</div>\n\n')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("components/slideBox/slideBox.html",'<div class="p_r">\n    <ion-slide-box active-slide="vm.activeSlide" show-pager="false" on-slide-changed="vm.slideHasChanged(index)">\n        <ion-slide ng-repeat="item1 in vm.four">\n            <div class="home home1 bc_G p_r pb_30">\n                <div class="p_a w_100 t_10 z_2">\n                    <p class="mg_0a w_35 h30 bc_g1 f_18 fw_b br_15">\n                        <span class="f_l d_ib w_35 pl_10 pt_2"><i class="ic ic25 ic_timer"></i></span>\n                        <span class="f_r h30 lh_30 w_65 cl_w">时间轴</span>\n                    </p>\n                    <p class="w_85 mg_0a">\n                        <span class="f_16">NEXT</span>\n                        <span></span>\n                    </p>\n                </div>\n                <ul class="pt_25 pr_10 pl_10">\n                    <li ng-repeat="item in vm.timer" ng-click="vm.goDetails(item.code)" class="w_100 mb_5 h40 bc_w p_r z_1">\n                        <span class="d_ib w_10 p_a t_10 l_5"><i class="ic w17 h17 br_50 p_r t_3 l_10" ng-class="item.color"></i></span>\n                        <span class="d_ib w_35 h40 lh_40 f_16 fw_b ml_5 of_h ws_n">{{item.eventName}}</span>\n                        <span class="d_ib w_30 h40 lh_40 f_12 of_h ws_n">{{item.eventTime}}</span>\n                        <span class="d_ib f_r pt_8"><i class="but but_Right"></i></span>\n                    </li>\n                </ul>\n            </div>\n        </ion-slide>\n    </ion-slide-box>\n</div>\n')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/account.html",'<ion-view>\n    <ion-content class="has-header bc_G">\n        <div class="pd_20">\n\n        </div>\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/birthday.html",'<ion-view>\n    <ion-content class="cont bg_G">\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/doctor.html",'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\n</body>\n</html>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/habit.html",'<ion-view>\n    <ion-content class="cont bg_G">\n\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/manage.html",'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\n</body>\n</html>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/repayment.html",'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\n</body>\n</html>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/search.html",'<ion-view>\n    <ion-content class="has-header bc_G">\n        <div class="w_100 pd_15 clearfix">\n            <div class="f_l br_5 h35 bd_g w_75 of_h p_r bc_w">\n                <span class="d_ib h35 w45">\n                    <i class="ic ic25 ic_search p_r t_3"></i>\n                </span>\n                <input type="text" class="d_ib lh_40 f_20 bc_w p_a w_70 h30 l_40" id="text">\n            </div>\n            <p class="f_r h35 lh_35 w60 bc_y2 ta_c f_18 cl_w br_5" ng-click="vm.search()">搜索</p>\n        </div>\n        <div class="w_100 bc_w mb_20 bb-bt_G">\n            <h1 class="ml_15 pr_15 cl_G1 f_14 fw_b lh_35 bb_G clearfix">\n                <span class="f_l">搜索记录</span>\n                <span class="f_r f_12 fw_b cl_g1" ng-click="vm.search(\'clear\')">清除记录</span>\n            </h1>\n            <div class="pd_15 w_100">\n                <p class="pd_5 bc_G mg_5 ta_c br_5 d_ib" ng-repeat="item in vm.searchCont" ng-hide="vm.showSearchCont" ng-click="vm.search(item.name)">{{item.name}}</p>\n                <p class="bc_G f_14 pd_5 lh_30 cl_G2 br_5" ng-show="vm.showSearchCont">{{vm.searchCont}}</p>\n            </div>\n        </div>\n        <div class="W_100 bc_w bt_G">\n            <h1 class="ml_15 pr_15 cl_G1 f_14 fw_b lh_35 bb_G clearfix">\n                <span class="f_l">搜索结果</span>\n            </h1>\n            <app-action ng-show="vm.action"></app-action>\n            <div class="pd_15 w_100" ng-hide="vm.action">\n                <p class="bc_G f_14 pd_5 lh_30 cl_G2 br_5">无结果</p>\n            </div>\n        </div>\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/studyPlan.html",'<ion-view>\n    <ion-content class="cont bg_G">\n\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/actions/woman.html",'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\n</body>\n</html>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/indexHome/indexHome.html",'<div class="w_100 h_100 bg cl_w" ng-click="vm.popFt||vm.avatar()">\n    <div class="w180 p_a t_85 l_40">\n        <div ng-click="vm.goActions(\'search\')" class="f_r">\n            <p class="f_14 f_l">\n                <span class="d_b h30 lh_30">下午好，孙先生</span>\n                <span class="d_b h30 lh_30">133****1231</span>\n            </p>\n            <p class="f_l pt_25 pl_10"><i class="ic ic25 ic_into h15 w10"></i></p>\n        </div>\n        <ul class="p_a t_150">\n            <li ng-repeat="item in vm.leftAction" class="leftActionLi h40 lh_40 bt_w w180 p_r f_16" ng-click="vm.goActions(item.url)" on-repeat-finish>\n                <span class="p_a l_2 t_5 w30"><i class="ic ic30" ng-class="item.src"></i></span>\n                <span class="p_a l_50">{{item.name}}</span>\n                <span class="p_a l_a r_0 t_7"><i class="but but_Right tf_08"></i></span>\n            </li>\n        </ul>\n    </div>\n</div>\n<p class="p_a b_70 cl_w t_a l_40" ng-click="vm.close(\'提示\',\'你将退出当前账号\',\'login\')">\n    <i class="ic ic25 ic_close"></i>\n    <span>退出</span>\n</p>\n<div class="avatar p_a br_50 z_2 ts_03 bc_G" ng-click="vm.avatar()" style="{{vm.cut1}}">\n    <img src="img/png/avatar.png">\n</div>\n<ion-view class="p_a ts_03 z_1" style="{{vm.cut}}" ng-click="vm.popFt||vm.avatar()">\n    <ion-header-bar class="p_a">\n        <div class="banner pImg w_100 ts_1" id="name" style="{{vm.bannerUrl}}">\n            <div class="search mg_0a h35 bc_w f_0 br_5 w_80" ui-sref="search()" nav-direction="swap">\n                <p class="f_l w_40 h35">\n                    <span class="ic ic25 ic_search f_r p_r t_5"></span>\n                </p>\n                <p class="h35 f_r w_55 f_18 pt_7 cl_G2">搜索功能</p>\n            </div>\n            <div class="w_100 h45 ta_c f_16 cl_w d_ib controllerBox p_r">\n                <div>\n                    <p ng-click="vm.controllerBox(item.num)" ng-repeat="item in vm.home">{{item.name}}</p>\n                </div>\n                <span style="{{vm.styleBox}}" class="w_25 bc_w ts_03"></span>\n            </div>\n            <app-action></app-action>\n        </div>\n    </ion-header-bar>\n    <ion-content class="cont bc_G p_a">\n        <app-slide></app-slide>\n    </ion-content>\n</ion-view>\n\n')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/info/info.html",'<ion-view>\n    <ion-content class="has-footer has-header">\n        <div ui-sref="timer()" nav-transition="ios">{{vm.name}}s</div>\n    </ion-content>\n</ion-view>\n')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/login/login.html",'<ion-view>\n    <ion-header-bar class="h_100 pd_0 p_a">\n            <img src="img/png/logo.png" class="p_r d_b mg_0a h60 t_60">\n            <div class="p_a z_2 w_100 t_150">\n                <ion-slide-box active-slide="vm.activeSlide" show-pager="false" on-slide-changed="vm.slideHasChanged(index)">\n                    <ion-slide ng-repeat="items in vm.inputCont">\n                        <div class="w_72 br_15 bd_g mg_0a pd_15 bc_w">\n                            <p class="w_90 h35 bb_G p_r of_h" style="margin: 0px auto 15px auto" ng-repeat="item in items" on-repeat-finish>\n                                <span class="f_l pt_5 pr_15"><i class="ic ic20 {{item.src}}"></i></span>\n                                <input type="{{item.type}}" placeholder="{{item.cont}}" class="val f_l w_80" ng-focus="vm.inputFocus($index,vm.butCont)" ng-blur="vm.succeed(vm.butCont,$index)" maxlength="16">\n                                <span class="p_a l_a h35 r_-140 cl_r lh_35 bc_w prompt ts_03" ng-click="vm.inputFocus($index,vm.butCont)"></span>\n                                <span class="p_a l_a t_3 h35 r_-40 cl_r lh_35 bc_w ts_03 prompt1"><i class="ic ic25 ic_sure2"></i></span>\n                            </p>\n                            <p class="w_90 mg_0a f_12" ng-show="vm.butCont==\'登录\'"><span class="fl cl_G1" ng-click="vm.slideHasChanged(1)">注册账号</span><span class="f_r cl_g1" ng-click="vm.slideHasChanged(2)">忘记密码</span></p>\n                        </div>\n                    </ion-slide>\n                </ion-slide-box>\n            </div>\n            <div class="p_a t_350 w_100 z_3 ts_03" style="{{vm.butStyle}}">\n                <img src="img/png/balloon.png" class="p_a p_a l_a r_40 t_-10 h25">\n                <p class="raBut" ng-click="vm.succeed(vm.butCont)">{{vm.butCont}}</p>\n                <div class="p_a t_85 w_100">\n                    <p class="ta_c f_14 cl_G2" ng-if="vm.butCont==\'登录\'">\n                        <span class="w30 d_ib"><i class="ic ic20 ic_phone"></i></span>\n                        <span class="p_r" style="top:-4px">联系客服 170-1028-9392</span>\n                    </p>\n                    <p class="ta_c f_14 cl_G2" ng-if="vm.butCont==\'注册\'">\n                        <span class="w30 d_ib" ng-click="vm.sureBut()"><i class="ic ic25 {{vm.protocolSure}}"></i></span>\n                        <span class="p_r" style="top:-6px">我已阅读并同意<i class="cl_g2" ui-sref="protocol()">注册协议</i> </span>\n                    </p>\n                </div>\n            </div>\n            <div class="p_a t_a b_0 z_1 h_30 w_100">\n                <p class="loginBg pImg h_100"></p>\n            </div>\n    </ion-header-bar>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/login/protocol.html",'<ion-view>\n    <ion-content class="has-header bc_G">\n        <div class="pd_20"> 本协议是您(个人或单一实体)与软件作者之间关于《天天向上》产品的法律协议，其中包含软件开发商软件作者对用户的承诺、技术支持以及软件升级的说明，请认真阅读。\n            <br>《天天向上》软件包括计算机软件，以及联机的电子文档(下称“软件产品”或“软件”)。一旦安装、复制或以其他方式使用本软件产品，即表示同意接受协议各项条件的约束。如果您不同意协议的条件，则不能获得使用本软件产品的权力。\n            <br>1.本软件产品受中华人民共和国版权法及国际版权条约和其他知识产权法及条约的保护。用户获得的只是本软件产品的使用权。\n            <br>2.本软件产品的版权归软件作者所有，受到适用版权法及其他知识产权法及条约的保护。\n            <br>3.您不得:\n            <br>(1)删除本软件及其他副本上一切关于版权的信息；\n            <br>(2)销售、出租此软件产品的任何部分；\n            <br>(3)制作和提供该软件的注册机及破解程序；\n            <br>(4)对本软件进行反向工程，如反汇编、反编译等。\n            <br> 4.如果您未遵守本协议的任一条款，软件作者有权立即终止本协议，且您必须立即终止使用本软件并销毁本软件产品的所有副本。这项要求对各种拷贝形式有效。\n            <br>5.许可：您可以通过任意途径任意传播该软件的共享版。\n            <br>6.使用风险：\n            <br> 使用本软件产品的未注册版本由您自己承担风险。在适用法律允许的最大范围内，软件作者在任何情况下不就因使用或不能使用本软件产品的未注册版本所发生的特殊的、意外的、直接或间接的损失承担赔偿责任。即使已事先被告知该损害发生的可能性。因此，未注册用户在使用本软件时由于意外事故、操作不当或使用错误所引起的故障甚至损坏，软件作者及共享版提供者均不承担任何责任。\n            <br> 注册用户在使用本软件时由于意外事故、操作不当或使用错误所引起的故障，由《天天向上》技术支持工程师通过电子邮件帮助用户进行恢复、修复等处理。\n            <br>7.售后服务：共享版注册用户在使用本软件的过程中遇到任何使用问题均可通过电子邮件与我们联系以获取技术支持和保障。售后服务工程师会在24小时内给予答复（节假日顺延），帮助注册用户解决使用过程中的问题。备注：来信中若未注明注册订单号或其他有助于表明注册用户身份的信息，恕不回复。\n            <br>8.盗版用户：使用盗版的本软件产品的一切后果由使用者自己承担。对于使用盗版的该软件产品对使用者操作系统造成的故障及损害，软件作者不承担任何责任。\n            <br> 9.补充：若您对本协议内容有任何疑问，可与2494212636@qq.com 联系。 </div>\n    </ion-content>\n</ion-view>')}])}(),function(module){try{module=angular.module("app")}catch(e){module=angular.module("app",[])}module.run(["$templateCache",function($templateCache){$templateCache.put("controllers/time/timer.html",'<ion-view>\n    <ion-content class="has-footer has-header">\n        <div ui-sref="indexHome()" nav-transition="ios">{{vm.name}}</div>\n        <div>\n            <i></i>\n        </div>\n    </ion-content>\n</ion-view>\n')}])}();