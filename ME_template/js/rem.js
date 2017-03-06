/*
 * @description : javaScript recalc_@_clientWidth
 * 				: reset_@_font-size
 * @author   : koojohn(郭钊)
 * @date     : 2016-08-22
 * 移动端rem的使用方法 : PS_@_在320px屏幕下开发:rem == 100px
 */
(function(){
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function (){
		var cWidth = document.documentElement.clientWidth || document.body.clientWidth;
		if (!cWidth) return;
		document.documentElement.style.fontSize = 200 * (cWidth / 640) + 'px';
	};
	if (!document.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
})();























