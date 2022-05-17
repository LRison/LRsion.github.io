/*
* @Author: HP
* @Date:   2020-01-09 10:09:31
* @Last Modified by:   HP
* @Last Modified time: 2020-01-31 17:32:07
*/
//头部轮播图
var timer;
var number=0;
function go(){
	timer=setInterval(function(){
		number++;
		if(number==0||number==5){
		$('.text-on-picture1').show();
		$('.text-on-picture2').hide();
		$('.text-on-picture3').hide();
		$('.text-on-picture4').hide();
		$('.text-on-picture5').hide();
	}
	else if(number==1||number>5){
		$('.text-on-picture2').show();
		$('.text-on-picture1').hide();
		$('.text-on-picture3').hide();
		$('.text-on-picture4').hide();
		$('.text-on-picture5').hide();
	}
	else if(number==2){
		$('.text-on-picture3').show();
		$('.text-on-picture1').hide();
		$('.text-on-picture2').hide();
		$('.text-on-picture4').hide();
		$('.text-on-picture5').hide();
	}
	else if(number==3){
		$('.text-on-picture4').show();
		$('.text-on-picture1').hide();
		$('.text-on-picture2').hide();
		$('.text-on-picture3').hide();
		$('.text-on-picture5').hide();
	}
	else if(number==4){
		$('.text-on-picture5').show();
		$('.text-on-picture1').hide();
		$('.text-on-picture2').hide();
		$('.text-on-picture3').hide();
		$('.text-on-picture4').hide();
	}
		if(number>5){
			number=0;
			$('.header ul').css('left', -100*number+'%');
			number=1;
		}
		$('.header ul').animate({'left': -100*number+'%'})
	},1000)

}
go();

$('.header').hover(function(){
	clearInterval(timer);
},function() {
	go();
});

//头部固定栏
var height1=$('.header').height()+$('.ad').height()+$('.recommend').height()*1/2;
$(window).scroll(function(event) {
	if($(window).scrollTop()>height1){
		$('.head-fixing-bar').show()
	}else{
		$('.head-fixing-bar').hide();
	}
});
//鼠标点击箭头翻转
$('.fixingbar-trips').click(function(event) {
	$('.icon-xiangxiajiantou').animate({'transform':'rotate(180deg)'});
});
$('.fixingbar-trips').click(function(event) {
	/* Act on the event */
});


//侧边栏
$(window).scroll(function(event) {
	if($(window).scrollTop()>$('.header').height()){
		$('.aside').show()
	}else{
		$('.aside').hide()
	}
});

$('.returntop').mouseenter(function(event) {
	$('.returntopicon').css('animation', 'shake 0.4s');
	$('.returntop a').css('color', '#ffffff');
	$('.returntopicon').css('background-position', '-28px 0px');
});
$('.returntop').mouseleave(function(event) {
	$('.returntopicon').css('animation', '');
	$('.returntop a').css('color', '#b2b2b2');
	$('.returntopicon').css('background-position', '0px 0px');
});

$('.scan-download').mouseenter(function(event) {
	$('.scan-download-icon').css('animation', 'shake 0.4s');
	$('.scan-download a').css('color', '#ffffff');
	$('.scan-download-icon').css('background-position', '-28px -24px');
	$('.QR-code').show();
});
$('.scan-download').mouseleave(function(event) {
	$('.scan-download-icon').css('animation', '');
	$('.scan-download a').css('color', '#b2b2b2');
	$('.scan-download-icon').css('background-position', '0px -24px');
	$('.QR-code').hide();
});

$('.opinion').mouseenter(function(event) {
	$('.optionicon').css('animation', 'shake 0.4s');
	$('.opinion a').css('color', '#ffffff');
	$('.optionicon').css('background-position', '-28px -62px');
});
$('.opinion').mouseleave(function(event) {
	$('.optionicon').css('animation', '');
	$('.opinion a').css('color', '#b2b2b2');
	$('.optionicon').css('background-position', '0px -62px');
});


//轮播图左右按钮
$('.headerleft').click(function(event) {
	number--;
	if(number<0){
		number=5;
		$('.header ul').css('left', -100*number+'%');
		number=4;
	}
	$('.header ul').animate({'left':-100*number+'%'})
});

$('.headerright').click(function(event) {
	number++;
	if(number>5){
		number=0;
		$('.header ul').css('left', -100*number+'%');
		number=1;
	}
	$('.header ul').animate({'left':-100*number+'%'})
});

