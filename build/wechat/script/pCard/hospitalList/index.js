!function t(e,r,a){function o(i,d){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!d&&c)return c(i,!0);if(n)return n(i,!0);throw new Error("Cannot find module '"+i+"'")}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return o(r?r:t)},u,u.exports,t,e,r,a)}return r[i].exports}for(var n="function"==typeof require&&require,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(t,e,r){!function(){var t=TaoGu.APP.Utility,e=t.Network.queryString("patientId"),r=t.Network.queryString("backto"),a=function(){var t={renderPage:function(t){var e=[];$.each(t.hosplist,function(a,o){e.push('<li><a data-hospid="'+o.hospId+'" data-role="linkHref" data-href="/wechat/html/card/noCard?patientId='+t.tmNumber+"&hospName="+o.hospName+"&hospId="+o.hospId+"&backto="+encodeURIComponent(r)+'">'+o.hospName+"</a></li>")}),$('[data-role="hospital_list"]').html(e.join(""))},fetchPage:function(){$.ajax({url:"/treatcard/queryHospitalsNoCard.htm ",type:"POST",data:{memberId:e},success:function(e){e.code||t.renderPage(e)}})}};return{init:function(){t.fetchPage(),this.bindEvent()},bindEvent:function(){$('[data-role="hospital_list"]').on("click",'[data-role="linkHref"]',function(){var t="EBAOWSGHGZYKDXDYFSYY000000000000"==$(this).data("hospid"),r=$(this).data("href");return t?(location.href=r,!1):void $.ajax({url:"/treatcard/queryCardsByHosp.htm",type:"POST",data:{hospId:$(this).data("hospid"),memberId:e},success:function(t){return 0==t.code?(1==t.medicalCardFlag&&(location.href=r),0==t.medicalCardFlag&&promptUtil.alert({content:"获取诊疗卡异常,请到医院窗口或自助机管理",type:"alert"}),!1):1500==t.code?(location.href=r,!1):void promptUtil.alert({content:t.message,type:"alert"})}})})}}};a().init()}()},{}]},{},[1]);