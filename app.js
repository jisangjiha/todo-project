const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event) {
  const list = event.target.parentElement;
  list.remove();
}

function showTodo(newTodo) {
  const li = document.createElement("li"); //<li>태그 생성
  const span = document.createElement("span"); //<span> 태그 생성, 추후 button을 위해 <span>으로 text 구분
  span.innerText = newTodo; //<span></span> 안에 newTodo text 가져옴
  li.appendChild(span); //<li>안에 <span>
  todoList.appendChild(li); //<ul id="todoList"> 안에 <li>

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
}

function handleTodoSubmit(event) {
  event.preventDefault(); //새로고침 하지 않음
  const newTodo = todoInput.value; //input창 비우기 전 내용 저장
  todoInput.value = ""; //enter 눌렀을 때 input창 비우기
  showTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit); //<form>은 submit을 갖고, submit의 기본동작은 새로고침
