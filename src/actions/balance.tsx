import * as constants from '../constants';

export interface ISetBalance {
  type: constants.SET_BALANCE;
  balance: number;
}

export interface IDeposit {
  type: constants.DEPOSIT;
  deposit: number;
}

export interface IWithdrawal {
  type: constants.WITHDRAW;
  withdrawal: number;
}

export type BalanceAction = ISetBalance | IDeposit | IWithdrawal;

export const setBalance = (balance: number): ISetBalance => {
  return {
    balance,
    type: constants.SET_BALANCE
  };
};

export const deposit = (depositAmount: number): IDeposit => {
  return {
    deposit: depositAmount,
    type: constants.DEPOSIT
  };
};

export const withdraw = (withdrawal: number): IWithdrawal => {
  return {
    type: constants.WITHDRAW,
    withdrawal
  };
};
