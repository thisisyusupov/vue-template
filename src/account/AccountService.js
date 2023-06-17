import axios from 'axios'
import store from './Store'
export default class AccountService {
    constructor(router) {
        this.router = router;
        this.init();
    }
    init(){
        const token = localStorage.getItem("market-token") || sessionStorage.getItem("market-token")
        if (!store.getters.account && !store.getters.logon && token){
            this.retrieveAccount()
        }
    }
    retrieveAccount() {
        store.commit("authenticate")
        axios
            .get("api/account")
            .then(response=>{
                const account = response.data;
                if (account){
                    store.commit("authenticate", account);
                    if (sessionStorage.getItem("request-url")){
                        this.router.replace(sessionStorage.getItem("request-url"));
                        sessionStorage.removeItem("request-url")
                    }
                }else {
                    store.commit("logout")
                    this.router.push("/")
                    sessionStorage.getItem("request-url")
                    sessionStorage.getItem("market-token")
                }
            })
            .catch(()=>{
                store.commit("logout");
                this.router.push("/")
            })
    }
}
