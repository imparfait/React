import { createStore, combineReducers } from 'redux';
import taskReducer from './reducer/taskReducer';
import projectReducer from './reducer/projectReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  projects: projectReducer,
});

const store = createStore(rootReducer);

export default store;