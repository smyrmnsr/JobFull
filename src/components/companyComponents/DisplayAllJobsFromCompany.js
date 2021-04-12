import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import axios from "axios";
import DisplayActiveJobs from './DisplayActiveJobs';
import CompanySubMenu from './CompanySubMenu';



const DisplayAllJobsFromCompany = () => {
    const [myJobs, setMyJobs] = useState();
    const allJobs= myJobs;

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/companies/b959d3f6-3d09-4925-84fd-8a21972316ac/jobs`)
            const data = response.data

            console.log(data)
            setMyJobs(data)
            
            
        }
        fetchItems()
    },[])


    return ( 
        <>
            <div>
                <h1 className="title-choose ">All Jobs</h1>
            </div>
            <CompanySubMenu/>

            {           
                (allJobs && allJobs.map((job,index) => (
                <DisplayActiveJobs 
                    job={job} 
                    key={index}/>)))
            } 
        </>

    );
}

export default DisplayAllJobsFromCompany;