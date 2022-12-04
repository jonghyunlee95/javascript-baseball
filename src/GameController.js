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
      if (Number.isNaN(userInput[index])) {
        throw new Error('숫자만 입력해 주세요.');
      }
      if (userInput[index] < '1' || userInput[index] > '9') {
        throw new Error('1 ~ 9 사이의 숫자를 입력해 주세요.');
      }
    }
  },

  validateDuplicate(userInput) {
    const NOTDUPLICATE = new Set(userInput);
    if (userInput.length !== NOTDUPLICATE.length) {
      throw new Error('중복되지 않는 숫자를 입력해 주세요.');
    }
  },
};
module.exports = GameController;
