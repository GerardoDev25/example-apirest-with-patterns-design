import { default as axios } from 'axios';

const instance = axios.create({
  baseURL: 'jsonplaceholder.typicode.com',
});

export default instance;
