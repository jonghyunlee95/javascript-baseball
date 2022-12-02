const MissionUtils = require('@woowacourse/mission-utils');
const Validation = require('./GameController');

const InputView = {
  getNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      try {
        Validation.validateUserInput(userInput.split(''));
      } catch (error) {
        MissionUtils.Console.print(error);
        this.getNumber();
      }
    });
  },
};
module.exports = InputView;
