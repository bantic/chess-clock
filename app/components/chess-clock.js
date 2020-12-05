import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
const MS_PER_MINUTE = 60 * 1000;

export default class ChessClockComponent extends Component {
  @tracked
  isWhiteTurn = false;

  @tracked
  isBlackTurn = false;

  @tracked timeRemainingWhite; // ms
  @tracked timeRemainingBlack; // ms

  constructor(...args) {
    super(...args);
    this.timeRemainingWhite = this.args.minutes * MS_PER_MINUTE;
    this.timeRemainingBlack = this.args.minutes * MS_PER_MINUTE;
    this.isWhiteTurn = true;

    this.startClock();
  }

  startClock() {
    let prevTime = new Date();
    this.update = () => {
      if (this.isDestroying) {
        return;
      }

      let time = new Date();
      let elapsedMS = time - prevTime;
      prevTime = time;

      if (this.isWhiteTurn) {
        this.timeRemainingWhite -= elapsedMS;
      } else if (this.isBlackTurn) {
        this.timeRemainingBlack -= elapsedMS;
      }

      requestAnimationFrame(this.update);
    };
    this.update();
  }

  @action
  toggleClock(color) {
    if (color === "white") {
      this.isBlackTurn = true;
      this.isWhiteTurn = false;
    } else {
      this.isBlackTurn = false;
      this.isWhiteTurn = true;
    }
  }
}
