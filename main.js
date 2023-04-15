const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;

// for (var i = 0; i < 16; i++){

// }

//Array(tileCount).fill(); //16개 짜리 배열 값은 안들어 있음..

Array(tileCount)
  .fill()
  .forEach((_, i) => {
    const li = document.createElement("li"); //새로운 HTML 요소를 생성하는 코드
    li.setAttribute("data-index", i); //HTML 요소의 속성 값을 설정하는 코드
    li.classList.add(`list${i}`); // HTML 요소의 클래스를 조작하는 코드
    container.appendChild(li); //새로운 HTML 요소를 문서에 추가하는 코드
  });
