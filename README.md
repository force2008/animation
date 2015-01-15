# animation

```javascript
	function $(selector){
		return document.querySelectorAll(selector)
	}
	var elm = document.getElementById(IDString);
	var collection = elm.getElementsByClassName(classes);
	var collection = elm.getElementsByTagName(tag);
	var elm = document.getElementById(IDString);
	var element = document.createElement(tagName);

	var collection = elm.getElementsByClassName('j-flag');
	var collection = elm.getElementsByClassName('j-flag z-flag');
	
	var element = document.createElement('ul');
	var element = document.createElement('li');
	var element = document.createElement('div');
	var element = document.createElement('span');
	var elm.innerHTML = '<ul>\
				<li class="item">1</li>\
				<li class="item">2</li>\
			     </ul>';
	var htmlString = '<ul>',
	    list=[{name:'jack',id:1},
	          {name:'tom',id:2},
	          {name:'mickey',id:2}];
	for(var i=0,l=list.length;i<l;i++){
	  htmlString += '<li><a href="/user/'+list[i].id+'">'+list[i].name+'</a></li>';
	}
	htmlString += '</ul>';
	elm.innerHTML = htmlString;
	
	var tpl ='<div class="item"><img class=" j-flag"/><div class="j-flag"></div></div>';
	var box = document.createElement('div');
	box.innerHTML = tp;
	var list = box.getElementsByClassName('j-flag');
	list[0].src= '/imgurl';
	list[1].innerText ='my name is netease'
	for(var i=0,l=collection.length;i<l;i++){
		collection[i];
	}
	
	function getElementsByClassName(elm,clazz){
		if(elm.getElementsByClassName){
			return elm.getElementsByClassName(clazz);
		} else{
			var list = elm.getElementsByTagName('*'),result=[];
			for(var i=0,l=list.length;i<l;i++){
				if((' '+ list[i].className+' ').indexOf(' '+clazz+' ')!=-1){
					result.push(list[i])
				}
			}
			return result;
		}
	}
	
	if(elm.addEventListener){
		...	
	}
	if(elm.getElementsByClassName){
		...	
	}
	
	function $(selector){
		return document.querySelectorAll('#id')
	}
	
	elm.querySelectorAll('.top .act,.foot .act')
	
	var dom = document.getElementById('dom');
	var liLiveList = dom.getElementsByTagName('li');
	var liNotLiveList = dom.querySelectorAll('li');
	
	var list = elm.querySelectorAll('#md');
	var list = elm.querySelectorAll('.md');
	var list = elm.querySelectorAll('.md div');
	var list = elm.querySelectorAll('#md .md div');
	var list = elm.querySelectorAll('.md div,.md-1 .act');



	$('add').onclick = function(){
		var li = document.createElement('li');
		li.innerHTML = ++count;
		dom.appendChild(li);
		log('liLiveList length :'+liLiveList.length);
		log('not LiveList length :'+liNotLiveList.length)
	}
```
 
 ```html
	<html>
		<head>
			<title>sample page</title>
		</head>
	<body>
		<p>hello world!</p>
	</body>
	</html>



	<div id="p">
		<div id="hello">
			hello world
		</div>
		<div id="dom">
			dom
		</div>
	</div>
	
	<html>
		<head>
			<meta charset="utf-8"/>
			<title>DOM实例</title>
		</head>
		<body>
			<!--文档开始-->
			<fieldset class="crtnd">
				<legend>图片操作：</legend>
				<input type="button" value="增加图片" />
			</fieldset>
		</body>
	</html>
```
```javascript

	function $(id){
		return document.getElementById(id);
	}
```	
	
