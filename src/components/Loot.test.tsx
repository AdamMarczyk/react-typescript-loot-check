import { shallow } from 'enzyme';
import * as React from 'react';

import { Loot } from './Loot';

describe('Loot', () => {
  const loot = shallow(<Loot />);

  it('renders properply', () => {
    expect(loot).toMatchSnapshot();
  });
});
