
import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import DisplayActiveJobs from './DisplayActiveJobs';
import axios from "axios";
import CompanySubMenu from './CompanySubMenu';


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
            <CompanySubMenu/>
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