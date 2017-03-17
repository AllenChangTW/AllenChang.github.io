$(document).ready(function(){
	
	//點擊按鈕
	//取消連結動作
	//取得目標
	//得到目標位置
	//移至目標位置
	$('#go-top').click(function(e){
		e.preventDefault();
		var target = $(e.currentTarget).attr('href');
		var offset = $(target).offset();		
		$('html, body').animate({scrollTop: offset.top});
	});
		
	//點擊按鈕
	//取消連結動作
	//取得class scroll底下被點擊的 a
	//得到目標位置
	//移至目標位置
	$('.scroll').find('a').click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		var offset = $(target).offset();
		$('html, body').animate({scrollTop: offset.top});
	});
	
	//監控畫面
	//當scroll 介於 2000~2250 之間
	//新增class in 
	//反之刪除class in
	$(document).scroll(function(e){
		if ($(this).scrollTop() > 1750 && $(this).scrollTop() < 2250){
			$('.tran').addClass('in');
		}
		else {
			$('.tran').removeClass('in')
		}
	});
});