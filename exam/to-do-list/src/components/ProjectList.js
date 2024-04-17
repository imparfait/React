import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const projects = [];

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;