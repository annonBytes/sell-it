import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:5001/sell-it-9a549/us-central1/api'
    }
);

export default instance;