//轮播图上三个连在一起的输入框
$('.special-price-hotel').click(function(event) {
	$('.quicksearchbottom1').show();
	$('.quicksearchbottom2').hide();
	$('.quicksearchbottom3').hide();
	$('.make-journey').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.strategy').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.special-price-hotel').css('background-image', 'linear-gradient(90deg,rgba(83,144,250,.8),rgba(95,126,248,.8))');

});

$('.strategy').click(function(event) {
	$('.quicksearchbottom2').show();
	$('.quicksearchbottom1').hide();
	$('.quicksearchbottom3').hide();
	$('.special-price-hotel').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.make-journey').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.strategy').css('background-image', 'linear-gradient(90deg,rgba(38,208,181,.8),rgba(6,204,199,.8))');
});

$('.make-journey').click(function(event) {
	$('.quicksearchbottom3').show();
	$('.quicksearchbottom2').hide();
	$('.quicksearchbottom1').hide();
	$('.special-price-hotel').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.strategy').css('background-image', 'linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75))');
	$('.make-journey').css('background-image', 'linear-gradient(90deg,rgba(38,208,181,.8),rgba(6,204,199,.8))');
});

//今日推荐
$('.recmain1').mouseenter(function(event) {
	$('.p1').css('color', '#3a9257');
	$('.words1').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain1').mouseleave(function(event) {
	$('.p1').css('color', '#333333');
	$('.words1').css('box-shadow', 'none')
});

$('.recmain2').mouseenter(function(event) {
	$('.p2').css('color', '#3a9257');
	$('.recpic2').css('transform', 'scale(1.1)');
	$('.words2').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain2').mouseleave(function(event) {
	$('.p2').css('color', '#333333');
	$('.recpic2').css('transform', 'scale(1)');
	$('.words2').css('box-shadow', 'none')
});

$('.recmain3').mouseenter(function(event) {
	$('.p3').css('color', '#3a9257');
	$('.recpic3').css('transform', 'scale(1.1)');
	$('.words3').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain3').mouseleave(function(event) {
	$('.p3').css('color', '#333333');
	$('.recpic3').css('transform', 'scale(1)');
	$('.words3').css('box-shadow', 'none')
});

$('.recmain5').mouseenter(function(event) {
	$('.p5').css('color', '#3a9257');
	$('.recpic5').css('transform', 'scale(1.1)');
	$('.words5').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain5').mouseleave(function(event) {
	$('.p5').css('color', '#333333');
	$('.recpic5').css('transform', 'scale(1)');
	$('.words5').css('box-shadow', 'none')
});

$('.recmain6').mouseenter(function(event) {
	$('.p6').css('color', '#3a9257');
	$('.recpic6').css('transform', 'scale(1.1)');
	$('.words6').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain6').mouseleave(function(event) {
	$('.p6').css('color', '#333333');
	$('.recpic6').css('transform', 'scale(1)');
	$('.words6').css('box-shadow', 'none')
});

$('.recmain7').mouseenter(function(event) {
	$('.p7').css('color', '#3a9257');
	$('.recpic7').css('transform', 'scale(1.1)');
	$('.words7').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain7').mouseleave(function(event) {
	$('p7').css('color', '#333333');
	$('.recpic7').css('transform', 'scale(1)');
	$('.words7').css('box-shadow', 'none')
});

$('.recmain8').mouseenter(function(event) {
	$('.p8').css('color', '#3a9257');
	$('.recpic8').css('transform', 'scale(1.1)');
	$('.words8').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.recmain8').mouseleave(function(event) {
	$('.p8').css('color', '#333333');
	$('.recpic8').css('transform', 'scale(1)');
	$('.words8').css('box-shadow', 'none')
});

$('.joinus').mouseenter(function(event) {
	$('.joinus').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.joinus').mouseleave(function(event) {
	$('.joinus').css('box-shadow', 'none')
});


//热门游记与话题
$('.hotmain1').mouseenter(function(event) {
	$('.pic1').css('transform', 'scale(1.1)');
	$('.text1').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.hotmain1').mouseleave(function(event) {
	$('.pic1').css('transform', 'scale(1)');
	$('.text1').css('box-shadow', 'none')
});

$('.hotmain2').mouseenter(function(event) {
	$('.pic2').css('transform', 'scale(1.1)');
	$('.text2').css('box-shadow', '0px 0px 5px 1px #d7d7d7')

});
$('.hotmain2').mouseleave(function(event) {
	$('.pic2').css('transform', 'scale(1)');
	$('.text2').css('box-shadow', 'none')
});

