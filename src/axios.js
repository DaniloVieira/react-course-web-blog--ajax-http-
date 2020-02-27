import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Autrhorization'] = 'AUTH TOKEN FROM INSTANCE';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// instance.interceptors.request...

export default instance;
