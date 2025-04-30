// src/components/TipCalculator.tsx
import React, { useState } from 'react';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 0) setBillAmount(value);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) setNumberOfPeople(value);
  };

  const handleTipChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipPercentage(parseInt(e.target.value));
  };

  const totalAmount = billAmount + (billAmount * tipPercentage) / 100;
  const totalPerPerson = totalAmount / numberOfPeople;

  return (
    <div className="tip-calculator">
      <div className="input-group">
        <label htmlFor="bill">Bill Amount</label>
        <input
          type="number"
          id="bill"
          value={billAmount}
          onChange={handleBillChange}
          placeholder="Enter Bill Amount"
        />
      </div>
      <div className="input-group">
        <label htmlFor="tip">Select Tip (%)</label>
        <select id="tip" value={tipPercentage} onChange={handleTipChange}>
          <option value={10}>10%</option>
          <option value={15}>15%</option>
          <option value={20}>20%</option>
          <option value={25}>25%</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          value={numberOfPeople}
          onChange={handlePeopleChange}
          min={1}
        />
      </div>
      <div className="result">
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <p>Amount Per Person: ${totalPerPerson.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TipCalculator;
