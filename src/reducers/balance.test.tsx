import * as constants from '../constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance: number = 10;

    expect(
      balanceReducer({ balance }, { type: constants.SET_BALANCE, balance })
    ).toEqual(balance);
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
});
