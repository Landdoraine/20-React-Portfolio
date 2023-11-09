import React from 'react';

function Project({ title, deployLink, githubLink, image }) {
  const openLinkInNewTab = (link, event) => {
    window.open(link, '_blank').focus();
    event.preventDefault();
  };

  return (
    <div className="project">
      <h3>
        <a href={deployLink} onClick={(e) => openLinkInNewTab(deployLink, e)} rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <a href={deployLink} onClick={(e) => openLinkInNewTab(deployLink, e)} rel="noopener noreferrer">
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="project-links">
        <a href={githubLink} onClick={(e) => openLinkInNewTab(githubLink, e)} rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
