import * as React from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends React.Component {
  public render() {
    return <h3>Bitcoin balance:</h3>;
  }
}

export default connect(
  state => state,
  { fetchBitcoin }
)(Loot);
