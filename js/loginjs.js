/*
* @Author: HP
* @Date:   2020-01-08 10:38:24
* @Last Modified by:   HP
* @Last Modified time: 2020-01-13 15:39:12
*/
var clicks=0;
$('.counter').click(function(event) {
	clicks++;
	if(clicks%2==0){
		$('.countrypic1').css('transform', 'rotate(0deg)');
	}else{
		$('.countrypic1').css('transform', 'rotate(180deg)');
	}	
});


//table栏
$('.numberli').click(function(event) {
	$('.number').addClass('current');
	$('.login-section').css('height', '436px');
	$('.asidepicture1').show();
	$('.asidepicture2').hide();
	$('.message').removeClass('current');
	$(this).addClass('current');
	$('.messageli').removeClass('current');
});
$('.messageli').click(function(event) {
	$('.message').addClass('current');
	$('.login-section').css('height', '508px');
	$('.asidepicture2').show();
	$('.asidepicture1').hide();
	$('.number').removeClass('current');
	$(this).addClass('current');
	$('.numberli').removeClass('current');
});

//侧边栏
var clickss=0
$('.asidelan').css('right', -252+'px');
$('.asidespan').click(function(event) {
	clickss++;
	if(clickss%2==0){
		$('.asidelan').animate({'right':-252+'px'});
		
	}else{
		$('.asidelan').animate({'right':0+'px'});
	}
});
