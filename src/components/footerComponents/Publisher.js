import React, {  useState, useEffect } from 'react'
import BASE_URL from "../../BASE_URL";
import axios from 'axios';

const Publisher = (props)=> {
    
    
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

const renderTableData = () => {

    return (     
        <div class="overflow-x-auto ">
            <div class="w-full rounded shadow-2xl">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto ">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">First Name</th>
                                <th class="py-3 px-6 text-left">Last Name</th>
                                <th class="py-3 px-6 text-left">Phone Number</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-center"></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">

                            {   
                            jobhunters.map((data, index) => (
                                <tr class="border-b border-gray-200 hover:bg-gray-100" key={data.id}>
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="font-medium transform hover:scale-125">{data.firstName}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center ">
                                            <span class="transform hover:scale-125">{data.lastName}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <div class="flex items-left ">
                                            <span class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125">{data.phoneNumber}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <span class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125">{data.email}</span>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <button class="bg-gray-200 text-purple-600 py-2 px-3 rounded-full text-xs" type="submit" id="selecter">Select for interview</button>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

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
export default Publisher;