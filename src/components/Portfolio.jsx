import React from 'react';
import Project from './Project';

const projectData = [
  {
    title: "Travel Tracker",
    deployLink: "https://lightoftwelve.github.io/travel-tracker/",
    githubLink: "https://github.com/lightoftwelve/travel-tracker",
    image: "/project-one-travel-tracker.PNG",
  },
  {
    title: "Furniture Flip",
    deployLink: "https://furniture-flip-fa10e6e071c1.herokuapp.com/",
    githubLink: "https://github.com/queendoescode/furniture-flip",
    image: "/project-two-furniture-flip.PNG",
  },
  // More projects to be added (soon)
  // {
  //   title: "",
  //   deployLink: "",
  //   githubLink: "",
  //   image: "",
  // },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
              <Project {...project} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
