$(document).ready(function(){
  
  // 新增
  // 點擊＋按鈕新增  
  // 彈出 prompt 視窗
  // 取得輸入數值
  // 複製li
  // 將輸入的數值更換至複製的li
  // 加入至todo-list
  
	// 新增  
	$('#add-todo').click(function(e){
		var todoItem = prompt('add todo item');
		if(todoItem!=null){  //判斷是否按取消
			$.post('todo/create.php', {todo: todoItem}, function(data) {
				// 判斷server是否有回傳 success 有的話執行新增動作
				if(data.status=='success') {
					var cloneTodo = $('#todo-list li').eq(0).clone();
					cloneTodo.find('.content').html(data.data);
					cloneTodo.find('[type="text"]').val(data.data);
					$('#todo-list').append(cloneTodo);
				}
			
			}, 'json');
		}
	});
  
	// 修改
  $('#todo-list').on('dblclick', 'li', function(e){
    $(this).addClass('editing');
    $(this).find('[type="text"]').focus();
  });
  
  $('#todo-list').on('blur', '[type="text"]', function(e){
    var content = $(this).val();
		
		$.post('todo/update.php', {id: 123, todo: content},
		function(data) {
			// 判斷server是否有回傳 success 有的話執行修改動作
			if(data.status=='success') {
		    $(e.currentTarget).siblings('.content').html(data.data);
		    $(e.currentTarget).closest('li').removeClass('editing');
			}
			
		}, 'json');
  });
  
  
  // 刪除
  $('#todo-list').on('click', '[data-action="delete"]', function(e){
    var result = confirm('delete?');
    if(result){
			
			$.post('todo/delete.php', {id: 123}, function(data) {
				// 判斷server是否有回傳 success 有的話執行刪除動作
				if(data.status=='success') {
					$(e.currentTarget).closest('li').remove();
				}
				
			}, 'json');

    }
  });
  
});