import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
import LOGO from '../../images/myhome.svg';
import { Link} from 'react-router-dom';

const CompanyProfile = (props) => {
    const{ match }= props;
    const{ params } = match;
    const{ companyId }= params;
    const [company, setCompany] = useState([])

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/companies/${companyId}`)
            const singleCompanyData = response.data;
            setCompany(singleCompanyData);
            
        }
        fetchItems() 
    },[companyId])

    const item=company;
    
    return ( 
        <>
        
          <main className="profile-page">
          <section className="relative block" style={{ height: "500px" }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')"
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0">
                  <polygon
                    className="text-gray-300 fill-current"
                    points="2560 0 2560 100 0 100">
                  </polygon>
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
                          src={LOGO}
                          className=" w-60 shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: "150px" }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-purple-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          <Link to='/add-job'>Add Job</Link>
                        </button>
                        <button
                          className="bg-purple-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          <Link to='/my-jobs'>All Jobs</Link>
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                        </div>
                        <div className="mr-4 p-3 text-center">
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                      {item.address}
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                      <i className="fas fa-phone-square-alt mr-2 text-lg text-gray-500"></i>
                      {item.phoneNumber}
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-envelope mr-2 text-lg text-gray-500"></i>
                      {item.email}
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-at mr-2 text-lg text-gray-500"></i>
                      {item.website}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          {item.description}
                        </p>
                        <a
                          href="#pablo"
                          className="font-normal text-purple-500"
                          onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
      </>
    );
}

export default CompanyProfile;