/*
* @Author: HP
* @Date:   2020-01-06 20:06:16
* @Last Modified by:   HP
* @Last Modified time: 2020-01-13 17:07:12
*/
//酒店·民宿
$('.hotel').mouseenter(function(event) {
	$('.hotelul').fadeToggle();
});
$('.hotel').mouseleave(function(event) {
	$('.hotelul').fadeToggle();
});
$('.hotelul').mouseenter(function(event) {
	$('.hotela').css('color', '#10b03b');
});
$('.hotelul').mouseleave(function(event) {
	$('.hotela').css('color', '#c0c0c0');
});
//商城
$('.store').mouseenter(function(event) {
	$('.storeul').fadeToggle();
});
$('.store').mouseleave(function(event) {
	$('.storeul').fadeToggle();
});
$('.storeul').mouseenter(function(event) {
	$('.storea').css('color', '#10b03b');
});
$('.storeul').mouseleave(function(event) {
	$('.storea').css('color', '#c0c0c0');
});
//社区
$('.community').mouseenter(function(event) {
	$('.communityul').fadeToggle();
});
$('.community').mouseleave(function(event) {
	$('.communityul').fadeToggle();
});
$('.community').mouseenter(function(event) {
	$('.communityaa').css('color', '#10b03b');
});
$('.community').mouseleave(function(event) {
	$('.communityaa').css('color', '#c0c0c0');
});
//旅游论坛
$('.travel').mouseenter(function(event) {
	$('.forum').fadeToggle();
	$('.communitya').css('color', '#10b03b');
});
$('.travel').mouseleave(function(event) {
	$('.forum').fadeToggle();
	$('.communitya').css('color', '#c0c0c0');
});

//头部导航栏搜索框
$('.searchbox').mouseenter(function(event) {

	$('.searchbox input').css({'width':'190px','padding':'0px 5px'});
});
$('.searchbox').mouseleave(function(event) {
	$('.searchbox input').css({'width':'0px','padding':'0px'});
});


function nowDate(){
	var myDate = new Date();//获取系统当前时间
	var years =myDate.getFullYear();//获取完整的年份
	var moth = myDate.getMonth()+1;//获取当前的月份
	var day = myDate.getDate();//获取当前日(1-31)
	var week = myDate.getDay();//获取当前星期X（0-6，0代表星期天）
	var hour = myDate.getHours();//获取当前小时数（0-23）；
	var min = myDate.getMinutes();//获取当前分钟数
	var second = myDate.getSeconds();//获取当前秒数（0-59）
	return years+"-"+moth+"-"+day+" "+hour+":"+min+":"+second+" 星期"+week;
}

$('.inputone').click(function(){
	$('.back').show();
	$('.listarrow').show()
})
$('.inputtwo').click(function(){
	$('.back').hide();
	$('.listarrow').hide()
})
