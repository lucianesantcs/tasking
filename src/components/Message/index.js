import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';

export default function Message() {
  const isShow = useSelector((state) => state.message.showMessage);
  return <>{isShow ? <div className='alert-message'>Salvo com sucesso!</div> : ''}</>;
}
