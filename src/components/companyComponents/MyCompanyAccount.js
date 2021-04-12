import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import DisplayActiveJobs from './DisplayActiveJobs';
import axios from "axios";


const MyCompanyAccount = (props) => {
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
            <div class="min-h-screen" style={{
						backgroundImage:
						`url(${'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'})`,
                        backgroundSize: 'cover',
					}}>
            <div>
                <div class="px-6 pt-16 md:px-16 flex justify-start lg:flex-row flex-col">
                    <div class="flex lg:flex-row flex-col"></div>
                    <div class="lg:space-x-3 space-y-3 lg:space-y-0">
                        <button class="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center w-full items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">
                            <span>
                                <Link to='/add-job'>Add Job</Link>
                            </span>                            
                        </button>
                        <button class="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center w-full items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">
                            <span>
                                <Link to='/my-jobs'>All Jobs</Link>
                            </span>                            
                        </button>
                        <button class="lg:w-auto inline-flex w-full font-semibold tracking-wide bg-white justify-center w-full items-center text-gray-600 space-x-1.5 border border-black focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 hover:bg-purple-600 hover:text-white focus:outline-none px-4 py-2 text-sm rounded">
                            <span>
                                {activeJobs && activeJobs.map((job,index)=>(
                                <Link to={`/company/${job.companyIdForApi}`}>Company Description</Link>))}
                            </span>    
                        </button>
                    </div>
                </div>
            </div>
            {
    
                (activeJobs && activeJobs.map((job,index) => (

                <DisplayActiveJobs 
                    job={job} 
                    key={index}/>)))
            } 
            </div>
            

        </div> 
    );
}

export default MyCompanyAccount;