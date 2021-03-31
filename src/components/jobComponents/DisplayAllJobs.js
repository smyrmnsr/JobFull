import React, {useState, useEffect} from 'react';
import JobBoardComponent from './JobBoardComponent';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';
import Loading from "../../Ripple-1s-200px.svg";

const DisplayAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] =useState([]);


  useEffect(()=>{
    const fetchItems = async()=>{
        const response = await axios(BASE_URL + `/jobs`)
        const data = response.data;
        // console.log(response.data);
        setJobs(data);
        
    }
    fetchItems()
},[])

  const foo = jobs


  const filterFunction = ({role, level, tools, languages}) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }
    return filters.every(filter => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }
  
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !==
    passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunction);




    return ( 

      <>

    
      <div className='container m-auto allJobs'>
      {filters.length > 0 && (
        <div className={`flex bg-white shadow-md 
          my-16 mx-10 p-6 rounded`}>
          {filters.map((filter) => (
            <span 
              className='cursor-pointer
              mr-4 mb-4 rounded font-bold
              text-blue-500 bg-blue-100 p-2 sm:mb-0'
              onClick={() =>
              handleFilterClick(filter)}>
              x {filter}
            </span>
          ))}
          <button onClick={clearFilters}
          className='font-bold text-gray-700
          ml-auto'>Clear</button>
        </div>
      )}

      {jobs.length === 0 ? (
        <>
          <div  class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
          <div class="loader ease-linear rounded-full border-4 border-t-4  h-12 w-12 mb-4"></div>
          <h2 class="text-center text-blue text-xl font-semibold">Loading...</h2>
          <p class="w-1/3 text-center text-black">This may take a few seconds, please don't close this page.</p>
        </div>
        </>
      ) : (
        filteredJobs.map((job) => (
     
          <JobBoardComponent 
            job={job} 
            key={job.id}
            handleTagClick={handleTagClick} 
          />
          

        
        ))
      )}
      </div>
    </>
     );
}
 
export default DisplayAllJobs;