import { useState } from "react";
import "./FlashCard.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCard() {
  const [selectedId, setSelectedId] = useState(0);
  function handleCardClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="container">
      <div className="main-content">
        <div className="flash-cards">
          {questions.map((question) => (
            <div
              onClick={() => handleCardClick(question.id)}
              key={question.id}
              className={
                selectedId === question.id
                  ? "flash-card selected"
                  : "flash-card"
              }
            >
              <p>
                {selectedId === question.id
                  ? question.answer
                  : question.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
