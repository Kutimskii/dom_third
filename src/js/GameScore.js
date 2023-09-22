export default class GameScore {
  constructor() {
    this.score = 0;
    this.missed = 0;
    this.HtmlScore = document.querySelector(".scores-number");
    this.HtmlMissedScore = document.querySelector(".missed-number");
    this.board = document.querySelector(".board-container");
  }
  countScore() {
    this.board.addEventListener("click", (event) => {
      console.log();
      if (event.target.className === "img") {
        this.score += 1;
        this.HtmlScore.textContent = this.score;
      } else {
        this.missed += 1;
        this.HtmlMissedScore.textContent = this.missed;
      }
    });
  }
}
