//自定义简单的路由功能
//
// @author: Lewin Huang:www.lewin123.xyz
//

function phyRouter(){
 this.routes = {};
 this.curUrl = '';

//route map
 this.route = function(path, callback){
  this.routes[path] = callback || this.def;
 };

 this.refresh = function(){
  this.curUrl = location.hash.slice(1) || '/';
  //执行route map中url对应的方法，如果没有注册：this.routes.
  this.routes.hasOwnProperty(this.curUrl)?this.routes[this.curUrl]():this.routes["/"]();
 };

 this.init = function(){
 	//when page loaded and url changed, refresh()
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
 }
}

// Usage detail
// condition: depende on JQuery
// Router========================================================================
// var R = new phyRouter();
// R.init();
// //var res = document.getElementById('body');
// var res = $('#body');

//  R.route('/', function() {
//  	//res.style.background = '#ff5155';
//  	//res.innerHTML = '这是首页，也是默认页面';
//  	res.load('html/default_central.html');
//  });
//  R.route('/analysis', function() {
//  	//res.style.background = 'orange';
//  	//res.innerHTML = '这是产品页';
//  	res.load('html/analysis.html');//depende on JQuery
//  	//res.innerHTML = '<object type="text/html" data="html/analysis.html"></object>'//is different with the above usage, css does not work;
//  });
//  R.route('/deviceManage', function() {
// 	 //res.style.background = 'black';
// 	 res.load('html/deviceManage.html');//depende on JQuery
//  });
//   R.route('/energyControll', function() {
// 	 //res.style.background = 'black';
// 	 res.load('html/energyControll.html');//depende on JQuery
//  });
//    R.route('/warningManage', function() {
// 	 //res.style.background = 'black';
// 	 res.load('html/warningManage.html');//depende on JQuery
//  });
 // Router=========================================================================