const OutputView = require('./OutputView');

const GameController = {
  validateUserInput(userInput) {
    if (userInput.length !== 3) {
      throw new Error('3자리 수를 입력해 주세요.');
    }
    this.validateNumber(userInput);
    this.validateDuplicate(userInput);
  },

  validateNumber(userInput) {
    for (let index = 0; index < userInput.length; index += 1) {
      if (userInput[index] < '1' || userInput[index] > '9') {
        throw new Error('1 ~ 9 사이의 숫자를 입력해 주세요.');
      }
    }
  },

  validateDuplicate(userInput) {
    const NOTDUPLICATE = new Set(userInput);
    if (userInput.length !== NOTDUPLICATE.size) {
      throw new Error('중복되지 않는 숫자를 입력해 주세요.');
    }
  },

  countScore(userInput, computerNumber) {
    const BALL = this.countBall(userInput, computerNumber);
    const STRIKE = this.countStrike(userInput, computerNumber);
    OutputView.printScore(BALL, STRIKE);
  },

  countBall(userInput, computerNumber) {
    let ball = 0;
    for (let index = 0; index < userInput.length; index += 1) {
      if (computerNumber.includes(userInput[index]) && computerNumber[index] !== userInput[index])
        ball += 1;
    }
    return ball;
  },

  countStrike(userInput, computerNumber) {
    let strike = 0;
    for (let index = 0; index < userInput.length; index += 1) {
      if (userInput[index] === computerNumber[index]) strike += 1;
    }
    return strike;
  },
};
module.exports = GameController;
