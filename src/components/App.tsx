import * as React from 'react';

import Loot from './Loot';
import Wallet from './Wallet';
const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
    </div>
  );
};

export default App;
