!function t(e,a,r){function i(s,l){if(!a[s]){if(!e[s]){var o="function"==typeof require&&require;if(!l&&o)return o(s,!0);if(d)return d(s,!0);throw new Error("Cannot find module '"+s+"'")}var n=a[s]={exports:{}};e[s][0].call(n.exports,function(t){var a=e[s][1][t];return i(a?a:t)},n,n.exports,t,e,a,r)}return a[s].exports}for(var d="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,a){var r=function(){var t=TaoGu.APP.Utility,e=(t.Network.queryString("backto"),t.Network.queryString("go"),""),a=!1,r={$name:$('[data-role="name"]'),$gender:$('[data-role="gender"]'),$cardNo:$('[data-role="cardNo"]'),$addr:$('[data-role="addr"]'),$phoneNo:$('[data-role="phoneNo"]'),$msg:$('[data-role="msg"]'),$btnMsg:$('[data-role="btnMsg"]'),$password:$('[data-role="password"]'),$rule:$('[data-role="rule"]'),$btn:$('[data-role="btn"]'),$mockGender:$('[data-role="mockGender"]'),btnDisabled:!0,accessRule:!1,preValidAll:function(){var t=!0,e=$.trim(this.$name.val()),a=$.trim(this.$gender.filter('[checked="checked"]').val()),r=$.trim(this.$cardNo.val()),i=$.trim(this.$addr.val()),d=$.trim(this.$phoneNo.val()),s=$.trim(this.$msg.val()),l=$.trim(this.$password.val()),o=this.accessRule;return t&&!e.length&&(t=!1),t&&!a.length&&(t=!1),t&&!r.length&&(t=!1),t&&!i.length&&(t=!1),t&&!d.length&&(t=!1),t&&!l.length&&(t=!1),t&&!s.length&&(t=!1),t&&!o&&(t=!1),t},validAll:function(){var t=!0,e=$.trim(this.$name.val()),a=$.trim(this.$gender.filter('[checked="checked"]').val()),i=$.trim(this.$cardNo.val()),d=$.trim(this.$addr.val()),s=$.trim(this.$phoneNo.val()),l=$.trim(this.$msg.val()),o=$.trim(this.$password.val()),n=this.accessRule;if(t&&!taoguKit.valid.userName(e)&&(promptUtil.toast("姓名格式错误"),t=!1),t&&!a.length&&(promptUtil.toast("请选择性别格式错误"),t=!1),t&&!taoguKit.valid.idCard(i)&&(promptUtil.toast("身份证格式错误"),t=!1),t&&!taoguKit.valid.addr(d)&&(promptUtil.toast("地址最大长度为25"),t=!1),t&&!taoguKit.valid.mobile(s)&&(promptUtil.toast("电话格式错误"),t=!1),t&&!taoguKit.valid.passwordFormat(o)&&(promptUtil.toast("请输入正确的密码格式"),t=!1),t&&!taoguKit.valid.msgCode(l)&&(promptUtil.toast("请输入正确的验证码"),t=!1),t&&taoguKit.valid.msgCode(l)){var c=taoguKit.valid.getMsgCode($.trim(r.$phoneNo.val()),$.trim(r.$msg.val()));if(!c.ret)return promptUtil.toast(c.message),!1}return t&&!n&&(t=!1),t},RegSubmit:function(){return!this.lock&&(this.lock=!0,void $.ajax({url:"/security/register.htm",type:"POST",data:{chatId:loginUtil.getWxOpenId(),name:$.trim(r.$name.val()),gender:r.$gender.filter('[checked="checked"]').val(),cardNo:$.trim(r.$cardNo.val()),addr:$.trim(r.$addr.val()),phoneNo:$.trim(r.$phoneNo.val()),password:window.MD5(r.$password.val()),msg:$.trim(r.$msg.val())},success:function(t){t.code?promptUtil.alert({content:t.message,type:"alert"}):(e=t.memberId,a=!0,promptUtil.alert({content:"恭喜您注册成功，请点击返回跳转至前一页"}),$('[data-role="btnMsg"]').attr("disabled",!0).addClass("disabled").css("color","#484747"),$('[data-role="name"]').attr("readonly",!0),$('[data-role="gender"]').attr("readonly",!0),$('[data-role="cardNo"]').attr("readonly",!0),$('[data-role="addr"]').attr("readonly",!0),$('[data-role="phoneNo"]').attr("readonly",!0),$('[data-role="msg"]').attr("readonly",!0),$('[data-role="password"]').attr("readonly",!0),$('[data-role="btn"]').attr("disabled",!0).addClass("disabled"))},complete:function(){this.lock=!1}.bind(this)}))},bindEvt:function(){$('[data-role="msg"]').attr("disabled",!0).addClass("disabled").val("");this.$name.add(this.$cardNo).add(this.$addr).add(this.$phoneNo).add(this.$msg).add(this.$password).on("input",function(t){var e=this;return!a&&(e.preValidAll()?(e.$btn.removeClass("disabled").removeAttr("disabled"),e.btnDisabled=!1):(e.$btn.addClass("disabled").attr("disabled",!0),e.btnDisabled=!0),void($(t.target).data("role")==e.$cardNo.data("role")&&taoguKit.valid.idCard($(t.target).val())&&18==$(t.target).val().length&&(this.$mockGender.removeClass("active").find('[data-role="gender"]').removeAttr("checked"),this.$gender.filter('[value="'+["2","1"][$(t.target).val().substr(-2,1)%2]+'"]').attr("checked","checked").closest('[data-role="mockGender"]').addClass("active"))))}.bind(this)),this.$mockGender.on("click",function(t){return!a&&(this.lastGenderDom&&this.lastGenderDom.removeClass("active").find('[data-role="gender"]').removeAttr("checked"),$(t.target).closest("span").addClass("active").find('[data-role="gender"]').attr("checked","checked"),void(this.lastGenderDom=$(t.target).closest("span")))}.bind(this)),this.$gender.on("change",function(t){return!a&&void(this.validAll()?(this.$btn.removeClass("disabled").removeAttr("disabled"),this.btnDisabled=!1):(this.$btn.addClass("disabled").attr("disabled",!0),this.btnDisabled=!0))}.bind(this)),this.$rule.on("click",function(t){return!a&&(this.accessRule=$(t.target).closest('[data-role="rule"]').toggleClass("active").hasClass("active"),void(this.preValidAll()?(this.$btn.removeClass("disabled").removeAttr("disabled"),this.btnDisabled=!1):(this.$btn.addClass("disabled").attr("disabled",!0),this.btnDisabled=!0)))}.bind(this)),this.$btnMsg.on("click",function(t){return!a&&(this.lock||!taoguKit.valid.mobile($.trim(this.$phoneNo.val()))?(promptUtil.toast("输入手机格式有误，请输入正确手机号"),!1):(this.lock=!0,void $.ajax({url:"/security/smscoderequest.htm",data:{phoneNo:$.trim(this.$phoneNo.val()),type:1},type:"POST",success:function(e){if(e.code)return promptUtil.alert({content:e.message,type:"alert"}),!1;$('[data-role="msg"]').removeAttr("disabled").removeClass("disabled"),$(t.target).attr("disabled",!0).css("color","#484747");var a=59,r=$(t.target).val(),i=setInterval(function(){a>=1?$(t.target).val("重新获取 "+a--+"s"):(clearInterval(i),$(t.target).val(r).removeAttr("style").removeAttr("disabled"))}.bind(this),1e3)}.bind(this),complete:function(){this.lock=!1}.bind(this)})))}.bind(this)),this.$btn.on("click",function(t){return!a&&!this.btnDisabled&&void(r.validAll()&&r.RegSubmit())}.bind(this))}};return{init:function(){r.bindEvt()}}}();r.init()},{}]},{},[1]);