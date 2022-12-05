const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.gameStart();
    InputView.generateRandomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
