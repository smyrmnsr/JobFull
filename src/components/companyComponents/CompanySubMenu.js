import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import axios from "axios";


const CompanySubMenu = () => {
    const [myCompany, setMyCompany] = useState();
    const activeJobs= myCompany;

        useEffect(()=>{
            const fetchItems = async()=>{
                const response = await axios(BASE_URL + `/companies/b959d3f6-3d09-4925-84fd-8a21972316ac/jobs/active`)
                const data = response.data
                setMyCompany(data);
                
            }
            fetchItems()
        },[])


    return (
        <div>
                <div className="px-6 pt-6 md:px-14 flex justify-start lg:flex-row flex-col">
                    <div className="flex lg:flex-row flex-col"></div>
                    <div className="lg:space-x-3 space-y-3 lg:space-y-0">
                        <button className="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">
                                <Link to='/add-job'>Add Job</Link>
                        </button>
                        <button className="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">                          
                                <Link to='/my-jobs'>All Jobs</Link>                                                 
                        </button>
                        <button className="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">
                                {activeJobs && activeJobs.map((job,index)=>(
                                <Link to={`/company/${job.companyIdForApi}`}>Company Description</Link>))}
                        </button>
                    </div>
                </div>
            </div>
    ) 
}

export default CompanySubMenu