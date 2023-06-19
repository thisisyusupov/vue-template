// import axios from "axios";
// const onRecuestSeccues = config =>{
//     const token = localStorage.getItem("market-tokken")
//     const url_server = "http://localhost:9090/";
//     if (token){
//         if (!config.headers){
//             config.headers = {}
//         }
//         config.headers.Authorization = `Bearer ${token}`;
//         config.url = `${url_server}${config.url}`
//         return config;
//     }
// };
// const setAxiosInter = onUnauthenticated => {
//     const onResponseError = err =>{
//         const status = err.status
//         if (status == 403 || status == 402){
//             onUnauthenticated();
//         }
//         return Promise.reject(err)
//     };
//     if (axios.interceptors){
//         axios.interceptors.request.use(onRecuestSeccues);
//         axios.interceptors.response.use(res => res, onResponseError);
//     }
// }
// export {onRecuestSeccues, setAxiosInter}
