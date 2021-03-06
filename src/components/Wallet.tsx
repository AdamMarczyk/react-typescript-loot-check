import * as React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';
import { IStoreState } from '../types/index';

export interface IWalletProps {
  balance: number;
  deposit: (balance: number) => void;
  withdraw: (balance: number) => void;
}

export interface IWalletState {
  balance: number;
}

export class Wallet extends React.Component<IWalletProps, {}> {
  public state = {
    balance: 0
  };

  public updateBalance = (event: any): void => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  };

  public deposit = (): void => this.props.deposit(this.state.balance);

  public withdraw = (): void => this.props.withdraw(this.state.balance);

  public render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export const mapStateToProps = ({ balance }: IStoreState) => {
  return {
    balance
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    deposit: (balance: number) => dispatch(deposit(balance)),
    withdraw: (balance: number) => dispatch(withdraw(balance))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
