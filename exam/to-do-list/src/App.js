import React, { useState } from 'react';
import './App.css';
import { Link, useLocation,Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import ProjectList from './components/ProjectList';
import TaskPage from './components/TaskPage';
import TaskForm from './components/TaskForm';
import ProjectForm from './components/ProjectForm';
import ProjectPage from './components/ProjectPage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);  

  const location = useLocation();
  const isTaskPage = location.pathname === '/';
  const isProjectPage = location.pathname === '/projects';

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
  return (
    <div className="app">
       <header>
        <h1>Список справ</h1>
        <nav>
        <ul>
          <li>
          <Link to="/" activeClassName="active">Завдання</Link>
          </li>
          <li>
            <Link to="/projects" activeClassName="active">Проєкти</Link>
          </li>
        </ul>
      </nav>
      {isTaskPage && (
            <div className="header-buttons">
              <button className="add-button" onClick={() => setShowTaskForm(!showTaskForm)}>Додати нове завдання</button>
            </div>
          )}
          {isProjectPage && (
            <div className="buttons">
              <button className="add-button" onClick={() => setShowProjectForm(!showProjectForm)}>Додати новий проєкт</button>
            </div>
          )}
      </header>
      <Routes>
      <Route path="/" element={<TaskPage tasks={tasks}/>} />
      <Route path="/projects" element={<ProjectPage projects={projects}/>} />
      </Routes>
      {showProjectForm && <ProjectForm addProject={addProject} />}
      {showTaskForm && <TaskForm addTask={addTask} />}
    </div>

  );
}

export default App;