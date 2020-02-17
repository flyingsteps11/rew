import axios from 'axios'

class Request {
    constructor() {
        this.apiUrl = '/api';
        this.request = axios.create({
            baseURL: this.apiUrl,
            timeout: 5000,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            withCredentials: false,
        });
    }

    get requestInst() {
        return this.request;
    }
    setToken(token){
        this.request.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
}
const request = new Request();
export default request