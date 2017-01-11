window.onload = function(){
    //公共  消失弹出背景
    function fade(){
        clearInterval(quick_Timer);
        clearTimeout(quick_Timer1);
        pop.style.opacity='0';
        addCss(pop2,"transform:scale(0,0);opacity:0");
        //addCss(pop21,"transform:scale(0,0);opacity:0");
        setTimeout(function(){
            pop.style.display='none';
            pop2.style.display='none';
            //pop21.style.display='none';
        },800);
    };
    //公共弹出背景
    var newWidthNum=0;
    function unfold(cont,type,mun){
        clearInterval(quick_Timer);
        clearTimeout(quick_Timer1);
        addCss(pop,"background: #000;display:block");
        addCss(pop2,"display:block;transform:scale(0,0);margin-top:-150px;");
        button1.style.display="none";//隐藏修改按钮;
        button.style.marginLeft="0px";//确定按钮居中（作用）
        //addCss(pop21,"display:block;transform:scale(0,0);margin-top:-400px;");
        pop2H1.innerHTML=cont;//标题
        for(var i=0;i<pop2div.length;i++){
            pop2div[i].style.display="none";
        };
        //隐藏所有内容
        //pop2.style.display="block";
        if(type==1){
            //setTimeout(function(){
            //    if(pop2div[mun].offsetHeight>430){
            //        newWidthNum++;
            //        if(newWidthNum==1){
            //            var newWidth=pop2div[mun].offsetWidth+40;
            //        }else{
            //            var newWidth=pop2div[mun].offsetWidth;
            //        }
            //        addCss(pop2div[mun],"height:430px;overflow: auto;width:"+newWidth+"px;left:-20px;")
            //    }else {
            //        pop2div[mun].style="";
            //    }
            //},20);
            pop2.style.marginTop="-150px;";
            //pop21.style.marginTop="-150px;";
            addCss(pop2,"margin-top:-300px;");
            //addCss(pop21,"margin-top:-300px;");
            pop2img.style.display="none";
            pop2p.innerHTML="";
            pop2span.innerHTML="";
        }else if(type==0){
            addCss(pop2,"margin-top:-150px;");
            pop2div[0].style.display="block";
            button1.style.marginRight="30px";//确定按钮修改按钮居中（作用）
            button1.style.display='inline-block';//显示修改按钮
            pop2img.style.display="inline-block";
        };
        if(mun==1){
            var pop2_r_l = document.getElementById("pop2_r_l");
            pop2div[1].style.display="block";
            pop2_d.style.display="block";
            pop2_r_l.style.display="block";
            search.style.display="block";
            searchD.style.display="block";
        };
        setTimeout(function(){
            addCss(pop,"transition:all 0.7s;opacity:0.5");
            addCss(pop2,"transform:scale(1,1);opacity:1;");
        },30);
    };
    //分页显示
    function active(begin,len,type1){
       var cont = getlocal(passWord+"Financial");
        pop2_d.innerHTML='';
        pop2_d.innerHTML=title;
        monerys=0;
        function Monerys(){
            for(var i=0;i<cont.length;i++){
                var monery =cont[i].monery;
                if(!isNaN(monery)&&monery!==null){
                    monerys=monerys+parseInt(monery);
                };
            };
        }
        Monerys();
        message_1_s[2].innerHTML=monerys;
        if(type1==2){//临时数据 ;
            monerys=0;
            cont = seekTemporary;
            Monerys();
        };
        pop2_d.innerHTML+='<h2>合计：<i>'+monerys+'</i>元</h2>';
        for(var i=begin;i<len;i++){
            var type=null;
            var Time = cont[i].Time;
            var monery =cont[i].monery;
            var Remarks =cont[i].Remarks;
            var num = Time.indexOf('.');
            var Time1 = Time.slice(0,num);
            var Time2 = Time.slice(num+1,Time.length);
            monery=""+monery+"";
            if(monery.charAt(0)=="-"){
                monery = monery.slice(1,monery.length);
                type='消费';
            }else {
                type='收入';
            };
            monery=parseInt(monery);
            pop2_d.innerHTML+='<p><i>'+Time2+'</i><span>'+Time1+'</span><span>'+monery+'</span><span>'+type+'</span><span>'+Remarks+'</span></p>'
        };
    };

    function Financials(){
        var cont=getlocal(passWord+"Financial");
        pop2_d.innerHTML='';
        pop2_d.innerHTML=title;
        if(cont==null){//如果数据为空显示内容
            pop2_d.innerHTML+='<p style="font-size: 20px;">温馨提示：您还没有进行财务报表!</p>';
            message_1_s[2].innerHTML=0;
        }else {//如果有数据显示内容
            //合计钱数
            if(cont.length<13){
                active(0,cont.length,1);
            }else{
                active(0,12,1);
            };
        };
    };
    //var getId = function(father,type,dom){
    //     if(type==1) {
    //         return document.getElementsByClassName(father);
    //     }else if(type==2 ){
    //         return document.getElementsByClassName(father)[0]
    //     }
    //};
    var n=0;
    var pop=document.getElementsByClassName('pop')[0];
    var pop2=document.getElementsByClassName('pop2')[0];
    var button=pop2.getElementsByTagName('button')[0];
    var button1=pop2.getElementsByTagName('button')[1];
    var pop2H1=pop2.getElementsByTagName('h1')[0];
    var pop2div=pop2.getElementsByTagName('div');
    var pop2_d=document.getElementsByClassName('div2_d')[0];
    var pop2span=pop2div[0].getElementsByTagName('span')[0];
    var pop2img=pop2div[0].getElementsByTagName('img')[0];
    var pop2p=pop2div[0].getElementsByTagName('p')[0];
    var begin=document.getElementsByClassName('begin')[0];
    var content=document.getElementsByClassName("content")[0];
    var quick=document.getElementsByClassName('quick')[0];
    var quick_cont=document.getElementsByClassName('quick_cont')[0];
    var quick_But = quick.getElementsByTagName('p');
    var q_c_adiv=quick_cont.getElementsByTagName('div');
    var banner=document.getElementsByClassName('banner')[0];
    var banner_li=banner.getElementsByTagName('li');
    var bBut_p=banner.getElementsByTagName('p');
    var leftNav=document.getElementsByClassName('leftNav')[0];
    var leftNav_li=leftNav.getElementsByTagName('li');
    var pop2_r_l=document.getElementById('pop2_r_l');
    var pop2_r_s=pop2_r_l.getElementsByTagName('span');
    var pop2_r_i=pop2_r_l.getElementsByTagName('input')[0];
    var search=pop2.getElementsByClassName('search')[0];
    var searchD=document.getElementsByClassName('searchD')[0];
    var searchDp=document.getElementsByClassName('searchDp');
    var searchp=search.getElementsByTagName('p');
    var typeBut=document.getElementsByClassName('typeBut');
    var seekTemporary =[];
    var pop2_seek=document.getElementById('pop2_seek');
    var pop2_seekb=document.getElementById('pop2_seekb');
    var pop2_seekS=pop2_seek.getElementsByTagName("span");
    var pop2_Pop=document.getElementsByClassName('pop2_Pop')[0];
    var pop2_r_s_num=1;//弹出层公共数字;
    var title=pop2_d.innerHTML;

    var time=null;
    var Hours=null;
    var Minutes=null;
    var Seconds=null;
    var Year=null;
    var Month=null;
    var date=null;
    var Day=null;
    var monerys=0;
    //开场动画
    //获取当前时间;
    pop2_seekb.onclick=function(){
        ConfirmedBy("hide");
        pop2_r_s_num1=1;
        var len=(pop2_r_s_num-1)*12;
        active(len,len+12,1);
    };
    function time1(){
        time=new Date();
        Hours=time.getHours();
        Minutes=time.getMinutes();
        Seconds=time.getSeconds();
        Year=time.getFullYear();
        Month=time.getMonth()+1;
        date=time.getDate();
        Day=time.getDay();
    };
    //直接获取时间格式：19930614
    function gainTime(){
        time=new Date();
        var m=time.getMonth()+1;
        var d=time.getDate();
        if(m<10){
            m="0"+m;
        }
        if(d<10){
            d="0"+d;
        }
        return ""+time.getFullYear()+""+m+d;
    };
    function gainTime1(){
        time1();
        return Footer_p.innerHTML=Year+'/'+Month+'/'+date+'.'+Hours+':'+Minutes+':'+Seconds;
    };
    //获取个人信息;
    var User=getlocal('User');
    var Name=null;
    var passWord=null;
    var Sex=null;

    if(User==null){
        var cont1 = ""+window.location+"";
        var num = cont1.lastIndexOf("/");
        var cont = cont1.slice(0,num);
        window.location.href=cont+"/index.html";
    }else{
        Name=User.userName;
        passWord=User.passWord;
        Sex=User.sex;
    }
    var message_1=document.getElementsByClassName('message-1')[0];
    var message_1_s=message_1.getElementsByTagName('span');
    function personal (){
        time1();
        if(Hours>=0&&Hours<=5){
            message_1_s[0].innerHTML="深夜了";
        };
        if(Hours>6&&Hours<=9){
            message_1_s[0].innerHTML="早上好";
        };
        if(Hours>9&&Hours<=11){
            message_1_s[0].innerHTML="上午好";
        };
        if(Hours>11&&Hours<=14){
            message_1_s[0].innerHTML="中午好";
        };
        if(Hours>14&&Hours<=20){
            message_1_s[0].innerHTML="下午好";
        };
        if(Hours>20&&Hours<24){
            message_1_s[0].innerHTML="晚上好";
        };
        if(Name){
            var sex=null;
            if(Sex=='男'){
                sex='先生';
            }else{
                sex='女士';
            };
            message_1_s[1].innerHTML=Name.slice(0,1)+sex;
        };
        Financials();
        message_1_s[3].innerHTML="";
    };
    personal();
    addCss(begin,"opacity:1");
    //banner
    addCss(bBut_p[0],"background:rgba(255,255,255,0.8)");
    var banner_n=0;
    var timer_1=null;
    function Bbut(){
        for(var i=0;i<bBut_p.length;i++){
            bBut_p[i].style.background="rgba(0,0,0,0.5)";
        };
    };
    function Banner(){
        Bbut();
        if(banner_n==1){
            addCss(banner_li[0],"opacity: 0");
            addCss(banner_li[1],"opacity: 1");
            bBut_p[1].style.background="rgba(255,255,255,0.8)";
        }else if(banner_n==2){
            addCss(banner_li[0],"opacity: 0");
            addCss(banner_li[1],"opacity: 0");
            bBut_p[2].style.background="rgba(255,255,255,0.8)";
        }else {
            addCss(banner_li[0],"opacity: 1");
            addCss(banner_li[1],"opacity: 1");
            bBut_p[0].style.background="rgba(255,255,255,0.8)";
            banner_n=0;
        };
    };
    function timer_2(){
         timer_1=setInterval(function(){
             banner_n++;
             Banner();
         },4000);
    };
    timer_2();
    banner.onmouseover = function(){
        clearInterval(timer_1);
    };
    banner.onmouseout = function(){
        timer_2();
    };
    for(var i=0;i<bBut_p.length;i++){
        (function(){
            var j=i;
            bBut_p[j].onclick=function(){
                Bbut();
                this.style.background="rgba(255,255,255,0.8)";
                banner_n=j;
                Banner();
            };
        })();
    };
    //快速报账
    function Quick_But(){
        quick_But[0].style.opacity='0';
        quick_But[1].style.opacity='0';
    };
    Quick_But();
    quick.onmouseover=function(){
        quick_But[0].style.opacity='1';
        quick_But[1].style.opacity='1';
    };
    quick.onmouseout=function(){
        Quick_But();
    };
    quick_But[0].onclick=function(){
        if(n!=0){
            n +=  350;
            quick_cont.style.top=n+"px"
        }else{
        };
    };
    quick_But[1].onclick=function(){
        if(n!=(q_c_adiv.length-2)*-350){
            n -=  350;
            quick_cont.style.top=n+"px"
        }
    };
    for(var i=0;i<q_c_adiv.length;i++){
        q_c_adiv[i].onmouseover = function () {
            addCss(this,"transform:scale(1.1,1.1);box-shadow: 0px 0px 10px rgba(0,0,0,0.5)")
        };
        q_c_adiv[i].onmouseout = function () {
            addCss(this,"transform:scale(1,1);box-shadow:none")
        }
    };
    //leftNav
    leftNav_li[2].onclick=function(){
        Financials();
        unfold("财务报表",1,1);
    };
    //left表单验证
    var quick_input=quick_cont.getElementsByTagName('input');
    for(var i=0;i<quick_input.length;i++){
        var len=quick_input[i].value.length;
        (function(){
            var j=i;
            var len2=len;
            quick_input[j].oninput=function(){
                var len1=quick_input[j].value.length;
                if(len1<len2){
                    quick_input[j].value='';
                    len2=0;
                };
            };
        })();
    };
    //提交公用逻辑
    function pop2_p(cont,zhi,cont1,zhi1){
        pop2p.innerHTML=cont+"：<span style='color: red;margin-right: 30px;'>"+zhi+"</span><br>"+cont1+"：<span style='color: red'>"+zhi1+"</span>"
    };
    function quick_timer(){
        pop2img.style.display="block";
        pop2span.innerHTML=10;
        var n=10;
        quick_Timer=setInterval(function(){
            n--;
            if(n<10&&n!=0){
                pop2span.innerHTML=n;
            }else if(n<=0){
                pop2span.innerHTML='';
                pop2H1.innerHTML='信息已成功提交';
                pop2img.style.display="none"
            };
        },1000);
        quick_Timer1=setTimeout(function(){
            clearInterval(quick_Timer);
        },11000);
    };

    //弹出框按钮
    //确认按钮
    button.onclick=function(){
        pop2_r_i.value=1;
        pop2_r_s_num=1;
        searchNone(1);
        fade();
    };
    //修改按钮
    button1.onclick=function(){
        fade();
        clearTimeout(quick_Timer2);
    };
    //提交数据
    function setlocal_time(api,cont){
        quick_Timer2=setTimeout(function(){
            var judge=getlocal(api) != null;
            if(judge==false){
                var empty=[];
                empty.push(cont);
                setlocal(api,empty);
            }else{
                var Old=getlocal(api);
                Old.push(cont);
                setlocal(api,Old);
            };
        },11000);
    };
    //提交按钮
    var quick_but=quick_cont.getElementsByTagName('h2');
    var quick_Timer=null;//储存弹出框倒数提示定时器
    var quick_Timer1=null;//储存的是定时关闭quick_Timer循环定时器。
    var quick_Timer2=null;//储存定时提交内容定时器
    //快速报账
    quick_but[0].onclick=function(){
        var qi_1=quick_input[0].value;
        var qi_2=quick_input[1].value;
        var reg = /^[0-9]{1,10}$/;
        if(reg.test(qi_1)==true){
            unfold('请确认您输入的信息',0);
            quick_timer();
            pop2_p('消费金额',qi_1,'用途',qi_2);
            var gainFinancial={Time:gainTime1(),monery:-qi_1,Remarks:qi_2};
            setlocal_time(passWord+'Financial',gainFinancial);
        }else {
            unfold('请输入正确格式的信息');
        };
    };

    quick_but[1].onclick=function(){
        unfold('请确认您输入的信息',0);
        quick_timer();
        pop2_p('计划概括',quick_input[2].value,'计划完成时间',quick_input[3].value);
    };
    quick_but[2].onclick=function(){
        unfold('请确认您输入的信息',0);
        quick_timer();
        pop2p.innerHTML="单期金额：<span style='color: red;margin-right: 30px;'>"+quick_input[4].value+"</span>元<br>还款日：<span style='color: red'>"+quick_input[5].value+"</span>号<br>还需还款：<span style='color: red'>"+quick_input[6].value+"</span>个月<br>备注：<span style='color: red'>"+quick_input[7].value+"</span>"
    };
    quick_but[3].onclick=function(){
        unfold('请确认您输入的信息',0);
        quick_timer();
        pop2_p('姓名',quick_input[8].value,'生日',quick_input[9].value);
    };
    quick_but[4].onclick=function(){
        var qi_10=quick_input[10].value;
        var qi_11=quick_input[11].value;
        var reg = /^[0-9]{1,10}$/;
        if(reg.test(qi_10)==true){
            unfold('请确认您输入的信息',0);
            quick_timer();
            pop2_p('金额',qi_10,'来源',qi_11);
            var gainFinancial={Time:gainTime1(),monery:qi_10,Remarks:qi_11};
            setlocal_time(passWord+'Financial',gainFinancial)
        }else{
            unfold('请输入正确格式的信息');
        };
    };
    //财务报表开始
    pop2_r_s_num1=1;
    pop2_seekS[0].onclick=function(){
        if(pop2_r_s_num1 > 1){
            pop2_r_s_num1--;
            var len=(pop2_r_s_num1-1)*12;
            active(len,len+12,2);
        };
    };
    pop2_seekS[1].onclick=function(){
        var conts=seekTemporary;
        if(conts.length>12){
            pop2_r_s_num1++;
            if(pop2_r_s_num1*12-conts.length>12){
                pop2_r_s_num1--;
                alert("没有更多内容");
                return;
            };
            len=(pop2_r_s_num1-1)*12;
            active(len,len+12,2);
        }else {
            alert("没有更多内容");
        };
    };


    pop2_r_s[0].onclick=function(){
        ConfirmedBy("hide");
        if(pop2_r_s_num > 1){
            pop2_r_s_num--;
            pop2_r_i.value=pop2_r_s_num;
            var len=(pop2_r_i.value-1)*12;
            active(len,len+12,1);
        };
    };
    pop2_r_s[1].onclick=function(){
        ConfirmedBy("hide");
        var conts=getlocal(passWord+"Financial");
        if(conts.length>12){
            pop2_r_s_num++;
            if(pop2_r_s_num*12-conts.length>12){
                pop2_r_s_num--;
                alert("没有更多内容");
                return;
            };
            pop2_r_i.value=pop2_r_s_num;
            len=(pop2_r_i.value-1)*12;
            active(len,len+12,1);
        }else {
            alert("没有更多内容");
        };
    };

    pop2_r_i.onblur=function(){
        ConfirmedBy("hide");
        var conts=getlocal(passWord+"Financial");
        console.log(conts);
        if(pop2_r_i.value*12-conts.length>12){
            alert("没有更多内容");
            pop2_r_i.value=pop2_r_s_num;
            return;
        };
        pop2_r_s_num=pop2_r_i.value;
        var len=(pop2_r_s_num-1)*12;
        active(len,len+12,1);
    };
    //点击更多按钮次数次数
    var pop2_r_sNum=1;
    function searchNone(type) {
        if(type==1){
            addCss(pop2_r_s[2],'transform:rotate(0deg);');
            //search.style.left='370px';
            addCss(search,'left:370px;opacity: 0;');
            searchDpNone();
            return
        };
        pop2_r_sNum++;
        if(pop2_r_sNum%2){
            addCss(pop2_r_s[2],'transform:rotate(0deg);');
            //search.style.left='370px';
            addCss(search,'left:370px;opacity: 0;');
            searchDpNone();
        }else {
            addCss(pop2_r_s[2],'transform:rotate(90deg);');
            //search.style.left='450px';
            addCss(search,'left:450px;opacity: 1;');
        };
    };
    //关闭更多功能公共方法搜索功能。
    pop2_r_s[2].onclick=function(){
        searchNone();
    };
    function searchDpNone (){
        for(var i=0;i<searchDp.length;i++){
            searchDp[i].style.display='none';
        };
    };
    //隐藏搜索功能公共方法。
    //for(var i=0;i<typeBut.length;i++){
    //        typeBut[i].onclick=function(){
    //        searchNone();
    //    };
    //};
    for(var i=0;i<searchp.length;i++){
        (function(){
            var j=i;
            searchp[j].onclick=function(){
                searchDpNone();
                searchDp[j].style.display='block'
            };
        })()
    };
    var typeText=document.getElementsByClassName('typeText');
//关键字搜索功能
    //确认通过公共样式
    function ConfirmedBy(type){
        if(type=="show"){
            pop2_seek.style.display="block";
            pop2_Pop.style.display="block";
            addCss(pop2_d,"transition:1s all;transform:scale(1.15)");
            searchNone();
        }else if(type=="hide"){
            pop2_seek.style.display="none";
            pop2_Pop.style.display="none";
            addCss(pop2_d,"transition:1s all;transform:scale(1)")
        }
    };
    typeBut[0].onclick=function(){
        seekTemporary=[];
        var cont=getlocal(passWord+"Financial");
        var keyword=typeText[0].value;
        if(keyword==""){
            alert('请输入关键字');
            return
        };
        var state = null;
        function circulation(type){
            for(var i=0;i<cont.length;i++){
                var Remarks = cont[i].Remarks;
                if(Remarks.match(keyword)!==null){
                    if(type==1){
                        state = "have";
                    }else if(type==2){
                        seekTemporary.push(cont[i])
                    };
                };
            };
            if(type==2){
                active(0,12,2);
                ConfirmedBy("show")
            };
        }
        circulation(1);
        setTimeout(function(){
            if(state == null){
                alert('没有查到类似信息');
                typeText[0].value='';
                return;
            }else{
                pop2_d.innerHTML='';
                pop2_d.innerHTML=title;
                circulation(2);
                searchDpNone();
                typeText[0].value='';
            };
        },30)
    };
    //金钱区间搜索功能
    typeBut[1].onclick=function(){
        seekTemporary=[];
        var cont=getlocal(passWord+"Financial");
        var smallValue = typeText[1].value;
        var bigValue = typeText[2].value;
        var state = null;
        if(smallValue==""||bigValue==""){
            alert('请输入完整的区间');
            return
        };
        smallValue=parseFloat(smallValue);
        bigValue =parseFloat(bigValue);
        if(bigValue<smallValue||isNaN(smallValue)||isNaN(bigValue)){
          alert("请输入正确的区间");
            return
        };
        function circulation(type){
            for(var i=0;i<cont.length;i++){
                var monery= cont[i].monery;
                monery=""+monery+"";
                if(monery.charAt(0)=="-"){
                    monery = monery.slice(1,monery.length);
                };
                if(monery>=smallValue&&monery<=bigValue){
                    if(type==1){
                        state = "have";
                    }else if(type==2){
                        seekTemporary.push(cont[i])

                    };
                };
            };
            if(type==2){
                ConfirmedBy("show");
                active(0,12,2);
            };
        }
        circulation(1);
        setTimeout(function(){
            if(state == null){
                alert('没有查到金钱区间信息');
                typeText[1].value='';
                typeText[2].value='';
                return;
            }else{
                pop2_d.innerHTML='';
                pop2_d.innerHTML=title;
                circulation(2);
                searchDpNone();
                typeText[1].value='';
                typeText[2].value='';
            };
        },30)
    };
    //日期区间搜索功能
    typeBut[2].onclick=function(){
        seekTemporary=[];
        var cont=getlocal(passWord+"Financial");
        var nian=document.getElementById('nian').value;
        var yue=document.getElementById('yue').value;
        var ri=document.getElementById('ri').value;
        var nian1=document.getElementById('nian1').value;
        var yue1=document.getElementById('yue1').value;
        var ri1=document.getElementById('ri1').value;
        var state = null;
        if(nian==""||yue==""||ri==""||nian1==""||yue1==""||ri1==""){
            alert("请选择正确的日期");
            return
        };
        function datelayout(value){
            parseInt(value);
            if(value<10){
                return "0"+value;
            }else {
                return value;
            }
        };
        var dateValue=nian+datelayout(yue)+datelayout(ri);
        var dateValue1=nian1+datelayout(yue1)+datelayout(ri1);
        var dateValue2=null;
        function circulation(type){
            for(var i=0;i<cont.length;i++){
                var Time = cont[i].Time;
                var num = Time.indexOf('.');
                var Time1 = Time.slice(0,num);
                var num1 = Time1.indexOf('/');
                var num2 = Time1.lastIndexOf('/');
                var nian2 = Time1.slice(0,4);
                var yue2 =  Time1.slice(num1+1,num2);
                var ri2 = Time1.slice(num2+1,Time1.length);
                dateValue2=nian2+datelayout(yue2)+datelayout(ri2);
                if(dateValue<=dateValue2&&dateValue1>=dateValue2){
                    if(type==1){
                        state = "have";
                    }else if(type==2){
                        seekTemporary.push(cont[i])
                    };
                };
            };
            if(type==2){
                //console.log(seekTemporary.length);

                ConfirmedBy("show");
                active(0,12,2);
            };
        };
        circulation(1);
        setTimeout(function(){
            if(dateValue>dateValue1){
                alert('开始日期大于结束日期');
                return;
            }
            if(state == null){
                alert('没有查到日期区间信息');
                return;
            }else{
                pop2_d.innerHTML='';
                pop2_d.innerHTML=title;
                circulation(2);
                searchDpNone();
            };
        },30)

    };
    //财务报表结束


    //时间轴
    //左右点击事件
    var t_c_shaft=document.getElementsByClassName('t_c_shaft')[0];
    var t_c_s=t_c_shaft.getElementsByTagName('span');
    var t_s_cont=document.getElementsByClassName('t_s_cont')[0];
    var t_s_li=t_s_cont.getElementsByTagName('li');
    var t_s_ul=t_s_cont.getElementsByTagName('ul');
    var t_c_img=document.getElementById('c_img');
    var t_n=0;
    t_c_s[0].onclick=function(){
        if(t_n!=0){
            t_n+=555;
            t_s_ul[0].style.left=t_n+'px';
            t_s_ul[1].style.left=t_n+'px';
        }
        if(t_n ==0){
            t_c_img.src='img/63.png'
        };
    };
    t_c_s[1].onclick=function(){
        var len=parseInt(t_s_li.length/5-1)*555;
        if(t_n!=-len){
            t_n-=555;
            t_s_ul[0].style.left=t_n+'px';
            t_s_ul[1].style.left=t_n+'px';
        };
        if(t_n ==-555){
            t_c_img.src='img/63_.png'
        };
    };
    //底部
    var Footer=document.getElementsByClassName('Footer')[0];
    var Footer_p=Footer.getElementsByTagName('p')[0];
       setInterval(function(){
           time1();
           Footer_p.innerHTML=Year+'年'+Month+'月'+date+'日'+' '+Hours+'点'+Minutes+'分'+Seconds+'秒';
       },1000);


    (function(){
        strYYYY = document.form1.YYYY.outerHTML;
        strMM = document.form1.MM.outerHTML;
        strDD = document.form1.DD.outerHTML;
        MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//先给年下拉框赋内容YYYYMM
        var y = new Date().getFullYear();
        var str = strYYYY.substring(0, strYYYY.length - 9);
        for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年
        {
            str += "<option value='" + i + "'> " + i + "</option>\r\n";
        }
        document.form1.YYYY.outerHTML = str +"</select>";

//赋月份的下拉框
        var str = strMM.substring(0, strMM.length - 9);
        for (var i = 1; i < 13; i++)
        {
            str += "<option value='" + i + "'> " + i + "</option>\r\n";
        }
        document.form1.MM.outerHTML = str +"</select>";

        document.form1.YYYY.value = y;
        document.form1.MM.value = new Date().getMonth() + 1;
        var n = MonHead[new Date().getMonth()];
        if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;
        writeDay(n); //赋日期下拉框
        document.form1.DD.value = new Date().getDate();
    })();



    (function(){
        strAAAA = document.form2.AAAA.outerHTML;
        strBB= document.form2.BB.outerHTML;
        strCC = document.form2.CC.outerHTML;
        MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//先给年下拉框赋内容YYYYMM
        var y = new Date().getFullYear();
        var str = strAAAA.substring(0, strAAAA.length - 9);
        for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年
        {
            str += "<option value='" + i + "'> " + i + "</option>\r\n";
        }
        document.form2.AAAA.outerHTML = str +"</select>";

//赋月份的下拉框
        var str = strBB.substring(0, strBB.length - 9);
        for (var i = 1; i < 13; i++)
        {
            str += "<option value='" + i + "'> " + i + "</option>\r\n";
        }
        document.form2.BB.outerHTML = str +"</select>";

        document.form2.AAAA.value = y;
        document.form2.BB.value = new Date().getMonth() + 1;
        var n = MonHead[new Date().getMonth()];
        if (new Date().getMonth() ==1 && IsPinYearA(AAAAvalue)) n++;
        writeDayA(n); //赋日期下拉框
        document.form2.CC.value = new Date().getDate();
    })();
};

