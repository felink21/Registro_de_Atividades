import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.10:3000'
    //baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default api;