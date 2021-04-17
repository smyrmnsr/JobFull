import React, { useState, useEffect } from 'react';
import BASE_URL from '../../BASE_URL';
import axios from 'axios';
import GetJobsAppliedTo from './GetJobsAppliedTo';


const DisplayJobHunterApplications = () => {
  // aici trebuie era hardcodat. NU E BINE
  // const [jobId, setjobId] = useState([])
  const [appliedJob, setAppliedJob] = useState([]);
  
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(BASE_URL +`/jobhunter/8741fb89-571f-48c0-b148-9b36c299b083/applications`);
      
      setAppliedJob(response.data);
    };
    fetchItems();
  }, []);


  // useEffect(()=>{
  //   axios.get(BASE_URL +`/jobhunter/8741fb89-571f-48c0-b148-9b36c299b083/applications`)
  //   .then(response =>{
     
  //     return setjobId(response.data)
  //   }) 
  // }, [])

 
  //   useEffect(()=>{
  //    axios.get(BASE_URL+BASE_URL +`/job/${jobId}`)
  //   })
  
  

  // axios.get(BASE_URL+BASE_URL +`/job/${jobId}`)

// console.log(jobId)
 
  return (
    // <>
    //   <div className="flex  justify-between bg-blue-300 shadow-md my-16 mx-14 p-6 rounded border-l-4 border-black border-solid sm:flex-row sm:my-4">
    //     <div className="flex ">
    //       <img
    //         className="mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0"
    //         src={LOGO}
    //       />
    //       <div className="flex justify-between ml-4">
    //         <h2 className="font-bold text-xl my-2 my-auto">Gica Flexaru</h2>
    //       </div>
    //     </div>

    //     <div className="flex flex-col text-gray-700 text-lg font-medium">
    //       <p>Company Name: </p>
    //     </div>
    //   </div>
    // </>
   <>
   <div className="flex justify-center">
     <h1 className="title-choose">  NOTHING TO SHOW</h1>
 
   </div>
  
    {
    
      (appliedJob && appliedJob.map((job,index) => (
   
        <GetJobsAppliedTo 
          job={job} 
          key={index}/>)))
  } 
  </>
  );
};

export default DisplayJobHunterApplications;
