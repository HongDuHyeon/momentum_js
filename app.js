const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복이 되고 계속 사용을 해야하면 (대문자)변수로 지정해두고 사용한다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (e) {
       // .preventDefault() << 어떤 event의 브라우저 기본행동이 발생되지 않도록 막는 기능 
       e.preventDefault();
       // submit 버튼은 엔터나 클릭할때 발생함
       const username = loginInput.value;
       localStorage.setItem(USERNAME_KEY, username)
       loginForm.classList.add(HIDDEN_CLASSNAME);

       // 변수와 string을 합치거나 변수를 string안에 집어넣고 싶다면 ``(백틱) 안에 ${변수명} 넣어주면 됨
       // greeting.innerText = `Hello ${username}`;
       // greeting.classList.remove(HIDDEN_CLASSNAME)
       paintsGreetings(username);
}

// paintsGreetings 에 들어가는 인자들 주의할것.

function paintsGreetings (username) {
       greeting.innerText = `Hello ${username}`;
       greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 가장 먼저 localStorage 를 확인함
const savedUsername = localStorage.getItem(USERNAME_KEY)

// input type submit이 실행이 됐을때 조건문을 돌림
// savedUsername에 있는 값을 확인했을때 null인 경우와 아닌 경우
if(savedUsername === null ) {
       // true === show the form
       loginForm.classList.remove(HIDDEN_CLASSNAME);
       loginForm.addEventListener("submit", onLoginSubmit)
} else {
       // false === show the greetings
       paintsGreetings(savedUsername);
}


