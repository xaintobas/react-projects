import { Car } from "lucide-react";
import React, { useState } from "react";
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

const Accordion = () => {
  const [open, setOpen] = useState(0);

  const handleToogle = (number) => {
    setOpen((o) => (o == number ? null : number));
  };

  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">Accordion</h1>
        <p className="mt-2 text-[18px]">A simple Accordion project.</p>
      </div>
      <div className="my-0 mx-auto w-full md:max-w-150">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            faq={faq}
            number={index}
            onToggle={handleToogle}
            open={open}
          />
        ))}
      </div>
    </>
  );
};

const Card = ({ faq, number, onToggle, open }) => {
  const currentlyOpened = open === number;
  return (
    <div
      className={`flex flex-col gap-y-4 bg-[#1e293b] pt-4 ${currentlyOpened ? "pb-5" : ""} px-5 ${currentlyOpened ? "rounded-b-lg" : ""} ${currentlyOpened ? "border-t-4" : ""} border-[#4c7abd] mt-8`}
    >
      <div
        onClick={() => onToggle(number)}
        className="flex justify-between text-[20px] font-bold cursor-pointer"
      >
        <div
          className={`flex items-center gap-x-4 mr-8 ${currentlyOpened ? "text-[#3475d8]" : "text-slate-200"}`}
        >
          <h2 className={`${currentlyOpened ? "" : "text-slate-500"}`}>
            {number <= 9 ? `0${number + 1}` : number}
          </h2>
          <h2>{faq.title}</h2>
        </div>
        <div>{currentlyOpened ? "-" : "+"}</div>
      </div>
      <div>
        {currentlyOpened && (
          <p className={`text-[18px] text-slate-300`}>{faq.text}</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
