import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
class UserRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    onSubmitForm = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const body = {}
        formData.forEach((value, property) => body[property] = value)

        console.table(body)

    axios({
        method: 'post',
        url: BASE_URL + '/jobhunter',
        data: body,
        headers: { 
    'Access-Control-Allow-Origin': '*' },
    })
        .then(function (response) {
          //handle success
        console.log(response);
        })
        .catch(function (response) {
          //handle error
        console.log(response);
        });
    console.table(body);
    }

    render() {  
    return ( 
    <>

        <section class='bg-gray-300 '>
            <div class="flex flex-wrap">
                <div class="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
                <div class="max-w-md mx-auto">
                    <div 
                        class="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                            <a 
                                class="text-3xl font-bold leading-none" 
                                href="#">
                                    <img 
                                        class="h-12" 
                                        src="atis-assets/logo/atis/atis-mono-black.svg" 
                                        alt="" 
                                        width="auto"
                                    />
                            </a>
                            <a 
                                class="py-2 px-6 text-xs rounded-l-xl rounded-t-xl text-green-600 font-bold transition duration-200" 
                                href="#">
                            </a>
                    </div>
                    <div>
                    <div class="mb-6 px-3">
                        <span class="text-gray-500">Welcome to .JobFull</span>
                        <h3 class="text-2xl font-bold">Create an account</h3>
                    </div>
                    <form onSubmit={e => this.onSubmitForm(e)} 
                            className="flex flex-col" 
                            method="POST" 
                            action="#">
                        <div class="flex flex-wrap">
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                type="text" 
                                name="firstName" 
                                required placeholder="First Name"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                type="text" 
                                name="lastName" 
                                required 
                                placeholder="Last Name"
                            />
                        </div>
                        </div>
                        <div class="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                        <input 
                            class="w-full text-xs bg-gray-50 outline-none" 
                            type="email"
                            name="email" 
                            placeholder="name@email.com"
                            required
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
                        <div class="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                            <input 
                                class="w-full text-xs bg-gray-50 outline-none" 
                                type="password" 
                                placeholder="Enter your password"
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
                        <div class="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                            <input 
                                class="w-full text-xs bg-gray-50 outline-none" 
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
                        <div class="px-3 text-center">
                        <button class="mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50 transition duration-200" type="submit">Sign Up</button>
                        <span class="text-gray-400 text-xs">
                            <span>Already have an account? <Link to={"/login"} class="font-bold hover:underline text-gray-800">Sign in</Link>.</span>
                        </span>
                        <p class="mt-16 text-xs text-gray-400"><a class="underline hover:text-gray-500" href="#">
                            <Link to={'/privacy-policy'} className='hover:underline text-gray-800'>Privacy Policy  </Link></a> 
                            and <a class="underline hover:text-gray-500" href="#">
                            <Link to={'/terms-of-use'} className='hover:underline text-gray-800'>Terms Of Use</Link></a></p>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block relative w-full lg:w-1/2">
                    <div class="absolute inset-0 bg-gray-800 z-10 opacity-50"></div>
                    <img 
                        class="absolute inset-0 h-full ml-auto object-cover z-0" 
                        src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" 
                        alt=""
                    />
                </div>
            </div>
        </section>

    </>

    );
    }
}

export default UserRegistration;