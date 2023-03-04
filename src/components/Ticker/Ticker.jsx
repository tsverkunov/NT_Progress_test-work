import React, { useState } from 'react';
import './Ticker.scss'

const Ticker = () => {
  const [instrument, setInstrument] = useState('')

  const handleChange = (e) => {
    setInstrument(e.target.value)
  }

  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <select name="instrument" className="form__select" onChange={handleChange} value={instrument}>
          <option value={"USD/RUB"}>USD/RUB</option>
          <option value={"USD/EUR"}>USD/EUR</option>
          <option value={"EUR/RUB"}>EUR/RUB</option>
        </select>
        <input type="number" className="form__select" value={200} onChange={handleChange}/>
        <div className="form__wrap">
          <div className="form__button-container">
            <p className="form__price">8.558</p>
            <button className="form__button form__button_sell">Sell</button>
          </div>
          <span className="form__vertical-line"></span>
          <div className="form__button-container">
            <p className="form__price">8.558</p>
            <button className="form__button form__button_buy">Buy</button>
          </div>
        </div>
      </fieldset>

    </form>
  );
};

export default Ticker;