!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define(n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var u=e[r]={exports:{},id:r,loaded:!1};return t[r].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r=e(1);Function.prototype.bind||(Function.prototype.bind=function(){var t=this,n=arguments[0],e=[].slice.call(arguments,1);return function(){return[].push.apply(e,arguments),t.apply(n,e)}});var u=function(t){var n=function(){return!0};this.from=t.from||0,this.to=t.to||1,this.change=Math.abs(this.to-this.from),this.onupdate=t.onupdate||n,this.onstop=t.onstop||n,this.duration=t.duration||1e3,this.animationMode=t.animationMode||"Quad",this.timeFunction=t.timeFunction||"easeOut",this.func="Linear"==this.animationMode?r[this.animationMode]:r[this.animationMode][this.timeFunction]};u.prototype.start=function(){var t=this.from,n=this.change,e=this.func,r=this.duration,u=this.onupdate,a=0;this.timer=setInterval(function(){var i=e(a,t,n,r);u({percent:a/r,value:i}),a+=10,a>=r&&(this.onstop({percent:a/r,value:i}),clearInterval(this.timer))}.bind(this),10)},u.prototype.stop=function(){clearInterval(this.timer)},t.exports=u},function(t){var n={Linear:function(t,n,e,r){return e*t/r+n},Quad:{easeIn:function(t,n,e,r){return e*(t/=r)*t+n},easeOut:function(t,n,e,r){return-e*(t/=r)*(t-2)+n},easeInOut:function(t,n,e,r){return(t/=r/2)<1?e/2*t*t+n:-e/2*(--t*(t-2)-1)+n}},Cubic:{easeIn:function(t,n,e,r){return e*(t/=r)*t*t+n},easeOut:function(t,n,e,r){return e*((t=t/r-1)*t*t+1)+n},easeInOut:function(t,n,e,r){return(t/=r/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n}},Quart:{easeIn:function(t,n,e,r){return e*(t/=r)*t*t*t+n},easeOut:function(t,n,e,r){return-e*((t=t/r-1)*t*t*t-1)+n},easeInOut:function(t,n,e,r){return(t/=r/2)<1?e/2*t*t*t*t+n:-e/2*((t-=2)*t*t*t-2)+n}},Quint:{easeIn:function(t,n,e,r){return e*(t/=r)*t*t*t*t+n},easeOut:function(t,n,e,r){return e*((t=t/r-1)*t*t*t*t+1)+n},easeInOut:function(t,n,e,r){return(t/=r/2)<1?e/2*t*t*t*t*t+n:e/2*((t-=2)*t*t*t*t+2)+n}},Sine:{easeIn:function(t,n,e,r){return-e*Math.cos(t/r*(Math.PI/2))+e+n},easeOut:function(t,n,e,r){return e*Math.sin(t/r*(Math.PI/2))+n},easeInOut:function(t,n,e,r){return-e/2*(Math.cos(Math.PI*t/r)-1)+n}},Expo:{easeIn:function(t,n,e,r){return 0==t?n:e*Math.pow(2,10*(t/r-1))+n},easeOut:function(t,n,e,r){return t==r?n+e:e*(-Math.pow(2,-10*t/r)+1)+n},easeInOut:function(t,n,e,r){return 0==t?n:t==r?n+e:(t/=r/2)<1?e/2*Math.pow(2,10*(t-1))+n:e/2*(-Math.pow(2,-10*--t)+2)+n}},Circ:{easeIn:function(t,n,e,r){return-e*(Math.sqrt(1-(t/=r)*t)-1)+n},easeOut:function(t,n,e,r){return e*Math.sqrt(1-(t=t/r-1)*t)+n},easeInOut:function(t,n,e,r){return(t/=r/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+n:e/2*(Math.sqrt(1-(t-=2)*t)+1)+n}},Elastic:{easeIn:function(t,n,e,r,u,a){if(0==t)return n;if(1==(t/=r))return n+e;if(a||(a=.3*r),!u||u<Math.abs(e)){u=e;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(e/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin(2*(t*r-i)*Math.PI/a))+n},easeOut:function(t,n,e,r,u,a){if(0==t)return n;if(1==(t/=r))return n+e;if(a||(a=.3*r),!u||u<Math.abs(e)){u=e;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(e/u);return u*Math.pow(2,-10*t)*Math.sin(2*(t*r-i)*Math.PI/a)+e+n},easeInOut:function(t,n,e,r,u,a){if(0==t)return n;if(2==(t/=r/2))return n+e;if(a||(a=.3*r*1.5),!u||u<Math.abs(e)){u=e;var i=a/4}else var i=a/(2*Math.PI)*Math.asin(e/u);return 1>t?-.5*u*Math.pow(2,10*(t-=1))*Math.sin(2*(t*r-i)*Math.PI/a)+n:u*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*r-i)*Math.PI/a)*.5+e+n}},Back:{easeIn:function(t,n,e,r,u){return void 0==u&&(u=1.70158),e*(t/=r)*t*((u+1)*t-u)+n},easeOut:function(t,n,e,r,u){return void 0==u&&(u=1.70158),e*((t=t/r-1)*t*((u+1)*t+u)+1)+n},easeInOut:function(t,n,e,r,u){return void 0==u&&(u=1.70158),(t/=r/2)<1?e/2*t*t*(((u*=1.525)+1)*t-u)+n:e/2*((t-=2)*t*(((u*=1.525)+1)*t+u)+2)+n}},Bounce:{easeIn:function(t,e,r,u){return r-n.Bounce.easeOut(u-t,0,r,u)+e},easeOut:function(t,n,e,r){return(t/=r)<1/2.75?7.5625*e*t*t+n:2/2.75>t?e*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?e*(7.5625*(t-=2.25/2.75)*t+.9375)+n:e*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOut:function(t,e,r,u){return u/2>t?.5*n.Bounce.easeIn(2*t,0,r,u)+e:.5*n.Bounce.easeOut(2*t-u,0,r,u)+.5*r+e}}};t.exports=n}])});