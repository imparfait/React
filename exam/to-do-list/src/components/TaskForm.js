import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TaskForm.css';
import {addTask} from '../reducer/taskActions';

function TaskForm({ tasks }) {
  const [task, setTask] = useState({ id: uuidv4(), title: '', deadline: '', description: '', tags: [], priority: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!task.title.trim() || !task.deadline.trim() || !task.description.trim() || !task.priority) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }
    addTask(task);
    setTask({ title: '', deadline: '', description: '', tags: [], priority: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Назва справи"
        required
      />
      <input
        type="datetime-local"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Опис справи"
      />
      <input
        type="text"
        name="tags"
        value={task.tags}
        onChange={handleChange}
        placeholder="Теги"
      />
      <label name="priority" >Виберіть пріоритет:</label>
      <select name="priority" value={task.priority} onChange={handleChange}>
        {/*<option value=""></option>*/}
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
      <button type="submit" onClick={handleSubmit}>Додати справу</button>
    </form>
  );
}

export default TaskForm;