import React, {  useState, useEffect } from 'react'
import BASE_URL from "../../BASE_URL";
import axios from 'axios';

const DisplayAllApplicants = (props)=> {
    
    
    const [applicants, setApplicants] = useState([]);

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/jobs/6d7b7811-1190-4319-8e48-6d459a1da38d/applicants`)
            const data = response.data;
            setApplicants(data);
            
        }
        fetchItems()
    },[])
    
    const jobhunters = applicants
    

    const  renderTableData = () => {
    
    return (
        <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Telephone Number</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
            
        {   
        jobhunters.map((data, index) => ( 
            
            <tr key={data.id}>
            
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.email}</td>

                <button type="submit" id="selecter"> Select for interview</button>
            </tr>
        ))
        }
        </tbody>
        </table>
    );
    }

    return (
        <div class="card">
            <div class= "card-body">
    
                <h2 className="title-choose ">Jobs Applicants</h2>
                <table id='jobhunters'>
                    
                        <tr>
                        {renderTableData()}
                        </tr>
                </table>
            </div>
        </div>
    )

    }





export default DisplayAllApplicants 