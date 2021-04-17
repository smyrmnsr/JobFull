import  axios  from "axios";
import Base_URL from '../BASE_URL';



const registerPartI = ( email, password,dateOfBirth,role,contactNumber,city)=>{
    return axios.post(Base_URL+"/registration/signup",{
      
        email,
        password,
        dateOfBirth,
        // aici nu stiu daca trebuie harcodat
        role,
        contactNumber,
        city,

    })
};

const registerPartII = (firstName, lastName)=>{
    return axios.post(Base_URL+"/jobhunter", {
        firstName,
        lastName,
    })

}

const login = (username, password)=>{
    return axios.post(Base_URL+"/login",{
        username,
        password,
    })
    .then((response)=>{
        if(response.data.accesToken){
            localStorage.setItem("user", JSON.stringify(response.data));

        }

        return response.data;
    })
}

const logout= ()=>{
    localStorage.removeItem("user");
};

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    registerPartI,
    registerPartII,
    login,
    logout,
    getCurrentUser,
};