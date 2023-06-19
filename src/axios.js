import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:9090/api/',
    headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        accept: "*/*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true,
        expires: "0",
        "cache-control": "no-cache,no-store,max-age=0,must-revalidate",
        pragma: "no-cache",
    }
})

export default http;
