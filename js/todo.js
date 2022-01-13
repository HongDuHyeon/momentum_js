const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

// localstorage에 넣기 위한 배열 
// localstorage는 오직 텍스트만 넣을수있음
let toDos = [];

function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    // JSON.stringify는 값을 문자열로 변환시킬때 사용
}

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
    newLi.id = newTodo.id;
    const newSpan = document.createElement("span");
    newSpan.innerText = newTodo.text;
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

    // newTodo로 받은걸 toDos 배열에 추가하기
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    // Date.now() 는 랜덤수 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)


// 로컬 스토리지에서 키값을 가져오고 JSON.parse를 사용해서 배열로 변환
const savedToDos = localStorage.getItem(TODOS_KEY)



// console.log(savedToDos)
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    //parse 는 string을 배열로 바꿔주는 역할 
    toDos = parsedToDos;
    // parsedToDos.forEach((item) => (console.log("this is the turn of",item)))
    parsedToDos.forEach(paintToDo)
    // 어떤 item을 사용하고 있는지 알아야함
    // forEach는 parseDToDos에 있는 배열 요소 각각에게 sayHello()를 실행시킴
}



// function sayHello(item){
//     console.log(`this is the turn of ${item}`)
// }
// if(savedToDos) {
//     const parsedToDos = JSON.parse(savedToDos);
//     parsedToDos.forEach()
//     parsedToDos.forEach(sayHello)
// }
// // 두가지 방법이 있음
// (item) => (console.log("this is the turn of",item))

// function sayHello(item){
//     console.log(`this is the turn of ${item}`)
// }


const arr = [1234,234,21234,123123,2353463,456];

function fill (item) {
    return item < 20000;
}
console.log(arr.filter(fill))