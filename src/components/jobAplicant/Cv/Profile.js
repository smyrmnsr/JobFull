
import {useState, useEffect} from 'react';
import axios from 'axios';
import BASE_URL from "../../../BASE_URL";
// import profilePic from '../../../images/profile-pic.png';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const [aplicantContact, setaplicantContact] = useState()
    const aplicantData = aplicantContact;
    
    const handleLogout = () => {
        props.history.push('/login');
    }

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/jobhunter/8741fb89-571f-48c0-b148-9b36c299b083`)
            const data = response.data
            setaplicantContact(data)
            
        }
        fetchItems()
    },[])




    return ( 
        <>
            {aplicantData && 
        <header className="">
    
            <main className="profile-page">
                <section 
                    className="relative block" 
                    style={{ height: "500px" }}
                >
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1580684518721-3d7c2af77e5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
                    }}
                >
                    <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                    style={{ height: "70px" }}
                >
                    <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                    </svg>
                </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                <img
                                    alt="..."
                                    src={require("../../../images/profile-pic.png").default}
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                    style={{ maxWidth: "150px" }}
                                />
                                </div>
                            </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                <button
                                    className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    <li>
                                    {' '}
                                        <Link to='/create-cv'>Create Cv</Link>
                                    </li>
                                </button>
                                <button
                                    className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                >
                                    <li>
                                    {' '}
                                        <Link to='/my-jobs'>My Aplications</Link>
                                    </li>
                                </button>
                                <button
                                    className="bg-purple-500 active:bg-purple-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                    type="button"
                                    style={{ transition: "all .15s ease" }}
                                    value="Logout"
                                    onClick={handleLogout}
                                    >
                                        Logout
                                </button>
                            </div>
                        </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                {aplicantData.firstName} {aplicantData.lastName}
                            </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                            <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>{" "}
                            Email: {aplicantData.email}
                        </div>
                        <div className="mb-2 text-gray-700 mt-10">
                            <i className="fas fa-phone-square-alt mr-2 text-lg text-gray-500"></i>
                            Phone Number: {aplicantData.phoneNumber}
                        </div>
                        <div className="mb-2 text-gray-700">
                            <i className="fa fa-calendar mr-2 text-lg text-gray-500"></i>
                            Date Of Birth:  {aplicantData.birthDate}
                        </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-gray-300 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                <div className="flex justify-center">
                            <h1 className='my-auto mr-8 font-bold text-xl my-2 my-auto'>Skills</h1>
                                {aplicantData.searchCriteria.map((item, index)=>(
                            <div className='cursor-pointer text-purple-400 bg-gray-200 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>
                                {item}
                            </div>
                        ))}                       
                        </div>
                    <div className="flex  flex-col justify-between bg-gray-100 shadow-md my-16 p-6 rounded border-l-4 border-black border-solid sm:my-4">
                        <div className="flex  justify-between ">
                    
                            <div className="">
                                <h1 className="text-gray-700 text-lg font-semibold"><i className="fas fa-graduation-cap"></i>Education</h1>
                                <h3 className="mx-12 text-lg text-xl font-semibold">Computer Science</h3>
                                <h3 className="mx-12 text-gray-700">Politehnica </h3>
                                <h3 className="mx-12 text-gray-700">Bucuresti</h3>
                            </div>
                      {/* aici mapez */}
                            <div className="flex">
                                
                                <h4>01-04-2000</h4>
                                &nbsp;&nbsp;-&nbsp;&nbsp;<h4>12-06-2005</h4>

                            </div>
                    </div>
                    <div className="flex my-6 justify-between ">
                        <div>
                            {/* aici mapez */}
                            <h1 className="text-gray-700 text-lg font-semibold"><i className="fas fa-user-tie"></i>Professional Experiance</h1>
                            <h3 className='mx-12 text-lg text-xl font-semibold'>Senior Developer</h3>
                            <h3 className="mx-12 text-gray-700">Apple</h3>
                        </div>
                        {/* aici mapez */}
                        <div className="flex">
                            <h4>02-05-2012</h4>
                            &nbsp;&nbsp;-&nbsp;&nbsp;<h4>15-02-2021</h4>
                        </div>
                        
                    </div>
                        <div className="flex my-6 justify-left">                
                            <div>
                                <h1 className="mx-12 text-gray-700 text-lg font-semibold"><i className="fas fa-language"></i>Foreign Langauges </h1>
                                <h4 className='text-lg text-xl font-semibold'>English</h4>
                            </div>
                        </div> 
            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
        </header>
        }
    </>
    );
}

export default Profile;