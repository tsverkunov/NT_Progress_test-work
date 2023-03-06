import React, { useState } from 'react';
import './App.css';
import DenseTable from './components/DenseTable';
import Ticker from './components/Ticker/Ticker.jsx';

function App() {
  const [rows, setRows] = useState([]);

  const titles = [
    'ID',
    'Creation time',
    'Change time',
    'Status',
    'Side',
    'Price',
    'Amount',
    'Instrument',
  ];

  const timeFormatter = () => {
    const date = new Date().toISOString().split('T');
    const time = date[1].slice(0, -1);
    return `${date[0]} ${time}`;
  };

  const createData = (ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument) => {
    return { ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument };
  };

  return (
    <div className="App">
      <Ticker rows={rows} createData={createData} timeFormatter={timeFormatter} setRows={setRows}/>
      <DenseTable rows={rows} titles={titles}/>
    </div>
  );
}

export default App;
