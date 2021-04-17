import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import BASE_URL from "../../BASE_URL";
import axios from 'axios';
// import authService from '../../services/auth.service';

const UserRegistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [contactNumber, setPhoneNumber] = useState("");
    // const [dateOfBirth, setDetOfBirth] = useState("");
    const [role, setRole] = useState("USER");


    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
      };

    
    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

    
    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
      };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    const onChangePhoneNumber = (e) => {
        const contactNumber = e.target.value;
        setPhoneNumber(contactNumber);
      };


    console.log(firstName)

    const handleRegister=(e)=>{
        e.preventDefault()


            axios.all([
            axios.post("http://localhost:8080/api/v1/registration/signup",{
                    email,
                    password,
                contactNumber,
                city,
                role
                

            }),
            axios.post("http://localhost:8080/api/v1/jobhunter",{
                firstName,
                lastName,

            }),
            ])
            .then(axios.spread((req1, req2) => {
                // output of req.
                console.log(req1, req2)
            }));
    }



    return ( 
        <>
        <section className='bg-gray-300 '>
                    <div className="flex flex-wrap">
                        <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
                        <div className="max-w-md mx-auto">
                            <div 
                                className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                                    <div 
                                        className="text-3xl font-bold leading-none">
                                            
                                            <img 
                                                className="h-12" 
                                                src="atis-assets/logo/atis/atis-mono-black.svg" 
                                                alt="" 
                                                width="auto"
                                            />
                                    </div>
                          
                            </div>
                            <div>
                            <div className="mb-6 px-3">
                                <span className="text-gray-500">Welcome to .JobFull</span>
                                <h3 className="text-2xl font-bold">Create an account</h3>
                            </div>
                            <form onSubmit={handleRegister} 
                                    className="flex flex-col" 
                                    method="POST" 
                                    action="#">
                                <div className="flex flex-wrap">
                                <div className="mb-3 w-full lg:w-1/2 px-2">
                                    <input 
                                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                        type="text" 
                                        name="firstName" 
                                        required placeholder="First Name"
                                        onChange={onChangeFirstName}
                                    />
                                </div>
                                <div className="mb-3 w-full lg:w-1/2 px-2">
                                    <input 
                                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                        type="text" 
                                        name="lastName" 
                                        required 
                                        placeholder="Last Name"
                                        onChange={onChangeLastName}
                                    />
                                </div>
                                <div className="mb-3 w-full lg:w-1/2 px-2">
                                    <input 
                                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                        type="text" 
                                        name="city" 
                                        required 
                                        placeholder="City"
                                        onChange={onChangeCity}
                                    />
                                </div>
                                <div className="mb-3 w-full lg:w-1/2 px-2">
                                    <input 
                                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded" 
                                        type="text" 
                                        name="phoneNumber" 
                                        required 
                                        placeholder="Phone Number"
                                        onChange={onChangePhoneNumber}
                                    />
                                </div>
                                </div>
                                <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                                <input 
                                    className="w-full text-xs bg-gray-50 outline-none" 
                                    type="email"
                                    name="email" 
                                    placeholder="name@email.com"
                                    required
                                    onChange={onChangeEmail}
                                />
                         
                                </div>
                                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                                    <input 
                                        className="w-full text-xs bg-gray-50 outline-none" 
                                        type="password" 
                                        placeholder="Enter your password"
                                        onChange={onChangePassword}
                                    />
                              
                               
                                </div>
                                <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                                    <input 
                                        className="w-full text-xs bg-gray-50 outline-none" 
                                        type="password" 
                                        placeholder="Retype your password"
                                    />
                                
                                </div>
                                <div className="px-3 text-center">
                                <button className="mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50 transition duration-200" type="submit">Sign Up</button>
                                <span className="text-gray-400 text-xs">
                                    <span>Already have an account? <Link to={"/login"} className="font-bold hover:underline text-gray-800">Sign in</Link>.</span>
                                </span>
                                <p className="mt-16 text-xs text-gray-400">
                                    <Link to={'/privacy-policy'} className='underline hover:text-gray-500 hover:underline text-gray-800'>Privacy Policy  </Link>
                                    and 
                                    <Link to={'/terms-of-use'} className='underline hover:text-gray-500 hover:underline text-gray-800'>Terms Of Use</Link></p>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        <div className="hidden lg:block relative w-full lg:w-1/2">
                            <div className="absolute inset-0 bg-gray-800 z-10 opacity-50"></div>
                            <img 
                                className="absolute inset-0 h-full ml-auto object-cover z-0" 
                                src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" 
                                alt=""
                            />
                        </div>
                    </div>
                </section>
        
            </>
      
     );
}
 
export default UserRegistration;

