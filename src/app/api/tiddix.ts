/* eslint-disable prettier/prettier */
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_TIDDIX_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const apiPrivate = axios.create({
  baseURL: `${import.meta.env.VITE_APP_TIDDIX_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
