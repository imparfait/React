import {React,useState} from 'react';
import TaskItem from './TaskItem';
import TaskEditForm from './TaskEditForm';
import {editTask} from '../reducer/taskActions';
import {  useDispatch } from 'react-redux';


function TaskList({tasks}) {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false); // Стан для відображення форми редагування
  const [editingTask, setEditingTask] = useState(null);
  const handleEdit = (task) => {
    setEditingTask(task); 
    setShowEditForm(true);
  };
  const handleSave = (editedTask) => {
    dispatch(editTask(editedTask.id, editedTask));
    setShowEditForm(false);
  };
  return (
    <div>
        {showEditForm && (
        <TaskEditForm task={editingTask} onSave={handleSave} />
      )}
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={() => handleEdit(task)}/>
        ))}
      </div>
    </div>
  );
}

export default TaskList;