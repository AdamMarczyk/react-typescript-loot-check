import * as React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../types/index';

export interface IWalletProps {
  balance: number;
}

export interface IWalletState {
  balance: number;
}

export class Wallet extends React.Component<IWalletProps, {}> {
  public state = {
    balance: 0
  };

  public updateBalance = (event: any): void =>
    this.setState({ balance: parseInt(event.target.value, 10) });

  public render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
      </div>
    );
  }
}

export const mapStateToProps = ({ balance }: IStoreState) => {
  return {
    balance
  };
};

export default connect(
  mapStateToProps,
  null
)(Wallet);
