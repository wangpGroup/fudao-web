

//document.getElementById('ab').style.background=back1;


$('#myCanvas').click(function(e){
    e.preventDefault();
    ctx.clearRect(-200,-200,375,375);
    $('.warn_0').hide();
    $('.warn_1').hide();
    $('.warn_2').hide();

});
$('.warn1').click(function(e){
    e.preventDefault();
    ctx.clearRect(-200,-200,375,375);
    $('.warn_0').hide();
    $('.warn_1').hide();
    $('.warn_2').hide();

});



/*var daWidth=screen.width;
 $('.warn1').width(daWidth);
 $('#myCanvas').attr('width',daWidth);
 $('#myCanvas').attr('height',daWidth);

 $('#abc').css({top:-220-(daWidth-320)/2,left:100+(daWidth-320)/2});//
 $('.dongzuo').css({top:-210-(daWidth-320)/2,left:125+(daWidth-320)/2});*/



var data1 = [

];
for(var i=0; i<yundongObj.obj.length; i++){
    console.log(yundongObj.obj[i].name);
    data1.push({
        text:yundongObj.obj[i].name,
        value: i
    })
}

var oCanvas=document.getElementById('myCanvas');
var context = oCanvas.getContext("2d");
var canvas = document.querySelector('canvas');
context.translate(160,160);//偏移到中心点

//点击查看详情
$('.tishi_0').click(function(e){

    e.stopPropagation();
    console.log($(this).attr('name'))
    $.ajax({
        type:"post",
        url:urls.TIMEPERIOD_GETTIMESTAGETHERAPYLIST,//获取时间段的推荐疗法
        headers: {
            authorization: token
        },
        data:{
            timePeriod:$(this).attr('name')
        },
        success:function(data){
            console.log(data);
            if(data.obj)
                window.postMessage(JSON.stringify(data.obj[0]));
        },
        error:function(error){
            alert(JSON.stringify(error));
        }
    });
})
$('.tishi_1').click(function(e){

    e.stopPropagation();
    console.log($(this).attr('name'))
    $.ajax({
        type:"post",
        url:urls.TIMEPERIOD_GETTIMESTAGETHERAPYLIST,//获取时间段的推荐疗法
        headers: {
            authorization: token
        },
        data:{
            timePeriod:$(this).attr('name')
        },
        success:function(data){
            console.log(data);
            if(data.obj)
                window.postMessage(JSON.stringify(data.obj[0]));
        },
        error:function(error){
            alert(JSON.stringify(error));
        }
    });
})
$('.tishi_2').click(function(e){

    e.stopPropagation();
    console.log($(this).attr('name'))
    $.ajax({
        type:"post",
        url:urls.TIMEPERIOD_GETTIMESTAGETHERAPYLIST,//获取时间段的推荐疗法
        headers: {
            authorization: token
        },
        data:{
            timePeriod:$(this).attr('name')
        },
        success:function(data){
            console.log(data);
            if(data.obj)
                window.postMessage(JSON.stringify(data.obj[0]));
        },
        error:function(error){
            alert(JSON.stringify(error));
        }
    });
})



setTimeout(function(){
    var startTimeArr=[];
    var angleIndex;
    for(i=0; i<arr.length; i++){//计算刷新时间
        var now = new Date();
        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr  = now.getHours();
        var startDuan=blueDuan_timeToAngle(arr[i].startTime);
        var overDuan=blueDuan_timeToAngle(arr[i].endTime);
        var newdate=hr+":"+min;
        var newdian=blueDuan_timeToAngle(newdate);
        var chaAngle,a=overDuan-startDuan;
        if(overDuan<startDuan){
            a=(overDuan+360)-startDuan;
        }
        if(startDuan>overDuan){
            if(newdian<(overDuan+360)&&newdian>=startDuan||newdian<overDuan){
                chaAngle=(overDuan+360)-newdian
                angleIndex=i;
                //console.log(i);
            }
        }
        if(startDuan<overDuan){
            if(newdian<overDuan&&newdian>=startDuan){
                chaAngle=overDuan-newdian;
                angleIndex=i;
                //console.log(i);
            }
        }
        startTimeArr.push(a);
    }
    drawTime();
    yundongList();
    setTimeout(function(){
        /*drawTime()
        yundongList();*/
        location.reload();
    },chaAngle*4*60*1000-sec*1000);//下个阶段的刷新时间
    /*setTimeout(function(){
        drawTime();
        yundongList();
        location.reload();
    },(chaAngle+startTimeArr[angleIndex+1])*4*60*1000-sec*1000);*///执行完下下阶段后进行刷新
},500)




