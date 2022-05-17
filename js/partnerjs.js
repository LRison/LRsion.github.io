/*
* @Author: HP
* @Date:   2020-02-24 11:20:56
* @Last Modified by:   HP
* @Last Modified time: 2020-02-24 11:21:38
*/
/*
* @Author: HP
* @Date:   2020-02-19 10:37:41
* @Last Modified by:   HP
* @Last Modified time: 2020-02-19 10:44:45
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



$('.inputone').click(function(){
	$('.back').show();
	$('.listarrow').show()
})
$('.inputtwo').click(function(){
	$('.back').hide();
	$('.listarrow').hide()
})