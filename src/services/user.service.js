import axios from "axios";
import BASE_URL from '../BASE_URL';
import authHeader from "./auth-header";


const getPublicContent = ()=>{
    return axios.get(BASE_URL+"/jobs");
}

// aici sunt 
