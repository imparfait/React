import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../reducer/projectActions';

function ProjectItem({ project }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(project.id));
  };

  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={handleDelete}>Видалити</button>
    </div>
  );
}

export default ProjectItem;