import * as React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export interface ILootProps {
  fetchBitcoin: any;
  bitcoin: any;
  balance: number;
}

export class Loot extends React.Component<ILootProps, {}> {
  public componentDidMount() {
    this.props.fetchBitcoin();
  }

  public computeBitcoin() {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) {
      return '';
    }

    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10)
    );
  }

  public render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchBitcoin: () => dispatch(fetchBitcoin())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Loot);
