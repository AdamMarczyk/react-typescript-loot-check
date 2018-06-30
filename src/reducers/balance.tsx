import { BalanceAction } from '../actions/balance';
import * as constants from '../constants';
// import { IStoreState } from '../types';

const balance = (state: any = 0, action: BalanceAction): any => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return (state.balance += action.deposit);
    case constants.WITHDRAW:
      return (state.balance -= action.withdrawal);
    default:
      return state;
  }
};

export default balance;
