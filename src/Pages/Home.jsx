import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const apps = [
  {
    name: "To-Do List App",
    path: "/todo",
    description: "A simple to-do list application to manage tasks.",
  },
  {
    name: "Mini Cart App",
    path: "/minicart",
    description: "A simple eCommerce app with cart functionality.",
  },
];

function Home() {
  return (
    <div className="main-content">
      <h1>Welcome</h1>
      <p>This is a collection of my React projects.</p>
      <div className="projects">
        {apps.map((app) => (
          <Link key={app.path} to={app.path}>
            <h2>{app.name}</h2>
            <p>{app.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
