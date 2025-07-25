import "./DevCard.css";
import Image from "./card-img.png";

const developers = [
  {
    name: "Stephen Obayuwana",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/001.png",
    skills: [
      {
        skill: "React",
        level: "pro",
      },
      {
        skill: "JavaScript",
        level: "beg",
      },
      {
        skill: "HTML",
        level: "pro",
      },
      {
        skill: "CSS",
        level: "adv",
      },
      {
        skill: "GitHub",
        level: "adv",
      },
      {
        skill: "WordPress",
        level: "pro",
      },
    ],
  },
  {
    name: "Wura Adedara",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/006.png",
    skills: [
      {
        skill: "Ruby",
        level: "beg",
      },
      {
        skill: "WordPress",
        level: "adv",
      },
      {
        skill: "Python",
        level: "pro",
      },
      {
        skill: "Website Design",
        level: "adv",
      },
      {
        skill: "SQL",
        level: "adv",
      },
    ],
  },
  {
    name: "Johnson Peter",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/002.png",
    skills: [
      {
        skill: "Videography",
        level: "adv",
      },
      {
        skill: "Photoshop",
        level: "beg",
      },
      {
        skill: "Corel Draw",
        level: "pro",
      },
      {
        skill: "CapCut",
        level: "adv",
      },
    ],
  },
  {
    name: "Daniel Elliot",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/003.png",
    skills: [
      {
        skill: "Photography",
        level: "pro",
      },
      {
        skill: "Canva",
        level: "beg",
      },
      {
        skill: "Photoshop",
        level: "beg",
      },
      {
        skill: "Corel Draw",
        level: "pro",
      },
      {
        skill: "CapCut",
        level: "adv",
      },
    ],
  },
  {
    name: "Tolu Taju",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/004.png",
    skills: [
      {
        skill: "Figma",
        level: "beg",
      },
      {
        skill: "Adobe Illustrator",
        level: "adv",
      },
      {
        skill: "Filmora",
        level: "pro",
      },
      {
        skill: "Camtasia",
        level: "beg",
      },
      {
        skill: "Corel Draw",
        level: "adv",
      },
    ],
  },
  {
    name: "Emmanuella Osifo",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur alias maiores enim ipsum dolore, nemo architecto distinctio temporibus libero?",
    avatar: "./assets/DevCard/005.png",
    skills: [
      {
        skill: "Ruby",
        level: "pro",
      },
      {
        skill: "Svelte",
        level: "beg",
      },
      {
        skill: "Python",
        level: "pro",
      },
      {
        skill: "VB .Net",
        level: "adv",
      },
      {
        skill: "Website Design",
        level: "beg",
      },
    ],
  },
];

function DevCard() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="cards">
          {developers.map((dev, index) => (
            <Card
              key={index}
              name={dev.name}
              bio={dev.bio}
              avatar={dev.avatar}
              skills={dev.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ avatar, name, bio, skills }) {
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="description">
        <div className="intro">
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
        <div className="skills">
          <ul>
            {skills.map((skill, index) => {
              const bgColor =
                skill.level === "beg"
                  ? "red"
                  : skill.level === "pro"
                  ? "green"
                  : "purple";
              const emoji =
                skill.level === "beg"
                  ? "👶"
                  : skill.level === "pro"
                  ? "👍"
                  : "💪";

              return (
                <li
                  className="skill-level"
                  key={index}
                  style={{ backgroundColor: bgColor }}
                >
                  {skill.skill} {emoji}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
