import GamePlay from "./GamePlay";
export default class GameScore {
  constructor() {
    this.GamePlay = new GamePlay();
    this.score = 0;
    this.missed = 0;
    this.HtmlScore = document.querySelector(".scores-number");
    this.HtmlMissedScore = document.querySelector(".missed-number");
    this.board = document.querySelector(".board-container");
  }
  countScore() {
    this.board.addEventListener("click", (event) => {
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
