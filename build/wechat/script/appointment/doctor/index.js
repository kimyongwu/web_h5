!function t(e,a,o){function r(n,s){if(!a[n]){if(!e[n]){var l="function"==typeof require&&require;if(!s&&l)return l(n,!0);if(d)return d(n,!0);throw new Error("Cannot find module '"+n+"'")}var i=a[n]={exports:{}};e[n][0].call(i.exports,function(t){var a=e[n][1][t];return r(a?a:t)},i,i.exports,t,e,a,o)}return a[n].exports}for(var d="function"==typeof require&&require,n=0;n<o.length;n++)r(o[n]);return r}({1:[function(t,e,a){!function(){var t,e,a,o,r,d,n,s=TaoGu.APP.Utility,l=30,c=0,p="",m=0,u=s.Network.queryString("hospId"),h=s.Network.queryString("deptId"),f=s.Network.queryString("patientId")||"",g=s.Network.queryString("deptName"),y=s.Network.queryString("hospName"),v={},I=0;$('[data-role="hospital-title"]').html("<span>"+g+"</span>");var b=function(){var s=$('[data-role="scrollWindow"]').width()/3,b=0,D={renderDate:function(){$.ajax({url:"/hospital/queryMaxDys.htm",type:"POST",data:{hospId:u},success:function(t){if(t.date)promptUtil.alert({content:t.message,type:"alert"});else{t.scheduleList;D.parseDate(t.sysTime,t.regtMaxDays),$('[data-role="scrollUl"]').width((s+3)*(t.regtMaxDays+1))}}})},renderDoctor:function(t,e){var a=[],o="";return $.each(t,function(t,e){var r=[];e.schedualInfoDtoList&&$.each(e.schedualInfoDtoList,function(a,d){v[a]=d,timeHref="deptId="+h+"&doctorId="+e.drId+"&hospitaName="+y+"&regfee="+d.regfee+"&patientId= "+f+"&doctorName="+e.drName+"&doctorTime="+e.doctorTime+"&departmentName="+g,o=0==d.outStatus?'<a class="fr order_blue_btn" data-drname="'+e.drName+'" data-role="order-doctor" data-role="order_blue_btn" data-flag="'+d.timeFlag+'" data-drId="'+e.drId+'" data-regdate="'+d.outDate+'" data-ampm="'+d.ampmType+'" data-week="'+d.dateWeekAmPm+'" data-fee="'+d.regfee+'">挂号</a>':"1"==d.outStatus?'<a class="fr order_stop_btn" data-role="stop-doctor">停诊</a>':"2"==d.outStatus?'<a class="fr order_full_btn" data-role="full-doctor">约满</a>':'<a class="fr order_full_btn" data-role="full-doctor">暂未开放</a>',r.push('<p class="'+(t?"":"bor_bl")+'">'+d.dateWeekAmPm+"&nbsp;&nbsp;&nbsp;&nbsp;￥"+d.regfee+"元"+o+"</p>")}),a.push(['<div class="my_con '+(e.statuInfo?"":" my_con_arrow ")+'" data-drId="'+e.drId+'" data-role="doctorPage" data-drtype="'+e.drType+'" data-id="'+t+'">','<div class="my_con_pic"><img src="/common/image/'+e.imageId+'.htm" width="138" height="137"></div>','<div class="my_con_text">','<p class="t_name">'+(e.drName||"")+'<span class="t_name_o">'+(e.drLvlName||"")+"</span>"+(e.statuInfo?'<span class="fr '+("预约"==e.statuInfo?" o_b_b ":" o_g_b ")+'">'+(e.statuInfo||"")+"</span>":"")+"</p>",function(){return"1"==e.drType?'<p class="amount">预约量:'+e.regtAmt+" | 关注量:"+e.focusAmt+'</p><p class="goodat pad_r24">擅长:'+(e.skill||"暂无")+"</p>":'<p class="amount">预约量:'+e.regtAmt+"</p>"}(),"</div>","</div>"+(1==m?'<div class="date_detail">'+r.join("")+"</div>":"")].join(""))}),a.join("")},fetechDotor:function(t,e){$.ajax({url:"/hospital/queryScheduleByDept.htm",type:"POST",data:{hospId:u,deptId:h,count:l,start:t*l},success:function(t){t.code||($('[data-role="cancle-doing"]').addClass("none"),$('[data-role="none"]').css("display","none"),e(t.regdeptlist)),"1500"==t.code&&$('[data-role="none"]').css("display","block"),t.code&&"1500"!=t.code&&promptUtil.alert({content:t.message,type:"alert"})},complete:function(){$('[data-role="cancle-doing"]').addClass("none")}})},buildList:function(){taoguKit.scrollLoad({wrapper:$('[data-role="doctorList"]'),fetchDataFunc:D.fetechDotor,buildDataFunc:D.renderDoctor,pageSize:l,currPage:c})},buildListBySomeDay:function(){taoguKit.scrollLoad({wrapper:$('[data-role="doctorList"]'),fetchDataFunc:D.fetechDotorSomeDay,buildDataFunc:D.renderDoctor,pageSize:l,currPage:c})},fetechDotorSomeDay:function(t,e){$.ajax({url:"/hospital/queryScheduleBySpecDay.htm",type:"POST",data:{hospId:u,deptId:h,date:n,count:l,start:t*l},success:function(t){t.code||($('[data-role="cancle-doing"]').addClass("none"),t.schedualDepList.length?($('[data-role="none"]').css("display","none"),e(t.schedualDepList)):$('[data-role="none"]').css("display","block")),t.code&&"1500"!=t.code&&promptUtil.alert({content:t.message,type:"alert"})},complete:function(){$('[data-role="cancle-doing"]').addClass("none")}})},renderDoctorTime:function(t,e){$.ajax({url:"/queryNumberByTime",data:{hospId:u,deptId:h,doctorName:timeName,userId:null,patientId:f,time:t},type:"POST",success:function(t){if(!t.code){var e=[];e.push('<li class="reg_tips_title" data-role="DoctorTimeTitle">'+o+"</li>"),$.each(t.data.list,function(t,a){e.push('<li class="'+(a.count?"":"no_order")+'"><a href="/wechat/html/appointment/confirm?'+timeHref+'">'+a.startTime+"   剩余"+a.count+"</a></li>")}),e.push('<li data-role="cancleTime" class="reg_tops_cancle"><a>取消</a></li>'),$('[data-role="timePromptUl"]').html(e.join("")),$('[data-role="model"]').css({display:"block"}),$('[data-role="timePrompt"]').css({display:"block"})}}})},prevScroll:function(){s*$('[data-role="daysShow"]').length;b>0?($('[data-role="prevBtn"]').addClass("active"),$('[data-role="nextBtn"]').addClass("active"),b=b-3*s-3,b<=0&&($('[data-role="prevBtn"]').removeClass("active"),$('[data-role="nextBtn"]').addClass("active")),$('[data-role="scrollUl"]').css({"-webkit-transition-duration":"0.5s","-webkit-transform":"translateX("+-b+"px)"})):($('[data-role="prevBtn"]').removeClass("active"),$('[data-role="nextBtn"]').addClass("active"))},nextScroll:function(){var t=s*($('[data-role="daysShow"]').length-1);t-3*s>b?($('[data-role="prevBtn"]').addClass("active"),$('[data-role="nextBtn"]').addClass("active"),b=b+3*s+3,t-3*s<=b&&($('[data-role="prevBtn"]').addClass("active"),$('[data-role="nextBtn"]').removeClass("active")),$('[data-role="scrollUl"]').css({"-webkit-transition-duration":"0.5s","-webkit-transform":"translateX("+-b+"px)"})):($('[data-role="prevBtn"]').addClass("active"),$('[data-role="nextBtn"]').removeClass("active"))},parseDate:function(t,e){var a,o="",r={1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六",0:"星期日"};for(i=0;i<=e;i++)currTime=new Date(1*t),a=currTime.getFullYear()+"-"+(currTime.getMonth()+1)+"-"+currTime.getDate(),o+='<li data-role="daysShow" style="width:'+s+'px" data-date="'+a+'">'+(0==i?"今天":r[currTime.getDay()])+"<span>"+(currTime.getMonth()+1>10?currTime.getMonth()+1:"0"+(currTime.getMonth()+1))+"-"+(currTime.getDate()>9?currTime.getDate():"0"+currTime.getDate())+"</span></li>",t=864e5+1*t;e<=2&&($('[data-role="prevBtn"]').removeClass("active"),$('[data-role="nextBtn"]').removeClass("active")),$('[data-role="scrollUl"]').append(o)},getTiemList:function(){$('[data-role="timePrompt"]').html(" "),$('[data-role="cancle-doing"]').removeClass("none"),$.ajax({url:"/order/queryNumberResourcesByType.htm",type:"POST",data:{hospId:u,deptId:h,doctorId:d,numberBeginDate:e,numberEndDate:e,ampmType:a},success:function(t){if(t.code)t.code&&promptUtil.alert({content:t.message,type:"alert"});else{var e=[];e.push('<h2 class="reg_tips_title">'+o+'</h2><ul class="'+(t.list.length>5?"scroll":"")+'">'),$.each(t.list,function(t,a){var o="";o=p+"&timeSlot="+a.timeSlot+"&resourceId="+a.schedualId+"&numberType="+a.numberType,e.push('<li class="'+(0==a.numberRemaNum?"no_order":"")+'">',a.numberRemaNum>0?'<a href="'+o+'">':"",a.timeSlot+" 剩余"+a.numberRemaNum,a.numberRemaNum>0?"</a>":"","</li>")}),e.push('</ul><div class="reg_tops_cancle" data-role="cancel"><a href="javascript:;">取消</a></div>');$(window).height();$("#fade").css({display:"block"}).on("touchmove",function(t){t.preventDefault()}),$("#light").html(e.join("")),$("#light").show(),I=document.body.scrollTop,$("body").addClass("overflow_h").css("position","fixed").css("top",I*-1);var a=$("#light").height(),r=$("#light").find("li").length;$("#light").css("margin-top",-a/2),r>5&&$("#light").css("margin-top","-17rem")}},error:function(){},complete:function(){$('[data-role="cancle-doing"]').addClass("none")}})}};return{init:function(){D.renderDate(),D.buildList(),this.bindEve()},bindEve:function(){$('[data-role="prevBtn"]').on("tap",function(){D.prevScroll()}),$('[data-role="nextBtn"]').on("tap",function(){D.nextScroll()}),$("body").on("tap",'[data-role="daysShow"]',function(){return!$(this).hasClass("active")&&($('[data-role="cancle-doing"]').removeClass("none"),$('[data-role="doctorList"]').html(""),$(this).attr("data-all")?(m=0,D.buildList()):(m=1,n=$(this).data("date"),D.buildListBySomeDay()),$('[data-role="navChange"]').find('[data-role="daysShow"]').removeClass("active"),void $(this).addClass("active"))}),$("body").on("tap",'[data-role="doctorPage"]',function(t){var e="";1==$(this).data("drtype")?TaoGu.APP.Utility.Network.relocate("/wechat/html/doctor/home/?deptId="+h+"&doctorId="+$(this).attr("data-drId")+"&patientId="+f+"&hospId="+u+"&hospName="+encodeURIComponent(y)+"&deptName="+encodeURIComponent(g)):(e="hospId="+u+"&deptId="+h+"&doctorId="+$(this).attr("data-drId")+"&patientId="+f+"&hospName="+encodeURIComponent(y)+"&deptName="+encodeURIComponent(g)+"&patientId"+f,TaoGu.APP.Utility.Network.relocate("/wechat/html/hospital/office/home/index.html?"+e))}),$('[data-role="doctorList"]').on("click",'[data-role="order-doctor"]',function(){var n=($(this).data("id"),$(this).data("flag"));r=$(this).data("drname"),d=$(this).data("drid"),e=$(this).data("regdate"),a=$(this).data("ampm"),o=$(this).data("week"),t=$(this).data("fee"),p="/wechat/html/appointment/confirm/?hospId="+u+"&deptId="+h+"&doctorId="+d+"&date="+e+"&ampmtype="+a+"&regAmt="+t+"&hospitaName="+encodeURIComponent(y)+"&departmentName="+encodeURIComponent(g)+"&doctorName="+encodeURIComponent(r),n&&D.getTiemList()}),$('[data-role="timePromptUl"]').on("tap",'[data-role="cancleTime"]',function(){$('[data-role="model"]').css({display:"none"}),$('[data-role="timePrompt"]').css({display:"none"})}),$("body").on("tap",'[data-role="cancel"]',function(){$("#light").css("display","none"),$("#fade").css("display","none"),$("body").removeClass("overflow_h").removeAttr("style"),document.body.scrollTop=I})}}};b().init()}()},{}]},{},[1]);