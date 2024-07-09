import axios from 'axios';

const API_URL = (process.env.NODE_ENV === 'production') 
    ? 'http://3.18.14.60/api' 
    : 'http://localhost:3000';

export const $http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    },
});