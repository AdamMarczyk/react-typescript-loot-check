import * as React from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../types/index';

export interface IWalletProps {
  balance: number;
}

export class Wallet extends React.Component<IWalletProps, {}> {
  public render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
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
