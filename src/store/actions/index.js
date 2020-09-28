export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task,
  };
};

export const showMessage = () => {
  return {
    type: 'SHOW_MESSAGE',
  };
};

export const hideMessage = () => {
  return {
    type: 'HIDE_MESSAGE',
  };
};
