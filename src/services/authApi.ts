import axios from 'axios';

export const apiAuth = (token?: string) => {
  const api = axios.create({
    baseURL: 'https://servidor-70.herokuapp.com',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return api;
};
