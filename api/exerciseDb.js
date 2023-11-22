import axios from 'axios';
import { apiKey } from '../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';


const apicall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data;


    } catch (error) {
        console.log('error' + error.message);
    }
}

export const fetchBodypart = async (bodyPart) => {
    const data = await apicall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}