function AAAABB(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var BBvalue = document.form2.BB.options[document.form2.BB.selectedIndex].value;
    if (BBvalue == ""){CC.outerHTML = strCC; return;}
    var n = MonHead[BBvalue - 1];
    if (BBvalue ==2 && IsPinYearA(str)) n++;
    writeDayA(n)
}
function MMBB(str) //月发生变化时日期联动
{
    var AAAAvalue = document.form2.AAAA.options[document.form2.AAAA.selectedIndex].value;
    if (str == ""){CC.outerHTML = strCC; return;}
    var n = MonHead[str - 1];
    if (str ==2 && IsPinYearA(AAAAvalue)) n++;
    writeDayA(n)
}
function writeDayA(n) //据条件写日期的下拉框
{
    var s = strCC.substring(0, strCC.length - 9);
    for (var i=1; i<(n+1); i++)
        s += "<option value='" + i + "'> " + i + "</option>\r\n";
    document.form2.CC.outerHTML = s +"</select>";
}
function IsPinYearA(year)//判断是否闰平年
{ return(0 == year%4 && (year%100 !=0 || year%400 == 0))}


function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
    var MMvalue = document.form1.MM.options[document.form1.MM.selectedIndex].value;
    if (MMvalue == ""){DD.outerHTML = strDD; return;}
    var n = MonHead[MMvalue - 1];
    if (MMvalue ==2 && IsPinYear(str)) n++;
    writeDay(n)
}
function MMCC(str) //月发生变化时日期联动
{
    var YYYYvalue = document.form1.YYYY.options[document.form1.YYYY.selectedIndex].value;
    if (str == ""){DD.outerHTML = strDD; return;}
    var n = MonHead[str - 1];
    if (str ==2 && IsPinYear(YYYYvalue)) n++;
    writeDay(n)
}
function writeDay(n) //据条件写日期的下拉框
{
    var s = strDD.substring(0, strDD.length - 9);
    for (var i=1; i<(n+1); i++)
        s += "<option value='" + i + "'> " + i + "</option>\r\n";
    document.form1.DD.outerHTML = s +"</select>";
}
function IsPinYear(year)//判断是否闰平年
{ return(0 == year%4 && (year%100 !=0 || year%400 == 0))}

