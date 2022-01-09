const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    // console.log("i will paint " + newTodo); // 3. input에 들어온 value를 뿌려주는 역할
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newLi.appendChild(newSpan);
    newSpan.innerText = newTodo;
    toDoList.appendChild(newLi)
}

function handleToDoSubmit (e) {
    e.preventDefault();
    const newTodo = toDoInput.value; // 1. input에 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; // 2. input에 들어온 value를 지우는 역할
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)