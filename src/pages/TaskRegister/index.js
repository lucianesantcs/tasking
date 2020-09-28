import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../store/reducers/taskReducer';
import { showMessage, hideMessage } from '../../store/reducers/messageReducer';

import Header from '../../components/Header';
import Message from '../../components/Message';
import './style.css';

export default function TaskRegister() {
  const [task, setTask] = useState({ taskName: '', task: '', taskInitial: '', taskClose: '' });
  const dispatch = useDispatch();

  function taskChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();

    dispatch(addTask(task));

    setTask({ taskName: '', task: '', taskInitial: '', taskClose: '' });
    dispatch(showMessage());
    setTimeout(() => {
      dispatch(hideMessage());
    }, 2500);
  }

  return (
    <div className='register-task'>
      <Header />
      <div className='register-task-container'>
        <h1>Nova tarefa</h1>
        <Message />
        <form onSubmit={onSubmit}>
          <div className='input-group'>
            <label htmlFor='taskName'>Nome da tarefa</label>
            <input
              type='text'
              name='taskName'
              id='taskName'
              onChange={taskChange}
              value={task.name}
            />
          </div>
          <div className='input-group'>
            <textarea
              name='task'
              id='task'
              cols='30'
              rows='5'
              onChange={taskChange}
              value={task.name}
            ></textarea>
          </div>

          <div className='input-group'>
            <label htmlFor='taskInitial'>Data de entrega</label>
            <input
              type='date'
              name='taskInitial'
              id='taskInitial'
              onChange={taskChange}
              value={task.name}
            />
          </div>

          <div className='input-group'>
            <label htmlFor='taskClose'>Data de conclusão</label>
            <input
              type='date'
              name='taskClose'
              id='taskClose'
              onChange={taskChange}
              value={task.name}
            />
          </div>
          <button type='submit' className='btn'>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
