import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://peace360.herokuapp.com/api/',

  headers: {
    'x-auth-token': localStorage.getItem('token'),
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export default instance;
