!function t(e,i,r){function o(s,n){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!n&&l)return l(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=i[s]={exports:{}};e[s][0].call(d.exports,function(t){var i=e[s][1][t];return o(i?i:t)},d,d.exports,t,e,i,r)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,i){var r=function(){var t=TaoGu.APP.Utility,e=t.Network.queryString("mobile"),i=t.Network.queryString("backto"),r=t.Network.queryString("go"),o={$phoneNo:$('[data-role="phoneNo"]'),$msg:$('[data-role="msg"]'),$btnMsg:$('[data-role="btnMsg"]'),$password:$('[data-role="password"]'),$btn:$('[data-role="btn"]'),btnDisabled:!0,validAll:function(){var t=!0,e=$.trim(this.$phoneNo.val()),i=$.trim(this.$msg.val()),r=$.trim(this.$password.val());return t&&!taoguKit.valid.mobile(e)&&(t=!1),t&&!taoguKit.valid.passwordFormat(r)&&(t=!1),t&&!taoguKit.valid.msgCode(i)&&(t=!1),t},validPwdVal:function(){var t=$.trim(this.$password.val());return taoguKit.valid.passwordObj(t)},bindEvt:function(){$('[data-role="msg"]').attr("disabled",!0).addClass("disabled").val("");this.$phoneNo.add(this.$msg).add(this.$password).on("input",function(t){var e=this;e.validAll()?(e.$btn.removeClass("disabled").removeAttr("disabled"),e.btnDisabled=!1):(e.$btn.addClass("disabled").attr("disabled",!0),e.btnDisabled=!0)}.bind(this)),this.$btnMsg.on("tap",function(t){return!this.lock&&(taoguKit.valid.mobile($.trim(this.$phoneNo.val()))?(this.lock=!0,void $.ajax({url:"/security/smscoderequest.htm",data:{phoneNo:this.$phoneNo.val(),type:3},type:"POST",success:function(e){if(e.code)return promptUtil.alert({content:e.message,type:"alert"}),!1;$('[data-role="msg"]').removeAttr("disabled").removeClass("disabled"),$(t.target).attr("disabled",!0).css("color","#484747");var i=59,r=$(t.target).val(),o=setInterval(function(){i>=1?$(t.target).val("重新获取 "+i--+"s"):(clearInterval(o),$(t.target).val(r).removeAttr("style").removeAttr("disabled"))}.bind(this),1e3)}.bind(this),complete:function(){this.lock=!1}.bind(this)})):(promptUtil.toast("输入手机格式有误，请输入正确手机号"),!1))}.bind(this)),this.$btn.on("click",function(t){if(this.btnDisabled)return!1;if(this.lock)return!1;var e=this.validPwdVal();if(!e.ret)return promptUtil.alert({content:e.message,type:"alert"}),!1;var a=taoguKit.valid.getMsgCode($.trim(o.$phoneNo.val()),$.trim(o.$msg.val()));return a.ret?(this.lock=!0,void $.ajax({url:"/user/updatePhoneNo.htm",type:"POST",data:{phoneNo:o.$phoneNo.val(),password:window.MD5(this.$password.val())},success:function(t){t.code?promptUtil.alert({content:t.message,type:"alert"}):(promptUtil.toast("更换手机号成功!"),i?location.href=i:r?$(document).trigger("loginKit_login"):history.go(-1))},complete:function(){this.lock=!1}.bind(this)})):(promptUtil.toast(a.message),!1)}.bind(this))}};return{init:function(){$('[data-role="mobile"]').html($('[data-role="mobile"]').html().replace(/#mobile#/,e)),o.bindEvt()}}}();r.init()},{}]},{},[1]);