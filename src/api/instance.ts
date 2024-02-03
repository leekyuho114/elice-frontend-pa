import axios from 'axios';
// process.env.BASE_URL
const BASE_URL = 'https://api-rest.elice.io';
export const instance = axios.create({
  baseURL: BASE_URL,
});
