import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';

import './style.css';

export default function SignUp() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    born: '',
    cpf: '',
    zipCode: '',
    addressNumber: '',
    streetName: '',
    neighborhood: '',
    password: '',
  });

  function registerChange(e) {
    setRegister({ ...register, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(register);
  }

  return (
    <div className='signup'>
      <Header />
      <main className='signup-container'>
        <div className='signup-intro'>
          <h1>faça seu cadastro.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur harum distinctio
            culpa voluptatem ea optio, quia, nam totam veritatis.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <label htmlFor='name'>Nome Completo</label>
          <input type='text' name='name' id='name' onChange={registerChange} />

          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' onChange={registerChange} />

          <div className='input-group'>
            <label htmlFor='born'>Data de Nascimento</label>
            <input type='text' name='born' id='born' onChange={registerChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='cpf'>CPF</label>
            <input type='text' name='cpf' id='cpf' onChange={registerChange} />
          </div>

          <div className='input-group'>
            <label htmlFor='zipCode'>CEP</label>
            <input type='text' name='zipCode' id='zipCode' onChange={registerChange} />
          </div>

          <div className='input-group'>
            <label htmlFor='addressNumber'>Numero</label>
            <input type='text' name='addressNumber' id='addressNumber' onChange={registerChange} />
          </div>

          <div className='input-group'>
            <label htmlFor='streetName'>Rua</label>
            <input type='text' name='streetName' id='streetName' onChange={registerChange} />
          </div>
          <div className='input-group'>
            <label htmlFor='neighborhood'>Bairro</label>
            <input type='text' name='neighborhood' id='neighborhood' onChange={registerChange} />
          </div>

          <label htmlFor='password'>Senha</label>
          <input type='text' name='password' id='password' onChange={registerChange} />

          <button type='submit' className='btn'>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
