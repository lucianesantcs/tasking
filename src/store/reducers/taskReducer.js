//reducers
// const INITIAL_STATE = [
//   {
//     id: Math.random(),
//     taskName: 'task 1',
//     taskInitial: '02/09/2020',
//     taskClose: '10/09/2020',
//   },
// ];

export default function taskReducer(state = [], action) {
  if (action.type === 'ADD_TASK') {
    return [...state, action.task];
  }
  return state;
}

//actions
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task,
  };
};
