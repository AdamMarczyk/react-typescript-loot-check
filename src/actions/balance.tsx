import * as constants from '../constants';

export interface ISetBalance {
  type: constants.SET_BALANCE;
  balance: number;
}

export type BalanceAction = ISetBalance;

export const setBalance = (balance: number) => {
  return {
    balance,
    type: constants.SET_BALANCE
  };
};
