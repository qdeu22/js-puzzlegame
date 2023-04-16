const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;

// for (var i = 0; i < 16; i++){

// }

//Array(tileCount).fill(); //16개 짜리 배열 값은 안들어 있음..

let tiles = [];

tiles = createImageTiles();

shuffle(tiles).forEach((tiles) => container.appendChild(tiles));

function createImageTiles() {
  const tempArray = [];
  Array(tileCount)
    .fill()
    .forEach((_, i) => {
      const li = document.createElement("li"); //새로운 HTML 요소를 생성하는 코드
      li.setAttribute("data-index", i); //HTML 요소의 속성 값을 설정하는 코드
      li.classList.add(`list${i}`); // HTML 요소의 클래스를 조작하는 코드
      tempArray.push(li);
    });
  return tempArray;
}

function shuffle(array) {
  let index = array.length - 1; //배열 마지막값
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1)); //실수값을 내림하여 정수값으로 반환
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]]; //배열의 두 요소를 교환하는 방법, 배열 해체 할당 문법
    index--;
  }
  return array;
}