function drawTime(){

    context.clearRect(-200,-200,375,375)/*因为绘制的原点变了，所以要清除起始坐标也发生了变化*/
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    var num=84;//环的半径
    context.beginPath();
    context.moveTo(-45,-36)
    context.lineTo(45,-36)
    context.strokeStyle="#fff";
    context.lineWidth= 0.1;
    context.stroke()
    context.closePath();//时间列表上的上横线

    context.beginPath();
    context.moveTo(-45,-16)
    context.lineTo(45,-16)
    context.strokeStyle="#fff";
    context.lineWidth= 0.1;
    context.stroke()
    context.closePath();//时间列表上的下横线



    //时针的刻度
    for(var i = 0 ;i<24;i++){
        context.beginPath();
        context.lineWidth= 1;
        context.strokeStyle="#f4b905";
        if(i>11&&i<22){
            context.strokeStyle="#000";
        }
        context.rotate(-Math.PI/12);
        context.moveTo(num,0);
        context.lineTo(num+10,0);
        context.stroke();
    }
    //分钟刻度
    for(var i = 0 ;i<120;i++){
        context.beginPath();
        context.lineWidth= 1;
        context.strokeStyle="#f4b905";
        if(i>60&&i<114){
            context.strokeStyle="#000";
        }
        context.rotate(-Math.PI/60);
        context.moveTo(num+5,0);
        context.lineTo(num+10,0);
        context.stroke();
    }
    //内圈数字
    context.save();
    context.beginPath();
    for(var i=-12;i<12;i++){
        var x1=Math.sin(i*2*Math.PI/24);
        var y1=-Math.cos(i*2*Math.PI/24);
        context.fillStyle="#f4b905";
        if(i<-6||i>7){
            context.fillStyle="#000";
        }
        context.font="12px Arial";
        context.textAlign='center';
        context.textBaseline='middle';
        context.fillText(i+12,x1*(num-7),y1*(num-7));
    }
    context.closePath();
    var index;


    for(var i=0; i<arr.length; i++){
        // 遍历所有黄色时间段
        yellowTimeDuan(num,arr[i].startTime,arr[i].endTime,arr[i].name,160);
        var startDuan=blueDuan_timeToAngle(arr[i].startTime);
        var overDuan=blueDuan_timeToAngle(arr[i].endTime);
        //(parseInt(hr)+2)
        var newdate=hr+":"+min;
        //var newdate='0:00'
        var newdian=blueDuan_timeToAngle(newdate);
        if(startDuan>overDuan){
            if(newdian<(overDuan+360)&&newdian>=startDuan||newdian<overDuan){
                blueTime(num,arr[i].startTime,arr[i].endTime,arr[i].name)
                index=i
            }
        }
        if(startDuan<overDuan){
            if(newdian<overDuan&&newdian>=startDuan){
                blueTime(num,arr[i].startTime,arr[i].endTime,arr[i].name)
                index=i
            }
        }
    }
    if(index==arr.length-1){
        index=-1;
    }


    index=index+1;
    //下个时间段的指示
    nextTime(num,arr[index].startTime,arr[index].endTime,arr[index].name)
    if(index==arr.length-1){
        index=-1;
    }
    index=index+1;
    //下下个时间段的指示
    if(index==arr.length){
        index=0
    }
    nextTime(num,arr[index].startTime,arr[index].endTime,arr[index].name)
}
//黄色时间段
function yellowTimeDuan(num,startTime,endTime,name){
    var startDuan=blueDuan_timeToAngle(startTime);
    var overDuan=blueDuan_timeToAngle(endTime);
    var gradient;
    context.save();
    context.beginPath();
    context.lineWidth = 5;
    if(startDuan>15&&startDuan<160&&overDuan>15&&overDuan<160){//时间段颜色的渐变
        context.strokeStyle="#022277";
    }else if(startDuan>15&&startDuan<160&&overDuan>160){
        gradient=context.createLinearGradient(0,2,0,12);
        gradient.addColorStop("0","#f4b905");
        gradient.addColorStop("1.0","#022277");
        context.strokeStyle=gradient;
    }else if(overDuan>15&&overDuan<160&&startDuan<=15){
        gradient=context.createLinearGradient(0,30,0,40);
        gradient.addColorStop("0","#f4b905");
        gradient.addColorStop("1.0","#022277");
        context.strokeStyle=gradient;
    }else{
        context.strokeStyle="#f4b905";
    }
    context.arc(0,0,num+18,2*Math.PI/360*(startDuan+1),2*Math.PI/360*overDuan);
    var zhongjian=(overDuan-startDuan)/2+startDuan;
    if(overDuan-startDuan<0){
        zhongjian=((overDuan+360)-startDuan)/2+startDuan;
        if(zhongjian>360){
            zhongjian=zhongjian-360;
        }
    }
    var x=Math.cos(2*Math.PI/360*zhongjian)*(num+21)+160;//计算x轴中间点的坐标
    var y=Math.sin(2*Math.PI/360*zhongjian)*(num+21)+160;//计算y轴中间点的坐标
    var x1=x-10;
    var x2=x+10;
    var y1=y-10;
    var y2=y+10;
    if(overDuan-startDuan>90){
        x1=x-40;
        x2=x+40;
        y1=y-40;
        y2=y+40;
    }
    oCanvas.addEventListener('click', function(e){//时间段的点击事件
        e.stopPropagation();
        p = getEventPosition(e);
        if(p.x>=x1&&p.x<=x2&&p.y>=y1&&p.y<=y2){
            huiseTimezhishi(num,startTime,endTime,name)//灰色指示标
            tishiQipao(startTime,p.x,p.y)//阶段信息提示气泡
        }
    }, false);
    context.stroke();
    context.restore();
}
//提示气泡
function tishiQipao(startTime,x,y){
    var zongduantishiArr=[];
    for(var i=0; i<arr.length; i++){
        if(startTime==arr[i].startTime){
            for(j=0; j<arr[i].timePeriods.length; j++){
                $.ajax({
                    type:"post",
                    url:urls.TIMEPERIOD_GETTIMESTAGETHERAPYLIST,//获取时间段的推荐疗法
                    headers: {
                        authorization: token
                    },
                    data:{
                        timePeriod:arr[i].timePeriods[j].title
                    },
                    success:function(data){

                        if(data.obj){
                            zongduantishiArr.push(data.obj);
                        }
                    },
                    error:function(){

                    }
                });

            }
        }
    }
    setTimeout(function(){
        console.log(zongduantishiArr)
        for(var i=0; i<zongduantishiArr.length; i++){
            $('.tishi_'+i+'').attr('name',zongduantishiArr[i][0].timePeriod);
            $('.warn_'+i+'').show();
            $('.warn_'+i+'').css({top:y+5+(i*35)});
            $('.triangle-up').css({left:x-25})
            $('.tishi_'+i+'').html(zongduantishiArr[i][0].threeCharacterClassic);
        }
    },100)

}


