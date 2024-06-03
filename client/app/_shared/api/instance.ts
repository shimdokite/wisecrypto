import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EC2_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
