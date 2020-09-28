import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import './style.css';

export default function Home() {
  return (
    <div className='main'>
      <Header />
      <main className='main-container'>
        <div className='main-intro'>
          <h1>tasking.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur harum distinctio
            culpa voluptatem ea optio, quia, nam totam veritatis maiores vero adipisci inventore
            tenetur beatae soluta eius ipsa nesciunt. Doloribus?
          </p>
        </div>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
          <label htmlFor='password'>Senha</label>
          <input type='password' id='password' />
          Ainda não tem conta? <Link to='/signup'>Faça seu cadastro!</Link>
          <button type='submit' className='btn'>
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
