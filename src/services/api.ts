import axios from 'axios';
import openSocket from 'socket.io-client';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const socket = openSocket();

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export { api, baseURL, socket };
