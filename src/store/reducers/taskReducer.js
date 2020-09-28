export default function taskReducer(state = [], action) {
  if (action.type === 'ADD_TASK') {
    return [...state, action.task];
  }
  return state;
}
