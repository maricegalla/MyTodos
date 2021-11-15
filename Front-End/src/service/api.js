import axios from 'axios';

// require('dotenv').config();

const URL = 'http://localhost:3001' || 'https://mytodosback.herokuapp.com';

const api = axios.create({
  baseURL: URL,
});

export default api;
