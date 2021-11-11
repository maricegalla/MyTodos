import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../../context/Context';
import Header from './components/Header';

function Todo() {
  const {
    emailLogin,
  } = useContext(Context);
  return (
    <>
      <Header />
      <Form.Label>{emailLogin}</Form.Label>
    </>
  );
}

export default Todo;
