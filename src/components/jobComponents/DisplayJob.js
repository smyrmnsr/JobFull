// import data from '../assets/data.json';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
import LOGO from "../../images/myhome.svg";

const DisplayJob = (props)=>{
    const [singleJob, setSingleJob] = useState([]);
    const{ match }= props;
    const{ params } = match;
    const{  companyId ,jobId}= params;
    console.log(props)


    useEffect(()=>{
        const fetchItems = async()=>{
            // console.log(companyId, jobId);
            const response = await axios(BASE_URL + `/jobs/${jobId}`);
            const singleJobData = response.data;

            setSingleJob(singleJobData);
            
        }
        fetchItems()
    },[jobId])

    const item = singleJob;
    console.log(item)

  
    // const languages = item.languages;

    return ( 
        <>

        <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
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
                        src={LOGO}
                        className=" w-60 shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button 
                      className="btn" 
                      type="submit">
                        Apply
                    </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                      jobs opening: {item.openPositions}
                      </div>
                      <div className="mr-4 p-3 text-center">
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    <Link to={`/company/${companyId}`}>
                        <p>{item.companyName}</p>
                    </Link>
                  </h3>
                <div className='detail  flex justify-between font-bold m-3 py-1 px-6    
                    rounded-2xl uppercase text-sm text-gray-500' >
                    <span className="flex flex-col m-4">Work Location: {item.location}</span>
                    <span className="flex flex-col m-4">Career Level: {item.level}</span>
                    <span className="flex flex-col m-4">Education: {item.educationLevel}</span>
                    <span className="flex flex-col m-4">Contract Type: {item.contract}</span>
                    <span className="flex flex-col m-4">Department {item.role}</span>
                    <span className="flex flex-col m-4">Programming Languages: {item.languages && (item.languages).join(", ")}</span>
                    <span className="flex flex-col m-4">Technologies: {item.tools && (item.tools).join(", ")}</span>
                    <span className="flex flex-col m-4">Date of posting: {item.postedDate}</span>
                </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="text-gray-800 font-bold">
                            <h2>Ideal Canditate</h2>
                        </div>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {item.bio}
                      </p>
                        <div className="text-gray-800 font-bold">
                            <h4>Job Description</h4>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {item.description}
                      </p>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
                <div className='flex justify-center mb-8 '>
                    <button className="btn " type="submit">Apply</button>
                </div>
            </div>
          </div>
          </div>
        </section>
      </main>
        </>
    );
}

export default DisplayJob;