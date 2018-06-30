import * as constants from '../constants';

export interface ISetBalance {
  type: constants.SET_BALANCE;
  balance: number;
}

export interface IDeposit {
  type: constants.DEPOSIT;
  deposit: number;
}

export type BalanceAction = ISetBalance | IDeposit;

export const setBalance = (balance: number) => {
  return {
    balance,
    type: constants.SET_BALANCE
  };
};

export const deposit = (depositAmount: number) => {
  return {
    deposit: depositAmount,
    type: constants.DEPOSIT
  };
};
