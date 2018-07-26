import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({
    baseURL: "/",
    timeout: 10000,
    responseType: "json",
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"OPTIONS, GET, POST",
        "Access-Control-Allow-Headers":"x-requested-with",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});
const data =  {userid: "3FE65691ADDE084D8F6AECCDF770CEC97B8D", token: "2784b1c4-f14c-45e8-931b-f44f3f7d77e4"}

Axios.interceptors.request.use(
    config => {
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            // config.data = qs.stringify(config.data);
            config.data = {
                ...config.data,
                date:Date.parse(new Date())/1000
            }
        }
        console.log(config)
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error);
    }
);

export default Axios