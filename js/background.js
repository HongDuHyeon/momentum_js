const images = [
    "bg_01.jpg",
    "bg_02.jpg",
    "bg_03.jpg",
    "bg_04.jpg",
    "bg_05.jpg",
    "bg_06.jpg",
    "bg_07.jpg",
    "bg_08.jpg",
    "bg_09.jpg",
]

// images 배열에서 랜덤으로 가져오기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// js에서 만든 태그를 html에 추가하기
const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;


document.body.appendChild(bgImage)