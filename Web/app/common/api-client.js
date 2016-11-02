import axios from 'axios';

class Api {
    static getInstance(apiUrl) {
        let url = apiUrl;
        if (url.substr(url.length - 1, 1) !== '/') {
            url += '/';
        }
        return axios.create({
            baseURL: url,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
    }
}

export default Api;
