import * as constants from '../constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance: number = 10;

    expect(
      balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
    ).toEqual(balance);
  });
});
