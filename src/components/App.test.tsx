import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});
