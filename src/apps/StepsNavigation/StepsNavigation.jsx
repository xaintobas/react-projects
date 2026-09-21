import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const StepsNavigation = () => {
  const [toggleOpen, setToggleOpen] = useState(true);
  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">Steps Navigation</h1>
        <p className="mt-2 text-[18px]">A simple Steps Navigation project.</p>
      </div>
      <div
        onClick={() => setToggleOpen(!toggleOpen)}
        className="text-center cursor-pointer mx-auto text-3xl"
      >
        ❌
      </div>
      {toggleOpen && (
        <div className="my-0 mx-auto">
          <StepCard data={messages} />
        </div>
      )}
    </>
  );
};

const StepCard = ({ data }) => {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step >= 3) return;
    setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step <= 1) return;
    setStep((s) => s - 1);
  }

  return (
    <div className="bg-slate-100 w-100 sm:w-130 text-center py-10 flex flex-col gap-y-10 text-[18px] font-bold rounded-lg">
      <div className={`flex justify-between mx-10 `}>
        <RoundedDiv
          divProperties={`${step >= 1 ? "bg-[#679ff5]" : "bg-[#e1e9f3] text-black"} py-3 px-5  rounded-full`}
        >
          1
        </RoundedDiv>
        <RoundedDiv
          divProperties={`${step >= 2 ? "bg-[#679ff5]" : "bg-[#e1e9f3] text-black"} py-3 px-5  rounded-full`}
        >
          2
        </RoundedDiv>

        <RoundedDiv
          divProperties={`${step >= 3 ? "bg-[#679ff5]" : "bg-[#e1e9f3] text-black"} py-3 px-5  rounded-full`}
        >
          3
        </RoundedDiv>
      </div>
      <StepMessage divProperties="text-black text-2xl" step={step}>
        {data[step - 1]}
      </StepMessage>

      <div className={`mx-10 flex justify-between`}>
        <Button
          handleFunction={handlePrevious}
          bgProperties={`bg-[#679ff5] px-5 py-2 rounded-full cursor-pointer `}
        >
          <span>👈</span> Previous
        </Button>

        <Button
          handleFunction={handleNext}
          bgProperties={`bg-[#679ff5] px-5 py-2 rounded-full cursor-pointer `}
        >
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  );
};

const StepMessage = ({ divProperties, step, children }) => {
  return (
    <div className={divProperties}>
      <h2>Step {step}:</h2>
      {children}
    </div>
  );
};

const RoundedDiv = ({ divProperties, children }) => {
  return <div className={divProperties}>{children}</div>;
};

const Button = ({ handleFunction, bgProperties, children }) => {
  return (
    <button onClick={handleFunction} className={bgProperties}>
      {children}
    </button>
  );
};

export default StepsNavigation;
