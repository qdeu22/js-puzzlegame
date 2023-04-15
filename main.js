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
    console.log(i);
  });
