requirejs.config({
    baseUrl: 'https://rawgit.com/force2008/animation/master/dist/'
});
requirejs(['animation.min1'],function(Animation){
	var end = document.getElementById('end');
		

	document.body.addEventListener('click',function(event){
		
	var endX = end.offsetLeft,
		startX = event.offsetX,
		startY = event.offsetY,
		start = document.createElement('div');

	start.className ='start';
	start.style.top = startY + 'px';
	start.style.left = startX + 'px';
	document.body.appendChild(start);
	var xLength = Math.floor((endX+startX))/2 - startX;
	var y = startY - document.body.scrollTop;
	var y2 =  end.offsetTop //+ document.body.scrollTop;
	console.log(startX,endX,xLength);
	var nextHalf = new Animation({
		from:0,
		to:1,
		duration:400,
		onupdate:function(event){
			start.style.top = (document.body.scrollTop+y2*event.value)+'px';
			start.style.left = (Math.floor((endX+startX))/2+Math.floor(event.percent*xLength))+'px';
		},
		onstop:function(){
			//start.style.position ='fixed'
		},
		animationMode:'Quad',
		timeFunction:'easeIn'
	})
	var half = new Animation({
		from:0,
		to:1,
		onupdate:function(event){
			start.style.left = (startX+Math.floor(event.percent*xLength))+'px';
			start.style.top = (y-y*event.value+document.body.scrollTop)+'px';
		},
		onstop:function(){
			nextHalf.start();
		},
		duration:400,
		animationMode:'Quad',
		timeFunction:'easeOut'
	})
		half.start();
})
	
})