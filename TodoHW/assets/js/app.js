let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

if (localStorage.getItem('todoList')){
  data = JSON.parse(localStorage.getItem('todoList'));

  renderTodoList();

} else {

  data = {
    not:[],
    done:[]
  };
}

console.log(data);

// 追加ボタンをクリックしたとき
  let add = document.getElementById('add');
  add.addEventListener('click',function() {

// ユーザーが入力した内容を取得
  let taskName = document.getElementById('task').value;

  addTaskToDOM(taskName);
  document.getElementById('task').value = '';
  data.not.push(taskName);
  localStorage.setItem('todoList',JSON.stringify(data));
  })
