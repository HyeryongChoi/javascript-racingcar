const { OUTPUT_MESSAGE } = require('../utils/constants');
const numberToDistanceString = require('../utils/numberToDistanceString');
const readLine = require('../utils/readLine');

const OutputView = {
  printError(message) {
    console.log(message);
  },

  printMoveResult(names, moveData) {
    let resultStr = '';

    for (let index = 0; index < names.length; index++) {
      resultStr +=
        OUTPUT_MESSAGE.MOVE_RESULT(names[index], numberToDistanceString(moveData[index])) + '\n';
    }

    console.log(resultStr);
  },

  printWinner(names) {
    let printNames = names.join(', ');

    console.log(OUTPUT_MESSAGE.WINNERS(printNames));
  },

  closeConsole() {
    readLine.close();
  },
};

module.exports = OutputView;
