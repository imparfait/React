import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ProjectForm.css';
import {addProject} from '../reducer/projectActions';

function ProjectForm({ projects}) {
    const [project, setProject] = useState({ id: uuidv4(), name: '', description: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProject({ ...project, [name]: value });
    };
  
    const handleSubmit = (e) => {
      if (!project.name.trim() || !project.description.trim()) {
        alert('Будь ласка, заповніть всі поля');
        return;
      }
      e.preventDefault();
      addProject(project);
      setProject({ name: '', description: '' });
    };
  
    const handleClearForm = () => {
      setProject({ name: '', description: '' });
    };
  
    return (
      <form className="project-form">
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="Назва проєкту"
          required
          className="form-field"
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Опис проєкту"
          className="form-field"
        />
        <button type="submit" className="submit-btn" onClick={handleSubmit}>Створити проєкт</button>
        <button type="button" className="clear-btn" onClick={handleClearForm}>Очистити форму</button>
      </form>
    );
  }
  
  export default ProjectForm;