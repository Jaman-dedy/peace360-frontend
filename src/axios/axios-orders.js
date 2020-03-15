import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
  headers: {
    'x-auth-token': localStorage.getItem('token'),
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default instance;
