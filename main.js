/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/GameScore.js

class GameScore {
  constructor() {
    this.GamePlay = new GamePlay();
    this.score = 0;
    this.missed = 0;
    this.HtmlScore = document.querySelector(".scores-number");
    this.HtmlMissedScore = document.querySelector(".missed-number");
    this.board = document.querySelector(".board-container");
  }
  countScore() {
    this.board.addEventListener("click", event => {
      if (event.target.className === "img") {
        this.score += 1;
        this.HtmlScore.textContent = this.score;
      } else {
        this.missed += 1;
        this.HtmlMissedScore.textContent = this.missed;
      }
      if (this.missed === 5) {
        clearInterval();
        this.score = 0;
        this.missed = 0;
        this.HtmlMissedScore.textContent = this.missed;
        this.HtmlScore.textContent = this.score;
        alert("Конец игры");
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js

class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.img = document.createElement("img");
  }
  createField() {
    this.img.src = "images/goblin.png";
    this.img.classList.add("img");
    document.querySelector("body").innerHTML = `
    <div class="missed">Missed = <span class="missed-number">0</span></div>
    <div class="score">Scores = <span class="scores-number">0</span></div>
    <div class="flex-wrapper">
      <div class="board-container">
      </div>
    </div>
`;
    this.container = document.querySelector(".board-container");
    for (let i = 1; i <= this.boardSize * this.boardSize; i += 1) {
      const cell = document.createElement("div");
      cell.dataset.index = i;
      cell.classList.add("cell");
      this.container.appendChild(cell);
    }
    this.GameScore = new GameScore();
    this.GameScore.countScore();
    this.randomGenerate();
  }
  randomGenerate() {
    setInterval(() => {
      const randomIndex = Math.ceil(Math.random() * 16);
      document.querySelector(`[data-index="${randomIndex}"]`).prepend(this.img);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

const gamePlay = new GamePlay();
gamePlay.createField();
;// CONCATENATED MODULE: ./src/images/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "images/goblin.png";
;// CONCATENATED MODULE: ./src/index.js




// TODO: write your code in app.js
/******/ })()
;