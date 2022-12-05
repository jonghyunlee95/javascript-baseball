const MissionUtils = require('@woowacourse/mission-utils');
const GameController = require('./GameController');
const OutputView = require('./OutputView');
const makeRandomNumber = require('./RandomNumberGenerator');

const InputView = {
  generateRandomNumber() {
    const COMPUTER = makeRandomNumber.randomNumber();
    this.receiveNumber(COMPUTER);
  },

  receiveNumber(computerNumber) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      try {
        GameController.validateUserInput(userInput.split(''));
        this.calculateScore(userInput.split(''), computerNumber);
      } catch (error) {
        MissionUtils.Console.print(error);
        this.receiveNumber(computerNumber);
      }
    });
  },

  calculateScore(userInput, computerNumber) {
    const USERNUMBER = userInput.map((item) => +item);
    if (computerNumber.every((value, index) => value === USERNUMBER[index])) {
      OutputView.printAnswer();
      return this.restartOrEnd();
    }
    GameController.countScore(USERNUMBER, computerNumber);
    this.receiveNumber(computerNumber);
  },

  restartOrEnd() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (userInput) => {
        if (userInput === '1') this.generateRandomNumber();
        if (userInput === '2') MissionUtils.Console.close();
      }
    );
  },
};
module.exports = InputView;
