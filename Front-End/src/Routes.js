import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Todo from './pages/Todo/Todo';
import CreateTodo from './pages/Todo/CreateTodo';
import ViewTodo from './pages/Todo/ViewTodo';
import EditTodo from './pages/Todo/EditTodo';

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/todo" element={<Todo />} />
      <Route exact path="/todo/create" element={<CreateTodo />} />
      <Route exact path="/todo/view" element={<ViewTodo />} />
      <Route exact path="/todo/edit/:id" element={<EditTodo />} />
    </Routes>
  );
}

export default MyRoutes;
