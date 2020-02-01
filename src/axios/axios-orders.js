import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://peace360.herokuapp.com/api/'
});

export default instance;
