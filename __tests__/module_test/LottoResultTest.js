import LottoResult from '../../Controller/modules/LottoResult.js';

describe('당첨 결과 확인 테스트.', () => {
  const winNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 10;
  const lottoNumbers = [
    [1, 2, 3, 7, 8, 9],
    [1, 2, 3, 4, 8, 9],
    [1, 2, 3, 4, 5, 8],
    [1, 2, 3, 4, 5, 10],
    [1, 2, 3, 4, 5, 6],
  ];
  const expectedResult = {
    three: 1,
    four: 1,
    five: 1,
    fiveBonus: 1,
    six: 1,
  };
  const purchaseAmount = lottoNumbers.length;
  const expectedProfit = 40631100;

  test('당첨 번호와 로또 번호 비교.', () => {
    const testResult = LottoResult.calculateNumbers(
      lottoNumbers,
      winNumber,
      bonusNumber
    );
    expect(testResult).toEqual(expectedResult);
  });

  test('수익률 계산', () => {
    const testResult = LottoResult.calculateProfit(
      purchaseAmount,
      expectedResult
    );
    expect(testResult).toBe(expectedProfit);
  });
});