import {setAxiosInter} from "./axios-interceptor";

export function initVueApp(vue){
    setAxiosInter(() =>console.log("Unauthorized!"))
}
