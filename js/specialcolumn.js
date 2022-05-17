/*
* @Author: HP
* @Date:   2020-03-23 22:40:27
* @Last Modified by:   HP
* @Last Modified time: 2020-06-30 20:11:41
*/
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

//分享到微博、微信
$('.share').mouseover(function() {
	$('.small-box1').show();
});
$('.share').mouseout(function() {
	$('.small-box1').hide();
});
$('.collect').mousemove(function() {
	$('.small-box2').show();
});
$(".collect").mouseout(function() {
	$('.small-box2').hide();
});

//头部固定栏
var height1=$('.nav').height();
$(window).scroll(function(event) {
	if($(window).scrollTop()>height1){
		$('.mainnav').css('top', '0px');
	}else{
		$('.mainnav').css('top', '30px');
	}
});

//鼠标移入出现锦囊作者
$('.author2-picture').mouseover(function() {
	$('.designation').show();
});
$('.author-picture3').mouseover(function() {
	$('.designation2').show();
});
//鼠标移出隐藏锦囊作者
$('.author2-picture').mouseout(function() {
	$('.designation').hide();
});
$('.author-picture3').mouseout(function() {
	$('.designation2').hide();
});

//分享到微博、微信
$('.share1').mouseover(function() {
	$('.share1 .small-box1').show();
});
$('.share1').mouseout(function() {
	$('.share1 .small-box1').hide();
});

