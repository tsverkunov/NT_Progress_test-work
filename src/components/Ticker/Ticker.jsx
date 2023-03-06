import React, { useState } from 'react';
import './Ticker.scss';

const Ticker = ({ rows, createData, timeFormatter, setRows }) => {
  const [instrument, setInstrument] = useState('USD/RUB');
  const [amount, setAmount] = useState(1000);
  const [purchasePrice, setPurchasePrice] = useState(1);
  const [sellingPrice, setSellingPrice] = useState(2);

  const handleChangeInstrument = (e) => {
    setInstrument(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleBuy = (e) => {
    e.preventDefault();
    setRows([
      ...rows,
      createData(
        rows.length++,
        timeFormatter(),
        timeFormatter(),
        'Rejected',
        'Buy',
        (Number(purchasePrice)).toFixed(4),
        (Number(amount)).toFixed(2),
        instrument,
      )]);
  };
  const handleCell = (e) => {
    e.preventDefault();
    setRows([
      ...rows,
      createData(
        rows.length++,
        timeFormatter(),
        timeFormatter(),
        'Active',
        'Cell',
        (Number(purchasePrice)).toFixed(4),
        (Number(amount)).toFixed(1),
        instrument,
      )]);
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
