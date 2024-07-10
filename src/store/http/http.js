import axios from 'axios';

const API_URL = (process.env.NODE_ENV === 'production') 
    ? 'https://fhvuzbhvl4.execute-api.us-east-1.amazonaws.com' 
    : 'http://localhost:3000';

export const $http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    },
});