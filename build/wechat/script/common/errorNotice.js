!function r(o,t,n){function e(a,s){if(!t[a]){if(!o[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=t[a]={exports:{}};o[a][0].call(c.exports,function(r){var t=o[a][1][r];return e(t?t:r)},c,c.exports,r,o,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)e(n[a]);return e}({1:[function(r,o,t){o.exports=function(r,o){$("body").empty(),$("body").html('<div class="icon"></div><div class="words-outer"><div class="words-inner">'+(r?r:"哎呀，页面走丢了，我们正在努力寻找，您可以")+'</div></div><div class="button-outer"><a class="button goBack'+(o?"none":"")+'" href="javascript:history.go(-1)">返回</a><a class="button" href="javascript:window.reload">重新加载</a></div>')}},{}]},{},[1]);