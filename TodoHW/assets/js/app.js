let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

if (localStorage.getItem('todoList')) {
  data = JSON.parse(localStorage.getItem('todoList'));

  renderTodoList();

} else {
  data = {
    not:[],
    done:[]
  };
}
console.log(data);


// 追加ボタンをクリックした時
  let add = document.getElementById('add');
  add.addEventListener('click',function() {


  // ユーザーが入力した内容を取得
  let taskName = document.getElementById('task').value;
  addTaskToDOM(taskName);
  document.getElementById('task').value = '';
  data.not.push(taskName);
  localStorage.setItem('todoList',JSON.stringify(data));
})


// doneとnot-yetに振り分ける
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
  buttons.classList.add('buttons');


  //削除ボタンを作成
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeIcon;


  // 削除ボタンをクリック
  remove.addEventListener('click',removeTask);


  // 完了ボタンを作成
  let done = document.createElement('button');
  done.classList.add('done');
  done.innerHTML = doneIcon;


  // 完了ボタンをクリック
  done.addEventListener('click',doneTask);

  buttons.appendChild(remove);
  buttons.appendChild(done);
  not.appendChild(buttons);
  list.appendChild(not);
}

// removeTaskを作成
function removeTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;
  
  task.remove();


// DBから削除
  if (id === 'not-yet') {
    data.not.splice(data.not.indexOf(value),1);
  }else {
    data.done.splice(data.done.indexOf(value),1);
  }
  dataObjectUpdate();
}


// doneTaskを作成
function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  if (id === 'done') {
    return;
  }
  let value = task.textContent;

  let target = document.getElementById('done');
  target.appendChild(task);

  data.not.splice(data.not.indexOf(value),1);
  data.done.push(value);
  dataObjectUpdate();
  }


// DBの更新
  function dataObjectUpdate() {
  localStorage.setItem('todoList',JSON.stringify(data));
  }


  function renderTodoList() {
    for (let taskName of data.not) {
  addTaskToDOM(taskName,false);
  }
    for (let taskName of data.done) {
  addTaskToDOM(taskName,true);
  }
}