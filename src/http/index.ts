import axios from 'axios';
import {env} from 'process'

const apikey = env.API_KEY;

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apikey}`
    }
})