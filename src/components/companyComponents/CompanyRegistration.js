import React, { Component,useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
import authService from '../../services/auth.service';

const CompanyRegistration = () => {
    
    const [name, setName] = useState("");
    const [cui, setCui] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [j, setJ] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [role, setRole] = useState("COMPANY");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };

    const onChangeJ = (e) => {
        const j = e.target.value;
        setJ(j);
    };

    const onChangeCui = (e) => {
        const cui = e.target.value;
        setCui(cui);
    };


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

    
    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
      };

      const onChangeCountry = (e) => {
        const country = e.target.value;
        setCountry(country);
      };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    const onChangephone_number = (e) => {
        const phone_number = e.target.value;
        setPhoneNumber(phone_number);
      };


    const handleRegister=(e)=>{
        e.preventDefault()


            axios.all([
            axios.post("http://localhost:8080/api/v1/registration/signup",{
                email,
                password,
                phone_number,
                city,
                country,
                role
                

            }),
            axios.post("http://localhost:8080/api/v1/companies",{
                name,
                j,
                cui,
                city
            }),
            ])
            .then(axios.spread((req1, req2) => {
                // output of req.
                console.log(req1, req2)
            }));

    }

    return (
      <>
        <section class='bg-gray-300 '>
            <div class="flex flex-wrap">
                <div class="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
                <div class="max-w-md mx-auto">
                    
                    <div>
                    <div class="mb-6 px-3">
                        <span class="text-gray-500">Welcome to .JobFull</span>
                        <h3 class="text-2xl font-bold">Create an account</h3>
                    </div>
                    <form onSubmit={handleRegister} 
                            className="flex flex-col " 
                            method="POST" 
                            action="#">
                        <div class="mb-3 flex p-4 mx-2 bg-gray-200 rounded">
                            <input 
                                class="w-full text-xs bg-gray-200 outline-none" 
                                type="text"
                                name="name" 
                                placeholder="Company Name"
                                onChange={onChangeName}
                                required
                        />
                        </div>
                        <div class="flex flex-wrap">
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="cui" 
                                
                                placeholder="Unique Registratin Code"
                                onChange={onChangeCui}
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="j" 
                                
                                placeholder="Trade Register Serial Number"
                                onChange={onChangeJ}
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="address" 
                                
                                placeholder="Street and Number"
                                onChange={onChangeAddress}
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="phone_number" 
                                
                                placeholder="Phone Number"
                                onChange={onChangephone_number}
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="city" 
                                
                                placeholder="City"
                                onChange={onChangeCity}
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="country" 
                                
                                placeholder="Country"
                                onChange={onChangeCountry}
                            />
                        </div>
                        </div>
                        
                        <div class="mb-3 flex p-4 mx-2 bg-gray-200 rounded">
                        <input 
                            class="w-full text-xs bg-gray-200 outline-none" 
                            type="email"
                            name="email" 
                            placeholder="name@email.com"
                            required
                            onChange={onChangeEmail}
                        />
                        <svg 
                            class="h-6 w-6 ml-4 my-auto text-gray-300" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">                                   
                            </path>
                        </svg>
                        </div>
                        <div class="mb-6 flex p-4 mx-2 bg-gray-200 rounded">
                            <input 
                                class="w-full text-xs bg-gray-200 outline-none" 
                                type="password" 
                                placeholder="Enter your password"
                                onChange={onChangePassword}
                            />
                        <button>
                            <svg 
                                class="h-6 w-6 ml-4 my-auto text-gray-300" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                </path>
                            </svg>
                        </button>
                        </div>
                        <div class="mb-6 flex p-4 mx-2 bg-gray-200 rounded">
                            <input 
                                class="w-full text-xs bg-gray-200 outline-none" 
                                type="password" 
                                placeholder="Retype your password"
                            />
                        <button>
                            <svg 
                                class="h-6 w-6 ml-4 my-auto text-gray-300" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
                                </path>
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                </path>
                            </svg>
                        </button>
                        
                        </div>

                        <div className='mb-6 flex p-4 mx-2 bg-gray-200 rounded'>
                            <input
                                className='w-full text-xs bg-gray-200 outline-none'
                                type='file'
                                name='file'
                                // onChange={(e) => this.handleFile(e)}
                            />
                            <button
                            className='mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50 transition duration-200'
                            type='submit'>
                                Upload Image
                            </button>
                        </div>
                        
                        <div class="mb-6 flex p-4 mx-2 bg-gray-200 rounded">
                            <button class="mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50 transition duration-200" type="submit">Sign Up</button>
                                <span class="text-gray-400 text-xs">
                                    <span>Already have an account? <Link to={"/login"} class="font-bold hover:underline">Sign in</Link>.</span>
                                </span>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block relative w-full lg:w-1/2">
                <div class="absolute inset-0 bg-gray-800 z-10 opacity-50"></div>
                <img 
                    class="absolute inset-0 h-full ml-auto object-cover z-0" 
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt=""
                />
                
                </div>
                <div class="lg:hidden">
                <div class="relative w-full">
                    <img 
                        class="relative mb-4 object-cover" 
                        src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" 
                        alt=""
                    />
                    <div class="absolute bottom-0 inset-x-0 mb-10 flex justify-center space-x-3"></div>
                </div>
                </div>
            </div>
        </section>
    </>
    );

}
export default CompanyRegistration;
