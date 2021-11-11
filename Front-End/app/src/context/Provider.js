import React, { useState } from 'react';
import { node } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [token, setToken] = useState('');
  const contextValue = {
    emailLogin,
    setEmailLogin,
    token,
    setToken,
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
