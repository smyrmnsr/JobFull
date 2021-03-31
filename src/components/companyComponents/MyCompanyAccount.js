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
        
        <nav className="secondary-nav">
            <div className="px-12 mx-auto py-5">
                <div className="flex justify-between">    
                    <ul className="flex space-x-6 items-center justify-around mx-auto ">
                            <li> <Link to='/add-job'>Add Job</Link></li>
                            <li> <Link to='#'>All Jobs</Link></li>
                            {activeJobs && activeJobs.map((job,index)=>(
                        <li> <Link to={`/company/${job.companyIdForApi}`}>Company Description</Link></li>
                            ))}
                          
                            <li> <Link to='/job-aplicants'>Job Aplicants</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div >
            <h1 className="title-choose justify-center">ACTIVE JOBS</h1>
        </div>

{/* map the display cu id */}

{
    
        (activeJobs && activeJobs.map((job,index) => (
     
          <DisplayActiveJobs 
            job={job} 
            key={index}/>)))
      } 




    </div> 
    );
}
 
export default MyCompanyAccount;