import { useState } from "react";
import "./StepsNavigation.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function StepsNavigation() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      <div className="main-content">
        <div>
          <p onClick={() => setIsOpen(!isOpen)} className="steps-close">
            ❌
          </p>
        </div>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step > 0 ? "active" : ""}>1</div>
              <div className={step > 1 ? "active" : ""}>2</div>
              <div className={step > 2 ? "active" : ""}>3</div>
            </div>
            <p style={{ color: "black" }} className="message">
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={() => (step <= 1 ? "" : setStep((s) => s - 1))}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button>
              <button
                onClick={() => (step >= 3 ? "" : setStep((s) => s + 1))}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepsNavigation;
