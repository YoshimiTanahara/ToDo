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

function addTaskToDOM(taskName,isDone) {
  let list;
  if (isDone) {
    list = document.getElementById('done');
  } else {
    list = document.getElementById('not-yet');
  }

  let not = document.createElement('li');
  let text = document.createTextNode(taskName);
  not.appendChild(text);

  // ボタンを表示する場所
  let buttons = document.createElement('div');
  buttons.classlist.add('buttons');

  // 削除ボタンの作成
  let remove = document.createElement('button');
  remove.classlist.add('remove');
  remove.innerHTML = removeIcon;

  // 削除ボタンをクリック
  remove.addEventListener('click',removeTask);

  // 完了ボタンの作成
  let done = document.createElement('button');
  done.classlist.add('done');
  done.innerHTML = doneIcon;

  // 完了ボタンをクリック
  done.addEventListener('click',doneTask);
}