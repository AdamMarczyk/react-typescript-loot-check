import { shallow } from 'enzyme';
import * as React from 'react';

import Wallet from './Wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
});
