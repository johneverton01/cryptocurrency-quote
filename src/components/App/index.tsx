import React, { useState } from 'react';
import { Chart } from '../Chart';
import { Header } from '../Header';
import './index.css';

function App() {
  const [coinSelect, setCoinSelect] = useState<string>("BTC");
  return (
    <div className="App">
      <Header onSelected={(coin) => setCoinSelect(coin)}/>
      <Chart coin={coinSelect}/>
    </div>
  );
}

export default App;
