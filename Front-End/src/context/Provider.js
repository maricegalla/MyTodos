import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';
// import api from '../service/api';

function Provider({ children }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [token, setToken] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  const contextValue = {
    emailLogin,
    setEmailLogin,
    token,
    setToken,
    tasks,
    setTasks,
    selectedId,
    setSelectedId,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
