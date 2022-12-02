const outputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    outputView.gameStart();
    InputView.getNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
