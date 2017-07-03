$(document).ready(function(){
	
	//02 and 0201的button
	//確認點選的li
	//儲存li的順位
	//判斷是否案Button的li
	//不是才執行 移除與新增class的部分
	
	$('.tab li').click(function(e){
		var index = $(e.currentTarget).index();
		if(index!=2){
			$('.tab li').removeClass('active').eq(index).addClass('active'); 
			$('.content').removeClass('active').eq(index).addClass('active');	
		}
		
	});
	
	//04 and 05的page 
	
	//確認點選的li
	//儲存li的順位
	//執行 移除與新增class的部分
	
	$('.page li').click(function(e){
		var index = $(e.currentTarget).index();
			$('.page li').removeClass('active').removeClass('acolor').eq(index).addClass('active').addClass('aclick'); 
			$('.content').removeClass('active').eq(index).addClass('active');		
	});

	
	//06 More
	
	//Random function
	
	function getRandomInclusive(min,max){
	  return Math.floor(Math.random()*(max-min+1))+min;
	}
	
	//計算按鈕點擊次數
	
	var counter = 0;

	$('#more.bg').click(function(e){
		
		// n 用來計算id位置
		
		counter = counter + 2;
		var n = counter;
  
		for(var i = 1 ; i <= 6 ; i++ ){
			
			// 亂數選取class clone
	
		  var number = getRandomInclusive(0,2);
		  var number1 = getRandomInclusive(0,1);
		  
		  var sum = i%3;
  
		  var clone =$('#add').find('.col-sm-4').eq(number).find('.col-sm-12').eq(number1).clone();
		  
		  // 判斷clone 後該放的位置，並新增id
		  // 移除原先的id
    
		  if( sum==1){
			  clone.clone().insertAfter('#1:last').attr('id','1');
			  $('#add').find('.col-sm-4').eq(0).find('.col-sm-12').eq(n).removeAttr("id");
		  };
		  if( sum==2){
			  clone.clone().insertAfter('#2:last').attr('id','2'); 
			  $('#add').find('.col-sm-4').eq(1).find('.col-sm-12').eq(n).removeAttr("id");
		  };
		  if( sum==0){
			  clone.clone().insertAfter('#3:last').attr('id','3');
			  $('#add').find('.col-sm-4').eq(2).find('.col-sm-12').eq(n).removeAttr("id"); 
			  n = n+1;
		  };

	  };
 
  
	});
	
});