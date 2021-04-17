import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin=()=>{
        props.history.push('/jobhunter-profile/8741fb89-571f-48c0-b148-9b36c299b083');


            
            axios.post("http://localhost:8080/api/v1/login",{
                    email,
                    password              
            })

    }
    return ( 
    <>
        <div className="relative">
        <img src="https://images.unsplash.com/photo-1616560091035-863cdf9e23e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="absolute inset-0 object-cover w-full h-full" alt="" />
        <div className="relative bg-gray-900 bg-opacity-80">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Find your dream job <br className="hidden md:block" />
                    on the <span className="text-teal-accent-400">number one job platform in Romania</span>
                </h2>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm" >
                    <h2 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Please Sign In
                    </h2>
                    <form onSubmit= { handleLogin }
                        className="flex flex-col" 
                        method="POST" 
                        action="#"
                    >
                    <div className="mb-1 sm:mb-2">
                        <label for="email" className="inline-block mb-1 font-medium">E-mail</label>
                        <input
                        placeholder="email@email.com"
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="username"
                        onChange={onChangeEmail}
                        />
                    </div>
                    <div className="mb-1 sm:mb-2">
                        <label for="password" className="inline-block mb-1 font-medium">Password</label>
                        <input
                        placeholder="Enter your password"
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        onChange={onChangePassword}
                        />
                    </div>
                    <button 
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                        type="submit">
                            Sign In
                    </button>
                    </form>
                    <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                        <p >Don't have an account? <NavLink to={"/register"} className="font-bold hover:underline" exact activeStyle={{color:'#E4FF1A'}}>Sign up</NavLink>.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>

    );
}

export default Login;