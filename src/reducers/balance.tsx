import { bake_cookie, read_cookie } from 'sfcookies';

import { BalanceAction } from '../actions/balance';
import * as constants from '../constants';
import { IStoreState } from '../types';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (
  state: IStoreState = { balance: 0 },
  action: BalanceAction
): any => {
  let balance;

  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = { ...state, balance: (state.balance += action.deposit) };
      break;
    case constants.WITHDRAW:
      balance = { ...state, balance: (state.balance -= action.withdrawal) };
      break;
    default:
      balance = {
        ...state,
        balance: parseInt(read_cookie(BALANCE_COOKIE), 10 || state)
      };
  }
  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
};

export default balance;
