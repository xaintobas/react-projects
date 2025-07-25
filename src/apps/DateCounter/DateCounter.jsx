import { useState } from "react";
import "./DateCounter.css";

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  // const [range, setRange] = useState(null);

  function handleRangeChange(e) {
    console.log(e.target.value);
  }

  const date = new Date();
  const date1 = new Date();
  date.setDate(date.getDate() + count);
  date1.setDate(date1.getDate() + count1);

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
            <input type="range" min={0} max={10} onChange={handleRangeChange} />
          </div>
          <div className="count">
            <button onClick={() => setCount1((c) => c - 1)}>-</button>
            <p>Count: {count1}</p>
            <button onClick={() => setCount1((c) => c + 1)}>+</button>
          </div>
          <p className="today-date">
            {count1 === 0
              ? `Today is ${date1.toDateString()}`
              : count1 > 0
              ? `${count1} days from today will be ${date1.toDateString()}`
              : `${Math.abs(count1)} days ago was ${date1.toDateString()}`}

            {/* 1 days ago was Tue Jun 22 2027 | 1 days from today is Tue Jun 22
            2027 |Today is Mon Jun 21 2025 */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DateCounter;
