/*
 * @description : javascript warehouse
 * @author   : koojohn(郭钊)
 * @date     : 2016-11-23
 */

/*
 * getClass (oParent,sClass)//获取class
 * getPos(ev)				//获取鼠标的x，y位置
 * myAddEvent(obj,ev,fu)	//事件绑定
 * elementStyle(obj,attr,setAttr)//两个参数是获取元素样式，三个参数是设置元素样式
 * placeholder (obj)		//模拟placeholder
 * cancelBubble()			//阻止事件冒泡
 * 
 * 
 */


//获取class
function getClass (oParent,sClass){
	var className = oParent.getElementsByTagName('*');
	var classNameArr = [];
	for (var i=0;i<className.length;i++) {
		if (className[i].className==sClass) {
			classNameArr.push(className[i]);
		}
	}
	return classNameArr;
}
//获取鼠标的x，y位置
function getPos(ev){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {x:ev.clientX + scrollLeft , y:ev.clientY + scrollTop}
}
//事件绑定
function myAddEvent(obj,ev,fu){
	if (obj.attachEvent) {
		obj.attachEvent('on'+ev,fu);
	} else{
		obj.addEventListener(ev,fu,false);
	}
}
//两个参数是获取元素样式，三个参数是设置元素样式
function elementStyle(obj,attr,setAttr){
	if (arguments.length === 2) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else{
			return getComputedStyle(obj,null)[attr];
		}
	} else if (arguments.length === 3) {
		return obj.style[attr] = setAttr;
	}
}

//模拟placeholder
function placeholder (obj) {
	obj.onfocus = function(){
		if (this.value == this.defaultValue) {
			this.value = '';
		}
	}
	obj.onblur = function(){
		if (this.value == '') {
			this.value = this.defaultValue;
		}
	}
}


/*
 * 阻止事件冒泡
 */

//得到事件
function getEvent(){
    if(window.event){
    	return window.event;
    }
    func=getEvent.caller;
    while(func!=null){
        var arg0=func.arguments[0];
        if(arg0){
            if((arg0.constructor==Event || arg0.constructor ==MouseEvent
                || arg0.constructor==KeyboardEvent)
                ||(typeof(arg0)=="object" && arg0.preventDefault
                && arg0.stopPropagation)){
                return arg0;
            }
        }
        func=func.caller;
    }
    return null;
}
//阻止冒泡
function cancelBubble(){
    var e=getEvent();
    if(window.event){
        //e.returnValue=false;//阻止自身行为
        e.cancelBubble=true;//阻止冒泡
    }else if(e.preventDefault){
        //e.preventDefault();//阻止自身行为
    	e.stopPropagation();//阻止冒泡
    }
}



