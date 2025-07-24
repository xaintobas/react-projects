import "./DevCard.css";
import Image from "./card-img.png";

const developers = [
  {
    name: "Stephen Obayuwana",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./card-img.png",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "John Obayuwana",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./card-img.png",
    skills: ["Ruby", "c#", "Python", "C++"],
  },
  {
    name: "Osas Obayuwana",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./card-img.png",
    skills: ["Videography", "Photoshop", "Corel Draw"],
  },
];

function DevCard() {
  return (
    <div className="main-content">
      <div className="cards">
        {developers.map((dev) => (
          <Card key={dev.name} />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return <img className="avatar" src={Image} alt="my avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Stephen Obayuwana</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        tenetur alias maiores enim ipsum dolore, nemo architecto distinctio
        temporibus libero?
      </p>
    </>
  );
}

function SkillList() {
  return (
    <>
      <Skill />
    </>
  );
}

export default DevCard;
