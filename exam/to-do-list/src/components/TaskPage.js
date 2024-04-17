import {React,useState} from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { useSelector, useDispatch } from 'react-redux';

function TaskPage(tasks) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('Всі');

  if (!tasks || !Array.isArray(tasks)) {
    return (<p>Не має завдань</p>);
  }
  const handlePriorityFilterChange = (e) => {
    setPriorityFilter(e.target.value);
  };
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    const isTitleMatch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const isDescriptionMatch = task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const isTagMatch = task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const isPriorityMatch = priorityFilter === 'Всі' || task.priority === priorityFilter;

    return isTitleMatch || isDescriptionMatch || isTagMatch || isPriorityMatch;
  });

  return (
    <div>
        <h2>Список завдань</h2>        
        <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
        <select value={priorityFilter} onChange={handlePriorityFilterChange}>
        <option value="Всі">Всі</option>
        <option value="Низький">Низький</option>
        <option value="Середній">Середній</option>
        <option value="Високий">Високий</option>
        </select>
        <div className="task-list">
        <TaskList tasks={filteredTasks} />
        </div>
    </div>
  );
};

export default TaskPage;