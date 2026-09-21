import React, { useState } from "react";

const DateCounter = () => {
  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">Date Counter</h1>
        <p className="mt-2 text-[18px]">A simple date counter component.</p>
      </div>
      <div className="flex flex-col gap-y-30">
        <FirstCounter />
        <SecondCounter />
      </div>
    </>
  );
};

const FirstCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleStepDecrease() {
    setStep((s) => s - 1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col gap-y-4 items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={handleStepDecrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          -
        </button>
        <span>Step {step}</span>
        <button
          onClick={handleStepIncrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          +
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleCountDecrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          -
        </button>
        <span>Count {count}</span>
        <button
          onClick={handleCountIncrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          +
        </button>
      </div>
      <div>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count < 0
            ? `${Math.abs(count)} days ago was ${date.toDateString()}`
            : `${Math.abs(count)} days from today will be ${date.toDateString()}`}
      </div>
    </div>
  );
};

const SecondCounter = () => {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  function handleRange(e) {
    setRange(Number(e.target.value));
  }

  function handleCountIncrease() {
    setCount((c) => c + range);
  }

  function handleCountDecrease() {
    setCount((c) => c - range);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col gap-y-4 items-center">
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={1}
          max={10}
          value={range}
          onChange={(e) => handleRange(e)}
        />
        <span>{range}</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleCountDecrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          -
        </button>
        <input
          onChange={(e) => setCount(Number(e.target.value))}
          value={count}
          placeholder="Enter a number"
          type="number"
          className="bg-slate-200 outline-0 text-black py-2 px-4 rounded"
        />
        <button
          onClick={handleCountIncrease}
          className="flex justify-center bg-slate-200 text-black font-bold text-2xl cursor-pointer w-10 h-10 rounded-full"
        >
          +
        </button>
      </div>
      <div>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count < 0
            ? `${Math.abs(count)} days ago was ${date.toDateString()}`
            : `${Math.abs(count)} days from today will be ${date.toDateString()}`}
      </div>
    </div>
  );
};

export default DateCounter;
