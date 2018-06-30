import * as constants from '../constants';

export interface ISetBalance {
  type: constants.SET_BALANCE;
}

export const setBalance = (balance: number) => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};
