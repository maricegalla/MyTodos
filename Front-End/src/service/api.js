import axios from 'axios';

require('dotenv').config();

const { URL } = process.env;

const api = axios.create({
  baseURL: URL,
});

export default api;
