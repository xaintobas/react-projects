import React from "react";
import ProjectData from "../projects.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">
          React Mini-Projects Showcase
        </h1>
        <p className="mt-2 text-[18px]">
          A collection of small applications built to practice while learning ⚛️
          React. Click on a card to each excercise.
        </p>
      </div>
      <div className="">
        <Projects />
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {ProjectData.map((projectObj) => (
        <Project key={projectObj.id} projectObj={projectObj} />
      ))}
    </ul>
  );
};

const Project = ({ projectObj: { url, title, description, emoji } }) => {
  return (
    <li className="bg-[#1e293b] rounded-lg hover:scale-103 hover:shadow-2xs hover:shadow-[#3a67aa] transition-transform duration-500 text-slate-200">
      <Link to={url} className="flex items-center py-6 px-5  gap-x-3 h-full">
        <div className="text-2xl">{emoji}</div>
        <div>
          <h3 className="text-[1.2rem] font-bold">{title}</h3>
          <p className="text-[1rem] font-normal">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default Home;
