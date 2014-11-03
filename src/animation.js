var tween = require('./tween');

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