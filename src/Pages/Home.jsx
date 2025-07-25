import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const apps = [
  {
    path: "/devcard",
    emoji: "🧑‍💻",
    name: "Developer Card",
    description: "A simple developer card exercise.",
  },

  {
    path: "/datecounter",
    emoji: "📅",
    name: "Date Counter",
    description: "A date counter exercise",
  },

  {
    path: "/flashcard",
    emoji: "🃏",
    name: "Flash Card",
    description: "A simple flash card exercise.",
  },

  {
    path: "/steps",
    emoji: "🪜",
    name: "Steps Navigation",
    description: "A simple step navigation exercise.",
  },

  {
    path: "/pizzamenu",
    emoji: "🍕",
    name: "Pizza Menu",
    description: "A simple Pizza Menu exercise.",
  },

  {
    path: "/travellist",
    emoji: "✈️",
    name: "Tracel List",
    description: "A simple travel list exercise.",
  },

  {
    path: "/todo",
    emoji: "📝",
    name: "To-Do List App",
    description: "A simple to-do list application to manage tasks.",
  },

  {
    path: "/minicart",
    emoji: "🛒",
    name: "Mini Cart App",
    description: "A simple eCommerce app with cart functionality.",
  },

  {
    path: "/crypto",
    emoji: "🪙",
    name: "Crypto Price",
    description: "A simple crypto price view exercise.",
  },
];

function Home() {
  return (
    <div className="container">
      <div className=" main-content">
        <div className="top-content">
          <h1 className="site-title">React Mini-Projects Showcase</h1>
          <p className="site-description">
            A collection of small applications built to practice while learning
            ⚛️ React. Click on a card to each excercise.
          </p>
        </div>
        <div className="app-container">
          {apps.map((app) => (
            <Link key={app.path} to={app.path} className="app-card">
              <div className="card-content">
                <span className="card-emoji">{app.emoji}</span>
                <span>
                  <h2>{app.name}</h2>
                  <p>{app.description}</p>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
