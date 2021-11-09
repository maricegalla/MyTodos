import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;