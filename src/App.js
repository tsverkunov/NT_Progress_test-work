import React, { useEffect, useState } from 'react';
import './App.css';
import DenseTable from './components/DenseTable';
import Ticker from './components/Ticker/Ticker.jsx';
import {ws} from './ utils/WSConnector';
import { startServer } from './ utils/server';

function App() {
  const [rows, setRows] = useState([
    {
      ID: 0,
      CreationTime: '2023-03-10 16:26:53.354',
      ChangeTime: '2023-03-10 16:26:53.354',
      Status: 'Active',
      Side: 'Buy',
      Price: 8.555,
      Amount: '777111.00',
      Instrument: 'USD/EUR',
    },
  ]);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);

  useEffect(() => {
    startServer();
    ws.connect(setRows);
  }, []);

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

  return (
    <div className="App">
      <Ticker
        rows={rows}
        timeFormatter={timeFormatter}
        setRows={setRows}
        purchasePrice={purchasePrice}
        sellingPrice={sellingPrice}
      />
      <DenseTable rows={rows} titles={titles}/>
    </div>
  );
}

export default App;
