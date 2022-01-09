const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    
} 
getClock(); // setInterval로 돌렸을땐 1초후에 나오기때문에 먼저 한번 실해시켜줌
setInterval(getClock, 1000)
// setTimeout = 몇초후에   setTimeout(sayHello, 5000)
// setInterval = 몇초마다  setInterval(sayHello, 5000)


// string에 쓸수있는 function
// padStart();
// padEnd();

