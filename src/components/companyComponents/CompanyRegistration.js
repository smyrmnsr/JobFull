import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';

class CompanyRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //no needed.
        };
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, property) => (body[property] = value));
        //aici putem actualiza, elimina, adăuga valori / proprietăți în obiectul, e de folos dacă trebuie facut un proces de verificare, criptare date sau oriunde vrem.
        console.table(body)

        axios({
        method: 'post',
        url: BASE_URL + '/companies',
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
        // Request merge aici.
    };

  render() {
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
                    <form onSubmit={e => this.onSubmitForm(e)} 
                            className="flex flex-col " 
                            method="POST" 
                            action="#">
                        <div class="mb-3 flex p-4 mx-2 bg-gray-200 rounded">
                            <input 
                                class="w-full text-xs bg-gray-200 outline-none" 
                                type="text"
                                name="companyName" 
                                placeholder="Company Name"
                                required
                        />
                        </div>
                        <div class="flex flex-wrap">
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="firstName" 
                                required placeholder="Unique Registratin Code"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="lastName" 
                                required 
                                placeholder="Trade Register Serial Number"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="firstName" 
                                required placeholder="Street and Number"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="lastName" 
                                required 
                                placeholder="Phone Number"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="firstName" 
                                required placeholder="City"
                            />
                        </div>
                        <div class="mb-3 w-full lg:w-1/2 px-2">
                            <input 
                                class="w-full p-4 text-xs bg-gray-200 outline-none rounded" 
                                type="text" 
                                name="lastName" 
                                required 
                                placeholder="Country"
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
                <div 
                    class="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center" 
                    style={{zIndex:10}}>
                    <h2 class="mb-2 text-2xl text-white font-bold font-heading">So much more than a business analytics tool</h2>
                        <div class="max-w-lg mx-auto mb-6">
                            <p class="text-gray-300 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        </div>
                    <a class="inline-block py-2 px-6 rounded-t-xl leading-loose rounded-l-xl bg-purple-600 hover:bg-purple-700 text-gray-50 font-bold transition duration-200" href="#">Get Started</a>
                    <div class="mt-12 flex justify-center space-x-3"></div>
                </div>
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
                <div 
                    class="py-10 px-3 text-center" 
                    style={{zIndex:10}}>
                        <h2 class="mb-2 text-2xl font-bold">So much more than a business analytics tool</h2>
                        <p class="mb-6 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        <a class="inline-block py-2 px-6 rounded-t-xl rounded-l-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold transition duration-200" href="#">Get Started</a>
                </div>
                </div>
            </div>
        </section>
    </>
    );
  }
}

export default CompanyRegistration;
