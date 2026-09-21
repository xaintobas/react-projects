import React, { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [yourRate, setYourRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);
  const average = (yourRate + friendRate) / 2;
  const tip = (bill * average) / 100;

  const handleReset = () => {
    setBill(0);
    setYourRate(0);
    setFriendRate(0);
  };

  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">Tip Calculator</h1>
        <p className="mt-2 text-[18px]">A simple Tip Calculator project.</p>
      </div>
      <div className="my-0 mx-auto bg-[#1e293b] pt-5 pb-10 px-10 w-full md:max-w-150 rounded-lg">
        <Bill bill={bill} onSetBill={setBill} />
        <Feedback id="yourFeedback" rate={yourRate} onSetRate={setYourRate}>
          Did you like the service?
        </Feedback>
        <Feedback
          id="friendFeedback"
          rate={friendRate}
          onSetRate={setFriendRate}
        >
          Did your friend like the service?
        </Feedback>
        <Total bill={bill} tip={tip} onReset={handleReset} />
      </div>
    </>
  );
};

const Bill = ({ bill, onSetBill }) => {
  return (
    <div className="text-2xl mt-5">
      <label htmlFor="bill">How much was the bill?</label>
      <input
        id="bill"
        className="bg-slate-100 text-black outline-0 py-1.5 px-3 rounded mt-2 block w-full"
        type="number"
        placeholder="Enter value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

const Feedback = ({ id, rate, onSetRate, children }) => {
  return (
    <div className="text-2xl mt-5">
      <label htmlFor={id}>{children}</label>
      <select
        id={id}
        value={rate}
        onChange={(e) => onSetRate(Number(e.target.value))}
        className="bg-slate-100 text-black outline-0 py-1.5 px-3 rounded mt-2 block w-full"
      >
        <option value={0}>Disqualified. (0%)</option>
        <option value={5}>It was okay. (5%)</option>
        <option value={10}>It was good. (10%)</option>
        <option value={20}>Absolutely amazing. (20%)</option>
      </select>
    </div>
  );
};

const Total = ({ bill, tip, onReset }) => {
  return (
    <div className="text-center font-bold">
      {bill > 0 && (
        <>
          <p className="my-5">
            Total pay ${bill + tip} (${bill} + ${tip} tip)
          </p>

          <button
            onClick={onReset}
            className="bg-slate-200 text-black px-5 py-2 cursor-pointer "
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default TipCalculator;
