const INPUT_MESSAGE = Object.freeze({
  ENTER_CAR_NAME: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ENTER_TRY_COUNT: '시도할 회수는 몇회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  EXECUTE_RESULT:'실행 결과',
  DISTANCE: '-',
  START_POINT: ':',
});

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH: '[ERROR] 자동차 이름은 1~5글자여야 합니다.',
  NAME_OVERLAP: '[ERROR] 중복된 자동차 이름이 있습니다.',
  INVALID_TRY_COUNT:'[ERROR] 입력값은 1이상인 자연수여야 합니다.',
})

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE
};