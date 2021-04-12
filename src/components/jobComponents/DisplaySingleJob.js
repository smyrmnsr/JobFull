// import data from '../assets/data.json';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
import LOGO from "../../myhome.svg";

const DisplaySingleJob = (props)=>{
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
    },[])

    const item = singleJob;
    console.log(item)

  
    const languages = item.languages;

    return ( 
        <>

        <div className="container m-auto px-20 singleJob">
            <div className='logo flex items-center'>
                <img className="w-60" src={LOGO} alt=""/>
                <div className='title flex justify-center font-bold text-6xl  m-auto'>
                <h1>{item.name}</h1>
        
            </div>
            <button className="btn" type="submit"> Apply</button>
            </div>
        <div>
        <div className="companyDetaile flex justify-between ml-4 py-12  ">
            <Link to={`/company/${companyId}`}>
                <p>{item.companyName} </p>
            </Link>
                <span> jobs opening: {item.openPositions}</span>
        </div>
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
                    <div className="text-gray-800 font-bold">
                        <h2>Ideal Canditate</h2>
                    </div>
                    <div className='descriprion px-12 justify-center flex text-lg'>
                        <h3>{item.bio}</h3>
                    </div>
                    <div className="text-gray-800 font-bold">
                        <h4>Job Description</h4>
                    </div>
                    <div className='descriprion px-12 justify-center flex text-lg'>
                        <h5>{item.description}</h5>
                    </div>
            </div>
            <div className='flex justify-center '>
                <button className="btn " type="submit">Apply</button>
            </div>
        </div>
        </>
    );
}

export default DisplaySingleJob;