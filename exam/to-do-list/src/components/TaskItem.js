import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask,editTask } from '../reducer/taskActions';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);

  const onDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const onToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = () => {
    dispatch(editTask(task)); 
  };

  const { id, title, deadline, description, tags, priority, completed } = task;

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)} 
      />
      <div>
        <h3>{title}</h3>
        <p>Deadline: {deadline}</p>
        <p>Description: {description}</p>
        <p>Tags: {tags.join(', ')}</p>
        <p>Priority: {priority}</p>
      </div>
      <button onClick={() => onDelete(id)}>Видалити</button>
      <button onClick={handleEdit}>Редагувати</button>
    </div>
  );
}

export default TaskItem;