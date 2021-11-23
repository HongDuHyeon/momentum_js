function sayHello(nameOfPerson, age) {
       console.log("hello my name is " + nameOfPerson + " and i'm " + age )
}



// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);


function plus (a, b) {
       // console.log(a + b)
}
function divide(a,b) {
       // console.log(a / b);
}
plus(1, 2)
divide(100, 50)

const player = {
       name:"nico",
       sayHello: function(otherPersonName) {
              console.log("halo " + otherPersonName + " nice to meet you");
       }
}
// console.log(player.name)
// player.sayHello("lynn");
// console.log(player.name)

const calculator = {
       plus: function(a,b) {
              return a + b
       },
       minus: function(a,b) {
              return a - b
       },
       times: function(a,b) {
              return a * b
       },
       divide: function(a,b) {
              return a / b
       },
       power: function(a,b) {
              return a ** b
       },
}

const plusResult = calculator.plus(2,3)
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult)

console.log(powerResult)



// const age = 27;
// function calculateKrAge(ageOfForeinger) {
//        return ageOfForeinger + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);


// parseInt(15)

const age = parseInt(prompt("How Old Are You?"));

// console.log(age)
// console.log(isNaN(age));
//isNan은 boolean 값을 도출함

// or
true || true === true
false || true === true
true || false === true
false || false === false


//and
true && true === true
false && true === false
true && false === false
false && false === false


if(isNaN(age) || age < 0){
       console.log("please write a real positive number")
} else if(age < 18) {
       console.log("You are too young")
} else if(age >= 18 && age <= 50) {
       console.log("you can drink")
} else if(age > 50 && age <= 80) {
       console.log("you should exercise")
} else if (age > 80) {
       console.log("you can do whatever you want")
} 

// ================ function ================================================================

const h1 = document.querySelector(".hello h1");

function handleh1Click() {
       h1.style.color = "blue"
       console.log("h1 was clicked!");
}

function handleMouseEnter() {
       h1.innerText = "Mouse is here"
}

function handleMouseleave() {
       h1.innerText = "Mouse is gone"
}
function handleWindowResize() {
       document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
       alert("copier !")
}

function handleWindowOffline() {
       alert("SOS no WIFI")
}
function handleWindowOnline () {
       alert("ALL GOOOOOD")
}
h1.onclick = handleh1Click; // 이렇게도 사용가능함
h1.addEventListener("click", handleh1Click);
// onclick function 보다 addEventListener를 사용하는 이유는
// removeEventListener로  eventListener를 제거 할수있기 때문이다.
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize); // resize check
window.addEventListener("copy", handleWindowCopy); // copy check
window.addEventListener("offline", handleWindowOffline) // wifi off check
window.addEventListener("online", handleWindowOnline) // wifi on check

// ====================================================================================

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
       const currentColor = h1.style.color;
       let newColor;
       if(currentColor === "blue") {
              newColor = "tomato";
       } else {
              newColor = "blue";
       }
       h1.style.color = newColor;
       // console.log(h1.style.color);
       // h1.style.color = "blue"
       // console.log(h1.style.color);
}


h1.addEventListener("click", handleTitleClick);

// ================= toggle
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
       const clickedClass = "clicked";
       h1.classList.toggle(clickedClass)
       // if(h1.classList.contains(clickedClass)) { // classList 중에 clickedClass를 포함하고 있는지 check
       //        h1.classList.remove(clickedClass);
       // } else {
       //        h1.classList.add(clickedClass);
       // }
}


h1.addEventListener("click", handleTitleClick);