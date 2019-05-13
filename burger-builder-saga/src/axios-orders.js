import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a9c5f.firebaseio.com/'
});

export default instance;