import React from 'react';


const projects = [
  {
    title: 'StopWatch using React',
    description: 'I created a React application that functions as a stopwatch, allowing users to start, stop, and reset the timer. The application displays the elapsed time in a user-friendly format.',
    link: 'https://github.com/SmritiManikand/React-ToDoList.git',
    image: '/assets/images/project-one.jpg'
  },
  {
    title: 'To Do List using React',
    description: 'I created an app to display tasks and it has options to mark it as completed, edit the task text, and remove the task from the list.',
    link: 'https://github.com/SmritiManikand/React-StopWatch',
    image: '/assets/images/project-two.jpg'
  }
];

function ProjectCard() {
  return (
    <div className="project-card-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
