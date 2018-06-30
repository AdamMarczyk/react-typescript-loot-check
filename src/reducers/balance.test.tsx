import * as constants from '../constants';
import balanceReducer from './balance';
// import balanceReducer2 from './balance';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance: number = 10;
    it('sets a balance', () => {
      expect(
        balanceReducer({ balance }, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    /* describe('then re-initializing', () => {
      it('read the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual({
          balance
        });
      });
    }); */
  });

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(
        { balance: initialState },
        { type: constants.DEPOSIT, deposit }
      )
    ).toEqual({ balance: initialState + deposit });
  });

  it('withdraws from the balance', () => {
    const withdrawal = 10;
    const initialState = 20;

    expect(
      balanceReducer(
        { balance: initialState },
        { type: constants.WITHDRAW, withdrawal }
      )
    ).toEqual({ balance: initialState - withdrawal });
  });
});
