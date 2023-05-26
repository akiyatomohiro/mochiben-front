import Axios from 'axios'

let baseURL;

if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://mochiben.jp/api';
} else {
    baseURL = 'http://laravel-local/api';
}

const axios = Axios.create({
    baseURL: baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
