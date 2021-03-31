import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import DisplayActiveJobs from './DisplayActiveJobs';
import axios from "axios";



const MyCompanyAccount = (props) => {
    const [myCompany, setMyCompany] = useState();
    const activeJobs= myCompany;

    console.log(props)







        useEffect(()=>{
            const fetchItems = async()=>{
                const response = await axios(BASE_URL + `/companies/b3a2bd65-c775-4703-af81-adb298877e17/jobs/active`)
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
                            <li> <Link to='#'>Add Job</Link></li>
                            <li> <Link to='#'>All Jobs</Link></li>
                            <li> <Link to='`/company/${companyId}`'>Company Description</Link></li>
                            <li> <Link to='#'>Job Aplicants</Link></li>
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