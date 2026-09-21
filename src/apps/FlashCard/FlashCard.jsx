import React, { useState } from "react";
import questions from "./questions.js";

const FlashCard = () => {
  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">Date Counter</h1>
        <p className="mt-2 text-[18px]">A simple date counter component.</p>
      </div>
      <div className="my-0 mx-auto">
        <Questions />
      </div>
    </>
  );
};

const Questions = () => {
  const [selected, setSelected] = useState(null);

  const handleToggleSelected = (id) => {
    id === selected ? setSelected(null) : setSelected(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          questionObj={question}
          selected={selected}
          setSelected={setSelected}
          handleToggleSelected={handleToggleSelected}
        />
      ))}
    </div>
  );
};

const QuestionCard = ({
  selected,
  handleToggleSelected,
  questionObj: { id, question, answer },
}) => {
  return (
    <div
      onClick={() => handleToggleSelected(id)}
      className={`flex items-center justify-center ${selected === id ? "bg-[#4589ee]" : "bg-[#1b273a]"} p-7 text-center cursor-pointer rounded w-full max-w-80 min-h-40 border border-[#495c7a] hover:scale-103 transition-all duration-300`}
    >
      <h1>{selected === id ? answer : question}</h1>
    </div>
  );
};

export default FlashCard;
