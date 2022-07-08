import axios from 'axios';
const api = axios.create({
    baseURL: 'https://i8b7ahkj72.execute-api.us-east-1.amazonaws.com/baecafe'
});
export default api;