//文本时间转度数
function blueTime_timeToAngle(time){
    var hr=time.split(':')[0];
    var angle=(24-parseInt(hr))*15;
    var min=time.split(':')[1];

    angle=angle-15/60*min;

    return angle;
}
//弧度时间转度数
function blueDuan_timeToAngle(time){
    var hr=time.split(':')[0];
    var min=time.split(':')[1];
    var angle;
    if(hr<18){
        angle=parseInt(hr)*15+90;
        angle=angle+15/60*min;
    }else{
        angle=(parseInt(hr)-18)*15;
        angle=angle+15/60*min;
    }
    return angle;
}
//绿色时间段的显示
function blueTime(num,startTime,endTime,name){

    $('#abc1').find('#div1').remove();
    $('#abc1').find('#div2').remove();
    var startDuan=blueDuan_timeToAngle(startTime);
    var overDuan=blueDuan_timeToAngle(endTime);
    var zhongjian=(overDuan-startDuan)/2+startDuan;
    if(overDuan-startDuan<0){
        zhongjian=((overDuan+360)-startDuan)/2+startDuan;
        if(zhongjian>360){
            zhongjian=zhongjian-360;
        }
    }

    var x=Math.cos(2*Math.PI/360*zhongjian)*(num+21)+160;//计算x轴中间点的坐标
    var y=Math.sin(2*Math.PI/360*zhongjian)*(num+21)+160;
    tishiQipao(startTime,x,y)//阶段信息提示气泡

    //绿色时间段
    context.save();
    context.beginPath();
    context.lineWidth = 16;
    context.strokeStyle="#a1cc01";
    context.arc(0,0,num+21,2*Math.PI/360*startDuan,2*Math.PI/360*overDuan);
    context.stroke();
    context.restore();


    var startText=blueTime_timeToAngle(startTime);
    var overText=blueTime_timeToAngle(endTime);
    var centerText;
    centerText=overText+3;
    //绿色斜线
    context.beginPath();
    context.strokeStyle="#a1cc01";
    context.lineWidth="1";
    context.moveTo( Math.sin(2*Math.PI / 360*centerText) * (num+29),Math.cos(2*Math.PI / 360*centerText) * (num+29));
    context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+50),Math.cos(2*Math.PI / 360*centerText) * (num+50));
    context.stroke();
    //绿色横线
    context.beginPath();
    context.strokeStyle="#a1cc01";
    context.lineWidth="1";
    context.moveTo(Math.sin(2*Math.PI / 360*centerText) * (num+50),Math.cos(2*Math.PI / 360*centerText) * (num+50));
    if(overText<=180){
        context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+50)+10,Math.cos(2*Math.PI / 360*centerText) * (num+50));
    }else{
        context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+50)-10,Math.cos(2*Math.PI / 360*centerText) * (num+50));
    }
    context.stroke();

    //绿色字体
    context.save();
    context.beginPath();
    context.fillStyle="#a1cc01";
    context.font="12px Arial";
    context.textAlign='center';
    context.textBaseline='middle';
    if(overText<=180){
        if(overText>120){
            context.fillText(name,Math.sin(2*Math.PI / 360*centerText) * (num+40)+18,Math.cos(2*Math.PI / 360*centerText) * (num+40)-20);

        }else{
            context.fillText(name,Math.sin(2*Math.PI / 360*centerText) * (num+40)+18,Math.cos(2*Math.PI / 360*centerText) * (num+40)-10);
        }

    }else{
        context.fillText(name,Math.sin(2*Math.PI / 360*centerText) * (num+40)-15,Math.cos(2*Math.PI / 360*centerText) * (num+40)-20);

    }
    context.closePath();

    //绿色开始时间12:00
    context.save();
    context.beginPath();
    context.fillStyle="#a1cc01";
    context.font="10px Arial";
    context.textAlign='center';
    context.textBaseline='middle';
    context.fillText(startTime,Math.sin(2*Math.PI / 360*startText) * (num+40),Math.cos(2*Math.PI / 360*startText) * (num+40));
    var div=document.createElement("div");
    div.id='div1'
    div.style.width='30px';
    div.style.height='10px';
    div.style.background='rgba(0,0,0,.3)';
    div.style.position='absolute';
    div.style.left=''+(Math.sin(2*Math.PI / 360*startText) * (num+40)+144)+'px'
    div.style.top=''+(Math.cos(2*Math.PI / 360*startText) * (num+40)+155)+'px'
    div.onclick=function(){
        window.postMessage('修改时间');
    }
    var av=document.getElementById('abc1');
    av.appendChild(div);
    context.closePath();



    //绿色结束时间14:00
    context.save();
    context.beginPath();
    context.fillStyle="#a1cc01";
    context.font="10px Arial";
    context.textAlign='center';
    context.textBaseline='middle';
    context.fillText(endTime,Math.sin(2*Math.PI / 360*overText) * (num+40),Math.cos(2*Math.PI / 360*overText) * (num+40));
    var div=document.createElement("div");
    div.id='div2'
    div.style.width='30px';
    div.style.height='10px';
    div.style.background='rgba(0,0,0,.3)';
    div.style.position='absolute';
    div.style.left=''+(Math.sin(2*Math.PI / 360*overText) * (num+40)+144)+'px';
    div.style.top=''+(Math.cos(2*Math.PI / 360*overText) * (num+40)+155)+'px';
    div.onclick=function(){
        window.postMessage('修改时间');
    }
    var av=document.getElementById('abc1');
    av.appendChild(div);
    context.closePath();
}
//下个时间段的指示的显示方法
function nextTime(num,startTime,endTime,name){
    var startText=blueTime_timeToAngle(startTime);
    var overText=blueTime_timeToAngle(endTime);
    var centerText=overText+2;
    if(startText-overText>10&&startText-overText<100){
        centerText=overText+5;
    }
    if(startText-overText>20&&startText-overText<100){
        centerText=overText+10;
    }
    //白色斜线
    context.beginPath();
    context.strokeStyle="#fff";
    context.lineWidth="1";
    //context.rotate(min*Math.PI/30);
    context.moveTo(Math.sin(2*Math.PI / 360*centerText) * (num+20),Math.cos(2*Math.PI / 360*centerText) * (num+20));
    context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+40),Math.cos(2*Math.PI / 360*centerText) * (num+40));
    context.stroke();
    //白色横线
    context.beginPath();
    context.strokeStyle="#fff";
    context.lineWidth="1";
    //context.rotate(min*Math.PI/30);
    context.moveTo(Math.sin(2*Math.PI / 360*centerText) * (num+40),Math.cos(2*Math.PI / 360*centerText) * (num+40));
    if(overText<=180){
        context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+40)+10,Math.cos(2*Math.PI / 360*centerText) * (num+40));
    }else{
        context.lineTo(Math.sin(2*Math.PI / 360*centerText) * (num+40)-10,Math.cos(2*Math.PI / 360*centerText) * (num+40));
    }
    context.stroke();
    //白色字体
    context.save();
    context.beginPath();
    context.fillStyle="#fff";
    context.font="10px Arial";
    context.textAlign='center';
    context.textBaseline='middle';
    if(overText<=180){
        context.fillText(name,Math.sin(2*Math.PI / 360*centerText) * (num+40)+10,Math.cos(2*Math.PI / 360*centerText) * (num+40)-10);
    }else{
        context.fillText(name,Math.sin(2*Math.PI / 360*centerText) * (num+40)-20,Math.cos(2*Math.PI / 360*centerText) * (num+40)-10)
    }
    context.closePath();
}
function getEventPosition(ev){
    var x, y;
    if (ev.layerX || ev.layerX == 0) {
        x = ev.layerX;
        y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
        x = ev.offsetX;
        y = ev.offsetY;
    }
    return {x: x, y: y};
}
var weizhi=0,index=0;
function yundongList(){
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    var newname;

    setTimeout(function(){
        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr[i].timePeriods.length; j++){
                for(var h=0; h<yundongObj.obj.length; h++){
                    if(arr[i].timePeriods[j].title==yundongObj.obj[h].timePeriod){
                        yundongObj.obj[h].weizhi=i
                    }
                }
                var startDuan=blueDuan_timeToAngle(arr[i].timePeriods[j].startTime);
                var overDuan=blueDuan_timeToAngle(arr[i].timePeriods[j].endTime);
                //(parseInt(hr)+2)
                var newdate=hr+":"+min;
                var newdian=blueDuan_timeToAngle(newdate);
                if(startDuan>overDuan){
                    if(newdian<(overDuan+360)&&newdian>=startDuan||newdian<overDuan){
                        newname=arr[i].timePeriods[j].title;
                        index=i;

                    }
                }
                if(startDuan<overDuan){
                    if(newdian<overDuan&&newdian>=startDuan){
                        newname=arr[i].timePeriods[j].title;
                        index=i;
                    }
                }
            }
        }
        var str='';
        var status=false;

        for(var i=0; i<yundongObj.obj.length; i++){
            str += '<div class="swiper-slide">'+yundongObj.obj[i].name+'</div>'

            if(newname==yundongObj.obj[i].timePeriod){
                weizhi=i
                status=true;
            }

            if(index>yundongObj.obj[i].weizhi){
                weizhi=i+1
                if(weizhi>=yundongObj.obj.length){
                    weizhi=yundongObj.obj.length-1;
                }

            }

        }

        console.log(weizhi)
        var img=yundongObj.obj[weizhi].img
        $(".dongzuo").find('img').attr('src',urls.IMGSRC+yundongObj.obj[weizhi].img);
        $(".dongzuo").find('img').attr('name',weizhi);
        //$(".dongzuo").find('img').attr('src',urls.IMGSRC+img);
        $(".dongzuo").find('img').click(function(){
            var num=parseInt($(this).attr('name'))
            console.log(num)
            window.postMessage('获取运动'+JSON.stringify(yundongObj.obj[num]));
            //window.postMessage('获取运动'+JSON.stringify(yundongObj.obj[weizhi]));
        })
        $('.swiper-wrapper').html(str);
        if(status)
            $(".swiper-wrapper div:eq("+weizhi+")").css({'color':'#fff'})

        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            initialSlide :weizhi,
            slidesPerView: 3,
            paginationClickable: true,
            centeredSlides: true,
            watchSlidesProgress : true,
            onTransitionStart: function(swiper){
                $(".dongzuo").find('img').attr('name',swiper.activeIndex);
                var img=yundongObj.obj[swiper.activeIndex].img
                $(".dongzuo").find('img').attr('src',urls.IMGSRC+img);
                /*$(".dongzuo").find('img').click(function(){
                 console.log(yundongObj.obj[swiper.activeIndex]);
                 window.postMessage('获取运动'+JSON.stringify(yundongObj.obj[swiper.activeIndex]));
                 })*/


            }
        })
    },500)

}

//获取用户类型和性别
$.ajax({
    type: "post",
    url: urls.USER_GETLOGINUSER,
    headers: {
        authorization: token
    },
    success: function (res) {
        localStorage.setItem("diseasespeople",res.obj.crowd);
        localStorage.setItem("sex",res.obj.sex);
    },
    error: function () {
        console.log('erar')
    }
});
