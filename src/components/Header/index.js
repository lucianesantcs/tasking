import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <h1>
            <Link to='/'>tasking.</Link>
          </h1>
        </div>
        <nav className='header-nav'>
          <ul>
            <li>
              <Link to='/'>Entrar</Link>
            </li>
            <li>
              <Link to='/signup'>Cadastrar</Link>
            </li>
            <li>
              <Link to='/dashboard'>username</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
