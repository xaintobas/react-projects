import { useState } from "react";
import "./DateCounter.css";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [range, setRange] = useState(1);

  const date = new Date();
  const date1 = new Date();
  date.setDate(date.getDate() + count);
  date1.setDate(date1.getDate() + count1);

  function handleReset() {
    setCount1(0);
    setRange(1);
  }

  return (
    <div className="container">
      <div className="main-content">
        <div className="counter-content">
          <div className="step">
            <button onClick={() => setStep((s) => s - 1)}>-</button>
            <p>Step: {step}</p>
            <button onClick={() => setStep((s) => s + 1)}>+</button>
          </div>
          <div className="count">
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + step)}>+</button>
          </div>
          <p className="today-date">
            {count === 0
              ? `Today is ${date.toDateString()}`
              : count > 0
              ? `${count} days from today will be ${date.toDateString()}`
              : `${Math.abs(count)} days ago was ${date.toDateString()}`}
          </p>
        </div>
        <div className="counter-content counter-v2">
          <div className="step">
            <input
              type="range"
              min={0}
              max={10}
              onChange={(e) => setRange(Number(e.target.value))}
              value={range}
            />
            <span className="range-number">{range}</span>
          </div>
          <div className="count">
            <button onClick={() => setCount1((c) => c - range)}>-</button>
            <input
              className="count-input"
              type="text"
              value={count1}
              placeholder="Enter Number"
              onChange={(e) => setCount1(Number(e.target.value))}
            />
            <button onClick={() => setCount1((c) => c + range)}>+</button>
          </div>
          <p className="today-date">
            {count1 === 0
              ? `Today is ${date1.toDateString()}`
              : count1 > 0
              ? `${count1} days from today will be ${date1.toDateString()}`
              : `${Math.abs(count1)} days ago was ${date1.toDateString()}`}
          </p>
          <div>
            {count1 !== 0 ? (
              <button onClick={handleReset} className="counter-reset">
                Reset
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateCounter;
