import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com', // API URL
});

export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

