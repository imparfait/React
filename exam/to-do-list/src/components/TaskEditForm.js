import React, { useState } from 'react';

function TaskEditForm({ task, onSave }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
        placeholder="Назва справи"
        required
      />
      <input
        type="datetime-local"
        name="deadline"
        value={editedTask.deadline}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
        placeholder="Опис справи"
      />
      <input
        type="text"
        name="tags"
        value={editedTask.tags}
        onChange={handleChange}
        placeholder="Теги"
      />
      <label name="priority">Виберіть пріоритет:</label>
      <select name="priority" value={editedTask.priority} onChange={handleChange}>
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
      <button type="submit">Зберегти зміни</button>
    </form>
  );
}

export default TaskEditForm;