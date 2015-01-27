# animation

```javascript
	function $(selector){
		return document.querySelectorAll(selector)
	}
	function addCSS(cssText){
	    var style = document.createElement('style'),  //创建一个style元素
	        head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
	    style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
	    if(style.styleSheet){ //IE
	        style.styleSheet.cssText = cssText;
	    }else{ //w3c
	        var textNode = document.createTextNode(cssText);
	        style.appendChild(textNode);
	    }
	    head.appendChild(style); //把创建的style元素插入到head中    
	}
	
	var sheets = document.styleSheets;
	var ruleList = sheets[0].cssRules;
	for(var i=0,l=ruleList.length;i<l;i++){
		console.log(ruleList[i].selectorText,ruleList[i].cssText);
	}
	var css = '.p{background-color:red}';
	sheets[0].insertRule(css,1);
	
	function delCssRule(selector,styleSheet,index){
	        var sheets = styleSheet instanceof Array ? styleSheet : [styleSheet];
	        selector = selector.toUpperCase();
	        for(var i = 0,j = sheets.length; i < j;i++){
	            var rules = sheets[i]['cssRules'] || sheets[i]['rules'];   //ie为 rules
	            if(index >=0 && index < rules.length){
	                sheets[i].deleteRule ? sheets[i].deleteRule(index) : sheets[i].removeRule(index);
	            }else if(selector){
	               for(var m = 0,n = rules.length;m < n;m++){
	                    if(rules[m]['selectorText'].toUpperCase() == selector){
	                       sheets[i].deleteRule ? sheets[i].deleteRule(m) : sheets[i].removeRule(m); //可能存在多个一样的selector  全部删除
	                    }
	                }
	            }else{
	                return false;
	            }
	        }
	    };
	var addCSSRule = function(sheet, selector, rules){
	    //Backward searching of the selector matching cssRules
	    var index=sheet.cssRules.length-1;
	    for(var i=index; i>0; i--){
	      var current_style = sheet.cssRules[i];
	      if(current_style.selectorText === selector){
	        //Append the new rules to the current content of the cssRule;
	        rules=current_style.style.cssText + rules;
	        sheet.deleteRule(i);
	        index=i;
	      }
	    }
	    if(sheet.insertRule){
	      sheet.insertRule(selector + "{" + rules + "}", index);
	    }
	    else{
	      sheet.addRule(selector, rules, index);
	    }
	    return sheet.cssRules[index].cssText;
	  }
	  
	    for(var i=index; i>0; i--){
	      var current_style = sheet.cssRules[i];
	      if(current_style.selectorText === selector){
	        //Append the new rules to the current content of the cssRule;
	        rules=current_style.style.cssText + rules;
	        sheet.deleteRule(i);
	        index=i;
	      }
	    }
	var slt = $('slt');
	var option = new Option('全部','0');//new Option(text,value,defaultSelected,selected)
	slt.options.add(option);
	slt.options.remove(index);
	slt.options.length = 0;
	slt.selectedIndex = 1;
	slt.value;
	slt.options[slt.selectedIndex].text;
	slt.options[slt.selectedIndex].value;
	
	var form = document.getElementById('update_form'); 
	for(var i=0,l=form.elements.length;i<l;i++){ 
	  console.log(i+':'+form.elements[i].name); 
	  //do some validate logic
	  //can insert tip element next to form.elements[i]
	   switch(form.elements[i].tagName){
	     case 'INPUT':
	        valiateInput(form.elements[i])
	     	break;
	     case 'SELECT':
	     	validateSelect(form.elemens[i];
	     	break;
	     case 'TEXTAREA':
	     	validateTextarea(form.elemens[i];
	     	break;
	   }
	} 
	var list = [
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'},
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'},
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'},
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'},
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'},
        {cover:'http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140',playCount:123,name:'节奏歌单'}
      ];
	function onListLoaded(list){
	
	}
	
	var type = document.getElementById('type');
	type.className= 'type';
	
	elm.className = classes;
	function addClassName(elm,newClassName){
		if(elm.classList){
			elm.classList.add(newClassName);
		} else{
			var className = ' '+elm.className+' ';
			var classNameWithSpace = ' '+newClassName+' ';
			if(className.indexOf(classNameWithSpace)==-1){
				elm.className +=' '+newClassName;
			}
		}
	}
	
	addClassName(subNav,'show');
	function hasClassName(elm,newClassName){
		if(elm.classList){
			return elm.classList.contains(newClassName);
		else{
			var className = ' '+elm.className+' ';
			var classNameWithSpace = ' '+newClassName+' ';
			return className.indexOf(classNameWithSpace)==-1?false:true;
		}
	}
	hasClassName(subNav,'show');
	function removeClassName(elm,newClassName){
		if(elm.classList){
			return elm.classList.remove(newClassName);
		else{
			var className = ' '+elm.className+' ';
			var classNameWithSpace = ' '+newClassName+' ';
			className.replace(classNameWithSpace,'');
			elm.className = className;
		}
	}
	removeClassName(subNav,'show');
	elm.className = 'md-top';
	
	var attributes = elm.attributes;
	
	var type = doucment.getElementById('type');
	type.getAttribute('class');
	type.setAttribute('class','classes');
	type.removeAttribute('class');
	
	var list = elm.classList;
	
	var type = document.getElementById('type');
	type.classList.add('type');
	type.classList.remove('type');
	type.classList.contains('type');
	type.classList.toggle('type');
	
	if(type.classList.contains('type')){
	  type.classList.add('type');
	} else {
	  type.classList.remove('type');
	}
	
	elm.style.property = 'cssproperty';
	
	
	var box = document.getElementById('box');
	box.style.top ='50px';
	box.style.width ='200px';
	box.style.position ='absolute';
	box.style.backgroundColor ='red';
	
	var type = document.getElementById('type'); 
	type.classList.add('type');
	type.classList.remove('type'); 
	type.classList.contains('type'); 
	type.classList.toggle('type'); 

	<script>
	    var anim = document.getElementById('anim'); 
		  var play = document.getElementById('play'),timer,length=100;
      play.onclick = function(){
        if(timer){
          clearInterval(timer);
        }
        var stepped = 0; 
        timer = setInterval(function(){
                  var width = parseInt(anim.style.width)||100;
                  stepped += 10;
                  if(stepped>100){
                    clearInterval(timer);
                  } else{
                    anim.style.width = width+ 10 +'px';
                  }
                },20);
      }
      </script>
	  
	if(typeof HTMLElement!="undefined" && !HTMLElement.prototype.insertAdjacentElement)
	{
		 HTMLElement.prototype.insertAdjacentElement = function(where,parsedNode)
		 {
			switch (where)
			{
				case 'beforeBegin':
					this.parentNode.insertBefore(parsedNode,this)
					break;
				case 'afterBegin':
					this.insertBefore(parsedNode,this.firstChild);
					break;
				case 'beforeEnd':
					this.appendChild(parsedNode);
					break;
				case 'afterEnd':
					if (this.nextSibling) this.parentNode.insertBefore(parsedNode,this.nextSibling);
						else this.parentNode.appendChild(parsedNode);
					break;
			 }
		 }
	}
	var tpl = '<div class="cover">\
            <img class="j-flag"/> <span class="del j-flag"></span>\
            <div class="playinfo f-cb"><span class="playcount">&nbsp;</span><span class="j-flag">123232</span><span class="play">&nbsp;</span></div>\
          </div>\
          <a class="name j-flag"></a>';
	function onListLoaded(songList){
        var box = document.getElementById('listbox');
        box.innerHTML = '';
        for(var i=0,l=songList.length;i<l;i++){
          var LI = document.createElement('li');
          LI.innerHTML = tpl;
          LI.className = 'item';
          var nodes = LI.getElementsByClassName('j-flag');
          nodes[0].src = songList[i].cover;
          nodes[1].onclick = (function(item){
            return function(){
              deleteItem(item.id);
            }
          })(songList[i]);
          nodes[2].innerText = songList[i].playCount;
          nodes[3].innerText = songList[i].name;
          box.appendChild(LI);
        }
      }
      onListLoaded(list);
      
      Array.prototype.indexOf = function(callback){
        if(typeof callback=='function'){
          var list = this;
          for(var i=0,l=list.length;i<l;i++){
            if(callback(list[i])){
              return i;
            }
          }
          return -1
        }
      }
      
      function deleteItem(id){
        var index = list.indexOf(function(item){
          if(item.id==id){
            return true;
          }
        });
        if(index!=-1){
          list.splice(index,1);
          onListLoaded(list);
        }
      }
      
	var type = document.getElementById('type');
	var  p =  document.getElementById('p');
	var netease = document.createElement('span');
	netease.innerText = 'netease';
	p.replaceChild(netease,type);
	var oldChild = element.removeChild(child);
	var elm = document.getElementById(IDString);
	var oldChild = element.removeChild(child);
	function remove(elm){
		elm.parentNode.removeChild(elm);
	}
	var dom = $('dom'),count =3;
        var liLiveList = dom.getElementsByTagName('li');
        var liNotLiveList = dom.querySelectorAll('li');
        $('add').onclick = function(){
            var li = document.createElement('li');
            li.innerHTML = ++count;
            dom.appendChild(li);
            log('liLiveList length :'+liLiveList.length);
            log('not LiveList length :'+liNotLiveList.length)
        }
	elm.innerHTML = '<img src="a.png"/>';
	elm.innerHTML = '';
	elm.innerHTML += '';
	p.innerHTML = '<span> this's DOM </span>';
	var collection = elm.getElementsByClassName(classes);
	var collection = elm.getElementsByTagName(tag);
	var elm = document.getElementById(IDString);
	var element = document.createElement(tagName);
	HTMLElement.prototype.__defineGetter__("innerText", function () { 
	return this.textContent; 
	}) 
	HTMLElement.prototype.__defineSetter__("innerText", function(s) { 
		this.textContent = s; 
	}) 
	
	elm.innerHTML = '<img src="a.png"/>'; 
	elm1.textContent = '<img src="a.png"/>';
	
	var insertedElement = parentElement.insertBefore(newElement, referenceElement);
	
	var oElement = elm.insertAdjacentElement(sWhere, oElement);
	
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

	<html>
	<head>
	<mata charset="utf-8"/>
	<link href="/css/style.css"/>
	</head>
	<body>
		<p>
		hello,<span>mooc</span> users
		</p>
		<div>
			<img src="/images/user.jpg"/>
		</div>
	</body>
	</html>
	<span style="top:50px;width:200px;background-color:red;">mooc</span>
	<div id="anim" style="width:100px;background:red">&nbsp;</div> 
    	<input type="button" value="开始动画" id="play"/>
    
    
	<!-- beforebegin -->
	<p>
	<!-- afterbegin -->
	foo
	<!-- beforeend -->
	</p>
	<!-- afterend -->

	<div id="p">
		<div id="hello">
			hello world
		</div>
		<div id="dom">
			dom
		</div>
	</div>
	<div class="m-tlist m-tlist-lged" id="subnav">
		<ul class="f-cb">
			<li>...</li>
			<li>...</li>
			<li>...</li>
			<li>...</li>
		</ul>
	</div>

	<div class="m-tlist m-tlist-lged" id="subnav" style="display:none">
	...
	</div>
	<div class="m-tlist m-tlist-lged" id="subnav" style="display:block">
		...
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
	<li class="item">
	<div class="cover">
            <img src="http://p4.music.126.net/UqxHc5LgqWruxrkwKU8OOA==/7842816441048728.jpg?param=140y140" class="j-flag"/> <span class="del j-flag"></span>
            <div class="playinfo f-cb"><span class="playcount">&nbsp;</span><span class="j-flag">123232</span><span class="play">&nbsp;</span></div>
          </div>
          <a class="name j-flag">[私藏] 稀有极品节奏 Vol.31</a>
        </li>
	<div id="p">
		<ul id="dom" >
			<li class="j-flag">1</li>
			<li >2</li>
			<li class="j-flag">3</li>
		</ul>
		<input value="添加节点" type="button" id="add"/>
	</div>
	
	<select id="slt"> <option>1</option><option>2</option></select>
	
	<div class="classes"><div>
```
```javascript

	function $(id){
		return document.getElementById(id);
	}
```	
	
