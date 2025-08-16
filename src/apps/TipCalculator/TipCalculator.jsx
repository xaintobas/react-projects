import { Children, useState } from "react";
import "./TipCalculator.css";

function TipCalculator() {
  const [cost, setCost] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  let totalTip = cost * ((myTip + friendTip) / 2 / 100);
  let totalBill = cost + totalTip;

  function handleReset() {
    setCost(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div className="container">
      <div className="main-content tip-cal-app">
        <h1>Tip Calculator</h1>
        <div className="tip-calculator">
          <BillInput cost={cost} onSetCost={setCost} />

          <SelectPercentatage tip={myTip} handleTip={setMyTip}>
            Did you like the service?
          </SelectPercentatage>

          <SelectPercentatage tip={friendTip} handleTip={setFriendTip}>
            Did your friend like the service?
          </SelectPercentatage>

          <BillSummary cost={cost} totalBill={totalBill} totalTip={totalTip} />
          <Reset onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}

function BillInput({ cost, onSetCost }) {
  return (
    <div className="input-container">
      <label htmlFor="initial-bill">How much was the bill?</label>
      <input
        value={cost}
        onChange={(e) => onSetCost(Number(e.target.value))}
        name="initial-bill"
        type="number"
      />
    </div>
  );
}

function SelectPercentatage({ tip, handleTip, children }) {
  return (
    <div className="input-container">
      <label htmlFor="initial-bill">{children}</label>
      <select
        value={tip}
        onChange={(e) => handleTip(Number(e.target.value))}
        name=""
        id=""
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function BillSummary({ totalBill, cost, totalTip }) {
  return (
    <div className="bill-summary">
      <h2>
        Total pay ${totalBill} (${cost} + ${totalTip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
}

export default TipCalculator;
