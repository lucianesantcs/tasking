import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  tasks: taskReducer,
  message: messageReducer,
});
