const MissionUtils = require('@woowacourse/mission-utils');

const InputView = {
  getNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {});
  },
};
module.exports = InputView;
