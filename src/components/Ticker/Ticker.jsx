import React, { useEffect, useState } from 'react';
import './Ticker.scss';
import { ws } from '../../ utils/WSConnector';

const Ticker = ({ rows, timeFormatter, setRows, purchasePrice, sellingPrice }) => {
  const [instrument, setInstrument] = useState('USD/RUB');
  const [amount, setAmount] = useState(1000);

  useEffect(() => {
    if(ws.connection) {
      ws.unsubscribeMarketData('subscriptionId')
      ws.subscribeMarketData(instrument)
    }
  },[instrument])

  const handleChangeInstrument = (e) => {
    setInstrument(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const createData = (ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument) => {
    return { ID, CreationTime, ChangeTime, Status, Side, Price, Amount, Instrument };
  };

  const createOrder = (side, price,) => {
    return createData(
      rows.length++,
      timeFormatter(),
      timeFormatter(),
      'Active',
      side,
      (Number(price).toFixed(3)),
      (Number(amount).toFixed(2)),
      instrument,
    )
  }

  const handleBuy = (e) => {
    e.preventDefault();
    ws.placeOrder(instrument, purchasePrice, amount, 'Buy')

    setRows([
      ...rows,
      createOrder('Buy', purchasePrice)
    ]);
  };

  const handleCell = (e) => {
    e.preventDefault();
    ws.placeOrder(instrument, sellingPrice, amount, 'Sell')

    setRows([
      ...rows,
      createOrder('Sell', sellingPrice)
    ]);
  };

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <select
          name="instrument"
          className="form__select"
          onChange={handleChangeInstrument}
          value={instrument}
        >
          <option value={'USD/RUB'}>USD/RUB</option>
          <option value={'USD/EUR'}>USD/EUR</option>
          <option value={'EUR/RUB'}>EUR/RUB</option>
        </select>
        <input
          name="amount"
          type="number"
          className="form__select"
          onChange={handleChangeAmount}
          value={amount}
        />
        <div className="form__wrap">
          <div className="form__button-container">
            <p className="form__price">{sellingPrice}</p>
            <button
              className="form__button form__button_sell"
              type="submit"
              name="sell"
              onClick={handleCell}
            >
              Sell
            </button>
          </div>
          <span className="form__vertical-line"></span>
          <div className="form__button-container">
            <p className="form__price">{purchasePrice}</p>
            <button
              className="form__button form__button_buy"
              type="submit"
              name="buy"
              onClick={handleBuy}
            >
              Buy
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Ticker;
