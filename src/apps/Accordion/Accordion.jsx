import { useState } from "react";
import "./Accordion.css";

const faqs = [
  {
    title: "Who are you?",
    text: "I'm Stephen Obayuwana, a frontend developer currently focused on mastering React after building a solid foundation in HTML, CSS, and vanilla JavaScript.",
  },
  {
    title: "What projects have you worked on?",
    text: "I've built a range of small but functional projects, including a todo app, quiz app, guessing game, and more. These projects help me improve my problem-solving skills and prepare for bigger real-world applications.",
  },
  {
    title: "What are you currently learning?",
    text: "I'm learning React, focusing on component-based architecture, state management, and building scalable front-end applications.",
  },
  {
    title: "Do you work on freelance projects?",
    text: "Yes, I'm open to freelance work and collaborations that allow me to grow my skills, contribute to meaningful projects, and solve real-world problems.",
  },
  {
    title: "What are your future goals?",
    text: "My goal is to become a highly skilled frontend engineer capable of building user-friendly, efficient, and scalable web applications, while continuously learning new tools and technologies.",
  },
];

function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="container">
      <div className="main-content accordion-app">
        <h1>Accordion Component Exercise</h1>
        <div className="accordion-items">
          {faqs.map((faq, index) => (
            <AccordionItem
              currentOpen={currentOpen}
              onOpen={setCurrentOpen}
              number={index}
              title={faq.title}
              text={faq.text}
              key={faq.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ number, title, text, currentOpen, onOpen }) {
  const isOpen = number === currentOpen;

  function handleAccordionToggle() {
    onOpen(isOpen ? null : number);
  }

  return (
    <div className={isOpen ? "accordion-item open" : "accordion-item"}>
      <div className="accordion-head" onClick={handleAccordionToggle}>
        <span>
          <p className="accordion-number">
            {number < 9 ? `0${number + 1}` : `${number + 1}`}
          </p>
          <p className="accordion-title">{title}</p>
        </span>
        <p className="accordion-icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && (
        <div className="accordion-body">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
