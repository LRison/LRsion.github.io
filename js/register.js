/*
* @Author: HP
* @Date:   2020-01-31 20:52:34
* @Last Modified by:   HP
* @Last Modified time: 2020-01-31 20:52:48
*/
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