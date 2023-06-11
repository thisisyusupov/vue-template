import axios from "axios";

const http = axios.create({
    baseURL: 'http://3.83.148.111:9090/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

export default http;
