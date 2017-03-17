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
    var cloneTodo = $('#todo-list li').eq(0).clone();
    cloneTodo.find('.content').html(todoItem);
    cloneTodo.find('[type="text"]').val(todoItem);
    $('#todo-list').append(cloneTodo);
  });
  
  // 修改
  $('#todo-list').on('dblclick', 'li', function(e){
    $(this).addClass('editing');
    $(this).find('[type="text"]').focus();
  });
  
  $('#todo-list').on('blur', '[type="text"]', function(e){
    var content = $(this).val();
    $(this).siblings('.content').html(content);
    $(this).closest('li').removeClass('editing');
  });
  
  
  // 刪除
  $('#todo-list').on('click', '[data-action="delete"]', function(e){
    var result = confirm('delete?');
    if(result){
      $(this).closest('li').remove();
    }
  });
  
});