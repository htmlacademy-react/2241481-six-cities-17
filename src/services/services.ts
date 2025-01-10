import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  return api;
};

export {createAPI};
