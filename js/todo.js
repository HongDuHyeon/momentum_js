const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    const deleteEl = event.target.parentElement; 
    // event는 paintToDo에 있는 newBtn에 대한 element info를 가져옴
    // target은 click된 html element
    // parentElement 는 click된 element의 부모 요소

    deleteEl.remove();
}


function paintToDo(newTodo) {
    // console.log("i will paint " + newTodo); // 3. input에 들어온 value를 뿌려주는 역할
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo;
    const newBtn = document.createElement("button")
    newBtn.innerText = '❌';
    newBtn.addEventListener("click", deleteTodo)
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);
    toDoList.appendChild(newLi);
}

function handleToDoSubmit (e) {
    e.preventDefault();
    const newTodo = toDoInput.value; // 1. input에 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; // 2. input에 들어온 value를 지우는 역할
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)