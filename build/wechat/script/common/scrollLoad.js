!function t(r,e,i){function n(c,s){if(!e[c]){if(!r[c]){var l="function"==typeof require&&require;if(!s&&l)return l(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}var u=e[c]={exports:{}};r[c][0].call(u.exports,function(t){var e=r[c][1][t];return n(e?e:t)},u,u.exports,t,r,e,i)}return e[c].exports}for(var o="function"==typeof require&&require,c=0;c<i.length;c++)n(i[c]);return n}({1:[function(t,r,e){!function(t){function r(){}function e(){var t=new r;return t.constructor=r,t.init.apply(t,arguments)}r.prototype={init:function(t){if(!(t&&t.wrapper&&t.fetchDataFunc&&t.buildDataFunc))throw new Error("Not enough params!");this.fetchDataFunc=t.fetchDataFunc,this.buildDataFunc=t.buildDataFunc,this.scroller=t.scroller||document,this.wrapper=t.wrapper,this.pageSize=t.pageSize||20,this.currPage=t.currPage||0,this.scrollerParent=this.scroller===document?document.body:$(this.scroller).get(0),this.scrollAreaHeight=this.scroller===document?document.documentElement.clientHeight:this.scroller.get(0).clientHeight,this.lock=!1,this.end=!1,this.evtBind(),this.scrollLoader()},evtBind:function(){$(this.scroller).off("scroll").on("scroll",this.scrollLoader.bind(this))},scrollLoader:function(){if(this.end)return!1;if(this.scrollAreaHeight=this.scroller===document?document.documentElement.clientHeight:this.scroller.get(0).clientHeight,this.scrollerParent.scrollHeight-this.scrollerParent.scrollTop-this.scrollAreaHeight<this.scrollAreaHeight/2){if(this.lock)return!1;this.lock=!0,this.asyncLoad()}},asyncLoad:function(){this.fetchDataFunc(this.currPage,function(t){return t=t||[],this.appendList(t,this.currPage),this.lock=!1,t.length<this.pageSize?(this.end=!0,!1):void this.currPage++}.bind(this))},appendList:function(t,r){$(this.wrapper).append(this.buildDataFunc(t,r))}},"object"!=typeof window.taoguKit&&(window.taoguKit={}),window.taoguKit.scrollLoad=e}(window)},{}]},{},[1]);