import React from "react";
import developers from "./developers.js";

const DevCard = () => {
  return (
    <>
      <div className="text-slate-300 text-center">
        <h1 className="text-[#679ff5] font-bold text-3xl">
          Developer Profile Card
        </h1>
        <p className="mt-2 text-[18px]">A simple develper profile card.</p>
      </div>
      <div className="my-0 mx-auto">
        <Developers />
      </div>
    </>
  );
};

const Developers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {developers.map((developer) => (
        <DeveloperCard key={developer.name} developer={developer} />
      ))}
    </div>
  );
};

const DeveloperCard = ({ developer: { name, bio, avatar, skills } }) => {
  return (
    <div className="bg-[#1e293b] rounded-b-lg pb-5 hover:scale-103 duration-300 hover:shadow-2xs hover:shadow-[#3a67aa] max-w-100">
      <img src={avatar} alt="" className="rounded-t-lg" />
      <div className="px-8 py-5">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-slate-300 text-[15px] mt-3 mb-5">{bio}</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={`${skill.skill}${skill.level}`}
              className={`${
                skill.level === "beg"
                  ? "bg-red-400"
                  : skill.level === "pro"
                    ? "bg-green-400"
                    : "bg-purple-400"
              } px-2 py-1 rounded font-bold text-[12px]`}
            >
              <span>{skill.skill}</span>
              <span>
                {skill.level === "beg"
                  ? " 👶"
                  : skill.level === "pro"
                    ? " 👍"
                    : " 💪"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