$('.hotmain3').mouseenter(function(event) {
	$('.pic3').css('transform', 'scale(1.1)');
	$('.text3').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.hotmain3').mouseleave(function(event) {
	$('.pic3').css('transform', 'scale(1)');
	$('.text3').css('box-shadow', 'none')
});

$('.hotmain4').mouseenter(function(event) {
	$('.pic4').css('transform', 'scale(1.1)');
	$('.text4').css('box-shadow', '0px 0px 5px 1px #d7d7d7')

});
$('.hotmain4').mouseleave(function(event) {
	$('.pic4').css('transform', 'scale(1)');
	$('.text4').css('box-shadow', 'none')
});

$('.hotmain5').mouseenter(function(event) {
	$('.pic5').css('transform', 'scale(1.1)');
	$('.text5').css('box-shadow', '0px 0px 5px 1px #d7d7d7')

});
$('.hotmain5').mouseleave(function(event) {
	$('.pic5').css('transform', 'scale(1)');
	$('.text5').css('box-shadow', 'none')
});

$('.hotmain6').mouseenter(function(event) {
	$('.pic6').css('transform', 'scale(1.1)');
	$('.text6').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.hotmain6').mouseleave(function(event) {
	$('.pic6').css('transform', 'scale(1)');
	$('.text6').css('box-shadow', 'none')
});

$('.hotmain7').mouseenter(function(event) {
	$('.pic7').css('transform', 'scale(1.1)');
	$('.text7').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.hotmain7').mouseleave(function(event) {
	$('.pic7').css('transform', 'scale(1)');
	$('.text7').css('box-shadow', 'none')
});

$('.hotmain8').mouseenter(function(event) {
	$('.pic8').css('transform', 'scale(1.1)');
	$('.text8').css('box-shadow', '0px 0px 5px 1px #d7d7d7')
});
$('.hotmain8').mouseleave(function(event) {
	$('.pic8').css('transform', 'scale(1)');
	$('.text8').css('box-shadow', 'none')
});

//穷游体验馆
$('.first').mouseenter(function(event) {
	$('.firstimg').css('transform', 'scale(1.1)')
});
$('.first').mouseleave(function(event) {
	$('.firstimg').css('transform', 'scale(1)')
});

//近期参与 头像轮播图
var num=0;
var timee;
function zou(){
	timee=setInterval(function(){
		num=num+1;
		if(num>6){
			num=0;
			$('.people ul').css('left', -38*num+'px');
			num=1;
		}
		$('.people ul').animate({'left': -38*num+'px'})
	},1000)
}
zou();
$('.people').hover(function() {
	clearInterval(timee);
	$('.people ul li img').css('transform', 'scale(1.1)')
}, function() {
	zou();
	$('.people ul li img').css('transform', 'scale(1)')
});

// second 鼠标放上出现黑色、二维码、手机图标变
$('.code').hide()
$('.second').hover(function() {
	$('.second span').css('background-position', '0px -146px');
	$('.code').show()
}, function() {
$('.second span').css('background-position', '-60px -146px');
$('.code').hide()
});

//third鼠标放上出现黑色、二维码、手机图标变
$('.smallcode3').hide()
$('.third').hover(function() {
	$('.third span').css('background-position', '0px -146px');
	$('.smallcode3').show()
}, function() {
$('.third span').css('background-position', '-60px -146px');
$('.smallcode3').hide()
});

//fouth鼠标放上出现黑色、二维码、手机图标变
$('.smallcode4').hide()
$('.fouth').hover(function() {
	$('.fouth span').css('background-position', '0px -146px');
	$('.smallcode4').show()
}, function() {
$('.fouth span').css('background-position', '-60px -146px');
$('.smallcode4').hide()
});

//fifth鼠标放上出现黑色、二维码、手机图标变
$('.smallcode5').hide()
$('.fifth').hover(function() {
	$('.fifth span').css('background-position', '0px -146px');
	$('.smallcode5').show()
}, function() {
$('.fifth span').css('background-position', '-60px -146px');
$('.smallcode5').hide()
});

//sixth鼠标放上出现黑色、二维码、手机图标变
$('.smallcode6').hide()
$('.sixth').hover(function() {
	$('.sixth span').css('background-position', '0px -146px');
	$('.smallcode6').show()
}, function() {
$('.sixth span').css('background-position', '-60px -146px');
$('.smallcode6').hide()
});