import { BalanceAction } from '../actions/balance';
import * as constants from '../constants';
const balance = (state: any = null, action: BalanceAction): any => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    default:
      return balance;
  }
};

export default balance;
