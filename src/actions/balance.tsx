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

export const withdraw = (withdrawal: number) => {
  return {
    type: constants.WITHDRAW,
    withdrawal
  };
};
