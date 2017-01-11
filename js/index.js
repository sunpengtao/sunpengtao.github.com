/**
 * Created by SPT on 2016/10/21.
 */
window.onload= function () {
    //var getId=function(id,){return document.getElementById(id)};
    var fanhui=document.getElementById('fanhui');
    var Banner=document.getElementsByClassName("Banner")[0];
    var Bdiv=Banner.getElementsByTagName("div");
    var Bimg=Banner.getElementsByTagName("img");
    var banner1=document.getElementsByClassName('banner1')[0];
    var button=document.getElementsByClassName('button')[0];
    var b_input=banner1.getElementsByTagName('input');
    var b_img=banner1.getElementsByTagName('img');

    var pop=document.getElementsByClassName('pop')[0];
    var pop2=document.getElementsByClassName('pop2')[0];
    var popCont=pop2.getElementsByTagName("div")[0];
    var pop2H1=pop2.getElementsByTagName('h1')[0];

    var Zuce=document.getElementsByClassName("Zhuce")[0];
    var Long=document.getElementsByClassName("Long")[0];
    var long1=document.getElementsByClassName("long1")[0];
    var wenzi=document.getElementsByClassName("wenzi")[0];
    var huanjing=document.getElementsByClassName("huanjing")[0];
    var wenzi1=document.getElementsByClassName("wenzi1")[0];
    var he=document.getElementsByClassName("he")[0];
    var he1=document.getElementsByClassName("he1")[0];
    var he2=document.getElementsByClassName("he2")[0];
    var input1=document.getElementsByClassName("input1")[0];
    var mimapan=document.getElementsByClassName("mimapan")[0];
    var denglu=document.getElementsByClassName("denglu")[0];
    var register=document.getElementsByClassName("register")[0];
    var page_one =document.getElementsByClassName("page_one")[0];
    var landing=document.getElementsByClassName("landing")[0];
    var shurumima=document.getElementsByClassName("shurumima")[0];
    var img=page_one.getElementsByTagName("img");
    var num3=0;
    var num4=0;
    //随机数
    var Random=null;
    var Random2=null;
    //判断是否三个都输入正确
    var rusult1=false;
    var rusult2=false;
    var rusult3=false;
    //注册bannner初始化
    function initialize(){
        for(var i=0;i<Bdiv.length;i++){
            Random=(Math.random()+1).toFixed(1);
            Random2=(Math.random()+3).toFixed(1);
            addCss(Bdiv[i],"transform:rotateY(90deg) scale("+Random+","+Random+");transition:all "+Random2+"s;opacity: 1;")
        };
    };
    //公共本地数据
    function setlocal(name,obj){
            localStorage.setItem(name,JSON.stringify(obj));
    }
    function getlocal(name){
        return JSON.parse(localStorage.getItem(name));
    }
    //公共添加样式
    function addCss(Obj,newCss){
        if(Obj.style.length>1){
            Obj.setAttribute("style",""+Obj.getAttribute("style")+newCss+"");
            Obj.style.cssText = Obj.getAttribute("style")+newCss;
        }else{
            Obj.setAttribute("style",""+newCss+"");
            Obj.style.cssText = ""+newCss+"";
        }
    };
    //添加注册banner图片;
    for(var j=0;j<100;j++){
        var p=j;
        p++;
        if(p<10){
            p="0"+p
        };
        Banner.innerHTML+="<div><img src='img/images/banner_"+p+".gif' style='left: 0;top:0;position: absolute;'></div>";
    };
    //公共消失弹出背景
    function fade(){
        pop.style.opacity='0';
        addCss(pop2,"transform:scale(0,0);opacity:0");
        setTimeout(function(){
            pop.style.display='none';
            pop2.style.display='none';
        },800);
    };
    //公共弹出背景
    function unfold(cont){
        pop2H1.innerHTML=cont;
        setTimeout(function(){
            addCss(pop,"transition:all 0.7s;opacity:0.5");
            addCss(pop2,"transform:scale(1,1);opacity:1;");
        },30);
        addCss(pop,"background: #000;display:block");
        addCss(pop2,"display:block;transform:scale(0,0)");
        //pop2.style.display="block";
    };
    //公共注册banner动画
    function bannerMove(){
        for(var n=0;n<Bdiv.length;n++){
            var nFor =""+n+"";
            var num1=nFor.charAt(0);
            var num2=nFor.charAt(1);
            if(nFor<10){
                addCss(Bimg[n],"top:0;");
            }else if(nFor>= 10){
                switch (num1) {
                    case '1':
                        addCss(Bimg[n],"top:10%;");
                        break;
                    case '2':
                        addCss(Bimg[n],"top:20%;");
                        break;
                    case '3':
                        addCss(Bimg[n],"top:30%;");
                        break;
                    case '4':
                        addCss(Bimg[n],"top:40%;");
                        break;
                    case '5':
                        addCss(Bimg[n],"top:50%;");
                        break;
                    case '6':
                        addCss(Bimg[n],"top:60%;");
                        break;
                    case '7':
                        addCss(Bimg[n],"top:70%;");
                        break;
                    case '8':
                        addCss(Bimg[n],"top:80%;");
                        break;
                    case '9':
                        addCss(Bimg[n],"top:90%;");
                        break;
                    //break;
                    default:
                        break;
                }
            };
            if(num3 == 0){
                switch (num2) {
                    case '0':
                        addCss(Bimg[n],"left:0;");
                        break;
                    case '1':
                        addCss(Bimg[n],"left:10%;");
                        break;
                    case '2':
                        addCss(Bimg[n],"left:20%;");
                        break;
                    case '3':
                        addCss(Bimg[n],"left:30%;");
                        break;
                    case '4':
                        addCss(Bimg[n],"left:40%;");
                        break;
                    case '5':
                        addCss(Bimg[n],"left:50%;");
                        break;
                    case '6':
                        addCss(Bimg[n],"left:60%;");
                        break;
                    case '7':
                        addCss(Bimg[n],"left:70%;");
                        break;
                    case '8':
                        addCss(Bimg[n],"left:80%;");
                        break;
                    case '9':
                        addCss(Bimg[n],"left:90%;");
                        break;
                    //break;
                    default:
                        break;
                };
            }else{
                //移动走
                switch (num2) {
                    case '0':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 1s;transform:rotateY(0deg) scale(1,1);");
                        break;
                    case '1':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.9s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '2':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.8s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '3':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.7s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '4':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.6s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '5':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.5s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '6':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.4s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '7':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.3s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '8':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s 0.2s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    case '9':
                        addCss(Bdiv[n],"left:200%;transition:all 0.5s;transform:rotateY(0deg) scale(1,1)");
                        break;
                    //break;
                    default:
                        break;
                }
            }
        }
    }
    bannerMove();
    //初始化banner动画
    initialize();
    //注册成功点击按钮
    function fanhui_1(){
        fade();
        if(num4==1){
            setTimeout(function(){
                location.reload();
                popCont.innerHTML="";
            },1200);
            addCss(banner1,"opacity: 0;");
            bannerMove();
            num4=0;
        };
    }
    button.onclick=function(){
        fanhui_1()
    };
    fanhui.onclick=function(){
        num4=1;
        fanhui_1()
    };
    //设置完成点击按钮
        b_img[2].onclick=function(){
            if (rusult1 == true && rusult2 == true && rusult3 == true) {
                //注册逻辑
                var b_Iv0=b_input[0].value;
                var b_Iv1=b_input[1].value;
                var b_Iv2=b_input[2].value;
                var result=false;
                var fadeCont ="<h1 style='font-size: 18px;'>温馨提示：</h1><p>1.您的密码为 <span style='color: red; font-weight: bold'>"+b_Iv2+"</span>请牢记。</p><p>2.您的个人数据将保存在此次注册的浏览器中。为了您的数据安全请不要删除浏览器缓存信息，请牢记。</p>";
                var obj = {userName:b_Iv0,sex:b_Iv1,passWord:b_Iv2};
                if(getlocal("Password") == null){
                    var newPassword = [];
                    newPassword.push(obj);
                    setlocal("Password",newPassword);
                    popCont.innerHTML=fadeCont;
                    unfold("恭喜您的信息已设置成功");
                    num4=1;
                    return;
                }
                for(var i=0;i<(getlocal("Password").length);i++){
                    if(getlocal("Password")[i].passWord == obj.passWord){
                        result=true;
                    };
                };
                setTimeout(function(){
                    if(result == true){
                        unfold("信息已存在");
                        return;
                    }else{
                        var beforePassword = getlocal("Password");
                        beforePassword.push(obj);
                        setlocal("Password",beforePassword);
                        popCont.innerHTML=fadeCont;
                        unfold("恭喜您的信息已设置成功");
                        num4=1;
                    };
                },20);
            };
        };
    //注册表单验证
        b_img[2].onmouseover=function() {
            if (rusult1 == true && rusult2 == true && rusult3 == true) {
                this.setAttribute("src", "img/shezhi2.png");
                addCss(this, "bottom:-115px;cursor: pointer");
            };
        };
        function rusult(){
            if(rusult1==true && rusult2==true && rusult3==true){
                b_img[2].setAttribute("src","img/shezhi.png");
            }else{
                b_img[2].setAttribute("src","img/shezhi1.png");
            }
        };
        b_img[2].onmouseout=function() {
            rusult();
            addCss(this, "bottom:-120px;");
        };
        b_input[0].onfocus=function(){
            this.value="";
        };
        b_input[1].onfocus=function(){
            this.value="";
        };
        b_input[2].onfocus=function(){
            this.value="";
            this.setAttribute('type','password')
        };
        b_input[0].onblur=function(){
            var cont=this.value;
            var reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{2,4}$/;
            if(reg.test(cont) == true){
                rusult1=true;
                this.style.color="green";
            }else {
                rusult1=false;
                this.style.color="red";
            };
            if(this.value  == ""){
                rusult1=false;
                this.style.color="red";
            };
            rusult()
        };
        b_input[1].onblur=function(){
            var cont=this.value;
            if(cont=="女"||cont=="男"){
                rusult2 = true;
                this.style.color="green";
            }else{
                rusult2 = false;
                this.style.color="red";
            };
            if(this.value == ""){
                rusult2=false;
                this.style.color="red";
            };
            rusult()
        };
        b_input[2].onblur=function(){
            var cont=this.value;
            var reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{6,16}$/;
            if(reg.test(cont) == true){
                rusult3=true;
                this.style.color="green";
            }else {
                rusult3=false;
                this.style.color="red";
            }
            if(this.value == ""){
                rusult3=false;
                this.style.color="red";
            };
            rusult()
        };
//开始动画效果
        var n=0;
        var timer=null;
        var wenzicss="opacity:1;left:100px;";
        var wenzi1css="opacity:1;right:100px;";
        var hecss="transform:rotate(0deg);left:0px;width:100%;";
        var he1css="right:5px;top:100px;";
        var he2css="right:30px;top:70px;";
        wenzi.setAttribute("style",wenzicss);
        wenzi.style.cssText = wenzicss;
        wenzi1.setAttribute("style",wenzi1css);
        wenzi1.style.cssText = wenzi1css;
        he.setAttribute("style",hecss);
        he.style.cssText=hecss;
        he1.setAttribute("style",he1css);
        he1.style.cssText=he1css;
        he2.setAttribute("style",he2css);
        he2.style.cssText=he2css;
        function timer1(){
            timer = setInterval(function(){
                n++;
                mimapan.style.transform = "rotate("+n+"deg)";
            },50)
        }
        input1.onfocus=function(){
            input1.style.color="#000";
            clearInterval(timer);
            timer1();
        };
        input1.onblur=function(){
            mimapan.style.transform = "rotate("+n+"deg)";
            clearInterval(timer);
        };
    //登陆按钮
        denglu.onclick = function(){
            var Passwored = getlocal("Password");
            var result=true;
            if(input1.value=="" && result){
                unfold("密码为空");
                return;
            };
            if(!Passwored){
                unfold("本地没有信息请注册");
                return;
            }
            for(var i=0;i<Passwored.length;i++){
                if(Passwored[i].passWord == input1.value) {
                    var User=Passwored[i];
                    setlocal('User',User);
                    result=false;
                    timer1();
                    addCss(wenzi,"left:130px;");
                    addCss(Long,"left:120px;");
                    setTimeout(function(){
                        addCss(wenzi,"transition:all 1.2s;left:-800px;");
                        addCss(Long,"left:-200px;top:50px;transform:scale(1.2,1.2)");
                        addCss(long1,"transition:all 1.2s;left:-1500px;");
                        addCss(he,"transition:all 0.5s;left:-100px;transform:rotateY(180deg);");
                        addCss(he1,"left:-300px;");
                        addCss(he2,"left:-200px;");
                        addCss(input1,"opacity: 0;");
                        addCss(shurumima,"opacity: 0;");
                        addCss(landing,"opacity: 1;");
                        addCss(denglu,"opacity: 0;");
                        addCss(register,"opacity: 0;");
                    },1000);
                    setTimeout(function(){
                        addCss(he,"left:-550px;transition:all 1.5s;width:180px;");
                    },1200);
                    setTimeout(function(){
                        addCss(Long,"left:-2000px;");
                    },2500);
                    setTimeout(function(){
                        addCss(he,"left:-500px;transform:rotateY(0deg);transition:all 0.5s;");
                        addCss(he1,"left:300px;");
                        addCss(he2,"left:300px;");
                    },3000);
                    setTimeout(function(){
                        addCss(huanjing,"left:2000px;");
                        addCss(wenzi1,"top:1000px;");
                    },3200);
                    setTimeout(function(){
                        addCss(he,"left:300px;transform:rotateY(0deg);transition:all 1s;transform:scale(0.8,0.8)");
                    },3500);
                    setTimeout(function(){
                        var adom=[he,he1,he2,huanjing,wenzi1];
                        for(var i=0;i<adom.length;i++){
                            adom[i].style.display="none";
                        }
                        var none=document.getElementById('none');
                        //跳转页面
                        var cont1 = ""+window.location+"";
                        var num = cont1.lastIndexOf("/");
                        var cont = cont1.slice(0,num);
                        window.location.href=cont+"/cont.html";
                    },4000);
                };
            };
            setTimeout(function(){
                if(result){
                   unfold("密码错误");
                };
            },20);
        };
    //注册按钮
        register.onclick = function () {
            addCss(page_one,"opacity: 0;");
            Zuce.style.display="block";
            setTimeout(function(){
                num3=1;
                addCss(Banner, "-webkit-perspective:900px;transform:rotateY(0deg) scale(1,1);transition:all 1.5s;left:0;");
                for (var i = 0; i < Bdiv.length; i++) {
                    Random = (Math.random() + 1).toFixed(1);
                    Random2 = (Math.random() + 1).toFixed(1);
                    addCss(Bdiv[i], "transform:rotateY(0deg) scale(1,1);transition:all " + Random2 + "s;opacity: 1;");
                };
                addCss(banner1,"opacity: 1;")
            },500);
        };
};
