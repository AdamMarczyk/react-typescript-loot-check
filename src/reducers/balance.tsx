import { BalanceAction } from '../actions/balance';
import * as constants from '../constants';
import { IStoreState } from '../types';

const balance = (
  state: IStoreState = { balance: 0 },
  action: BalanceAction
): any => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return { ...state, balance: (state.balance += action.deposit) };
    default:
      return state;
  }
};

export default balance;
