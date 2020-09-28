import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './../../components/Header';

import './style.css';

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className='dash'>
      <Header />
      <div className='dash-container'>
        <header>
          <div>
            <h2>Tarefas</h2>
          </div>
          <div className='filtro'>
            <span>Filtrar:</span>
            <input type='radio' id='todos' name='filtro' value='todos' defaultChecked />
            <label htmlFor='todos'>Todos</label>
            <input type='radio' id='concluido' name='filtro' value='concluido' />
            <label htmlFor='concluido'>Concluído</label>
            <input type='radio' id='pendente' name='filtro' value='pendente' />
            <label htmlFor='pendente'>Pendente</label>
          </div>
          <div className='taskRegister'>
            <Link to='/taskregister'>Criar nova tarefa</Link>
          </div>
        </header>
        <section>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className='task'>
                <div className='task-info'>
                  <h1>{task.taskName}</h1>
                  <p>
                    entrega: {task.taskInitial} concluído: {task.taskClose}
                  </p>
                  <div className='buttons'>
                    <button>editar</button>
                    <button>excluir</button>
                    <button>visualizar</button>
                    <button>concluir</button>
                  </div>
                </div>

                {/* <div className='task-content'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa
                  exercitationem aspernatur unde, sapiente soluta sed possimus voluptates optio
                  harum fugiat aperiam ex quidem accusamus expedita obcaecati saepe! Officiis, a?
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa
                  exercitationem aspernatur unde, sapiente soluta sed possimus voluptates optio
                  harum fugiat aperiam ex quidem accusamus expedita obcaecati saepe! Officiis, a?
                </div> */}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
