const outputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    outputView.gameStart();
  }
}
const app = new App();
app.play();
module.exports = App;
