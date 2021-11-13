import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';
// import api from '../service/api';

function Provider({ children }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [token, setToken] = useState('');
  const [tasks, setTasks] = useState([]);

  // const getTasks = async () => {
  //   const data = await api.get('/todo', { headers: { Authorization: token } });
  //   const allTasks = data.data;
  //   setTasks(allTasks);
  // };

  // useEffect(() => {
  //   getTasks();
  // }, [token]);

  const contextValue = {
    emailLogin,
    setEmailLogin,
    token,
    setToken,
    tasks,
    setTasks,
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
