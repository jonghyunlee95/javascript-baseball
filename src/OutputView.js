const MissionUtils = require('@woowacourse/mission-utils');

const outputView = {
  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  },

  printScore(ball, strike) {
    if (ball !== 0 && strike === 0) MissionUtils.Console.print(`${ball}볼`);
    if (ball === 0 && strike !== 0) MissionUtils.Console.print(`${strike}스트라이크`);
    if (ball !== 0 && strike !== 0) MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    if (ball === 0 && strike === 0) MissionUtils.Console.print('낫싱');
  },

  printAnswer() {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};
module.exports = outputView;
