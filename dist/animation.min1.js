(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var tween = __webpack_require__(1);

		if(!Function.prototype.bind){
			Function.prototype.bind = function(){
				var func = this,obj = arguments[0]  ,argc = [].slice.call(arguments,1);
				return function(){
					[].push.apply(argc,arguments);
					return func.apply(obj,argc);
				}
			}
		}
		/**
		 * option 	动画参数onupdate必须传入，其实可以安需要传入，
		 *	 	from 初使量
		 *	 	to   变化理
		 *	    onupdate 回调函数
		 *	    onstop	动画结束时回调
		 *	 	duration	动画持续时间
		 *		interval	duration里间隔时间，如10的，setInterval值是10
		 *	 	animationMode 曲线模式
		 *						Linear
		 *						Quad
		 *						Cubic
		 *						Quart
		 *						Quint
		 *						Sine
		 *						Expo
		 *						Circ
		 *						Elastic
		 *						Back
		 *						Bounce
		 *		timeFunction
		 *						easeOut
		 *						easeIn
		 *							easeInOut
		 **/
		var Animation = function(options){
			var f = function(){return !0}
			this.from = options.from||0;
			this.to = options.to||1;
			this.change = Math.abs(this.to-this.from);
			this.onupdate = options.onupdate||f;
			this.onstop = options.onstop||f;
			this.interval = options.interval||10;
			this.duration = options.duration||1000;
			this.step = options.step||10;
			this.animationMode = options.animationMode||'Quad';
			this.timeFunction = options.timeFunction||'easeOut';
			
			this.func = ( this.animationMode=='Linear'?tween[this.animationMode]:tween[this.animationMode][this.timeFunction])
			
		}
		Animation.prototype.start = function(){
			var from = this.from,
				change = this.change,
				func = this.func,
				duration = this.duration,
				onupdate = this.onupdate,
				interval = this.interval,
				step = this.setp,
				time = 0;
				
			this.timer = setInterval(function(){
				var value = func(time,from,change,duration);
				onupdate({percent:time/duration,value:value});
				time += step;
				if(time>=duration){
					this.onstop({percent:time/duration,value:value});
					clearInterval(this.timer)
				}
			}.bind(this),interval)
		}
		Animation.prototype.stop = function(){
			clearInterval(this.timer);
		}
		
	module.exports = Animation;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
		/**
		 * t为时间变化数
		 * b为y值的初使值
		 * c为y值的变化量
		 * d为持续时间
		 **/
	var Tween = {
		    Linear: function(t,b,c,d){ return c*t/d + b; },
		    Quad: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return -c *(t/=d)*(t-2) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t + b;
		            return -c/2 * ((--t)*(t-2) - 1) + b;
		        }
		    },
		    Cubic: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c*((t=t/d-1)*t*t + 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t*t + b;
		            return c/2*((t-=2)*t*t + 2) + b;
		        }
		    },
		    Quart: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t*t*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return -c * ((t=t/d-1)*t*t*t - 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		            return -c/2 * ((t-=2)*t*t*t - 2) + b;
		        }
		    },
		    Quint: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t*t*t*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c*((t=t/d-1)*t*t*t*t + 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		            return c/2*((t-=2)*t*t*t*t + 2) + b;
		        }
		    },
		    Sine: {
		        easeIn: function(t,b,c,d){
		            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c * Math.sin(t/d * (Math.PI/2)) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		        }
		    },
		    Expo: {
		        easeIn: function(t,b,c,d){
		            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		        },
		        easeOut: function(t,b,c,d){
		            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if (t==0) return b;
		            if (t==d) return b+c;
		            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		        }
		    },
		    Circ: {
		        easeIn: function(t,b,c,d){
		            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		        }
		    },
		    Elastic: {
		        easeIn: function(t,b,c,d,a,p){
		            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
		            else var s = p/(2*Math.PI) * Math.asin (c/a);
		            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		        },
		        easeOut: function(t,b,c,d,a,p){
		            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
		            else var s = p/(2*Math.PI) * Math.asin (c/a);
		            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
		        },
		        easeInOut: function(t,b,c,d,a,p){
		            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
		            else var s = p/(2*Math.PI) * Math.asin (c/a);
		            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		        }
		    },
		    Back: {
		        easeIn: function(t,b,c,d,s){
		            if (s == undefined) s = 1.70158;
		            return c*(t/=d)*t*((s+1)*t - s) + b;
		        },
		        easeOut: function(t,b,c,d,s){
		            if (s == undefined) s = 1.70158;
		            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		        },
		        easeInOut: function(t,b,c,d,s){
		            if (s == undefined) s = 1.70158; 
		            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		        }
		    },
		    Bounce: {
		        easeIn: function(t,b,c,d){
		            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
		        },
		        easeOut: function(t,b,c,d){
		            if ((t/=d) < (1/2.75)) {
		                return c*(7.5625*t*t) + b;
		            } else if (t < (2/2.75)) {
		                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		            } else if (t < (2.5/2.75)) {
		                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		            } else {
		                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		            }
		        },
		        easeInOut: function(t,b,c,d){
		            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
		            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
		        }
		    }
		}
	module.exports = Tween;

/***/ }
/******/ ])
});
