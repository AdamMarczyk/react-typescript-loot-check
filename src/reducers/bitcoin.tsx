import { FetchBitcoinAction } from '../actions/bitcoin';
import { FETCH_BITCOIN } from '../constants';

const bitcoin = (state = {}, action: FetchBitcoinAction) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};

export default bitcoin;
