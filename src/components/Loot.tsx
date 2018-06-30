import * as React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export interface ILootProps {
  fetchBitcoin: any;
}

export class Loot extends React.Component<ILootProps, {}> {
  public componentDidMount() {
    this.props.fetchBitcoin();
  }
  public render() {
    return <h3>Bitcoin balance:</h3>;
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
