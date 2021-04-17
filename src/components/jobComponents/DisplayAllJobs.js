import React, { useState, useEffect } from 'react';
import JobBoardComponent from './JobBoardComponent';
import BASE_URL from '../../BASE_URL';
import axios from 'axios';
// import Loading from "../../images/Ripple-1s-200px.svg";

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

  const onSubmitForm = (e) => {
    e.preventDefault();

    axios({
      method: 'GET',
      url: BASE_URL + `/jobs?name=${e.target.search.value}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        if (response.data.length !== 0) setJobs(response.data);
								else {
									document.getElementById('search').placeholder = 'No results found';
									document.getElementById('search').classList.add('placeholder-red-600');
									setTimeout(() => {
										document.getElementById('search').placeholder = 'Search';
										document
											.getElementById('search')
											.classList.remove('placeholder-red-600');
									}, 1000);
								}
      })
      .catch((response) => {
        // TODO: handle error
        console.log(response);
      });
    e.target.reset();
  };



    return (
					<>
						<div className='container m-auto allJobs'>
							{/* Search Bar */}
							<form onSubmit={onSubmitForm} method='GET' action='#'>
								<div className='p-8'>
									<div className='bg-white flex items-center rounded-full shadow-xl'>
										<input
											className='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
											id='search'
											type='text'
											placeholder='Search'
										/>
										<div className='p-4'>
											<button className='bg-purple-500 text-white rounded-full p-2 hover:bg-purple-400 focus:outline-none w-12 h-12 flex items-center justify-center'>
												<svg
													className='text-white-600 h-4 w-4 fill-current'
													viewBox='0 0 56.966 56.966'
													width='512px'
													height='512px'
												>
													<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</form>
							{/* End of Search Bar */}
							{filters.length > 0 && (
								<div
									className={`flex bg-white shadow-md my-16 mx-10 p-6 rounded`}
								>
									{filters.map((filter) => (
										<span
											className='cursor-pointer mr-4 mb-4 rounded font-bold text-purple-500 bg-blue-100 p-2 sm:mb-0'
											onClick={() => handleFilterClick(filter)}
										>
											x {filter}
										</span>
									))}
									<button
										onClick={clearFilters}
										className='font-bold text-gray-700 ml-auto'
									>
										Clear
									</button>
								</div>
							)}

							{jobs.length === 0 ? (
								<>
									<div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center'>
										<div className='loader ease-linear rounded-full border-4 border-t-4  h-12 w-12 mb-4'></div>
										<h2 className='text-center text-purple text-xl font-semibold'>
											Loading...
										</h2>
										<p className='w-1/3 text-center text-black'>
											This may take a few seconds, please don't close this page.
										</p>
									</div>
								</>
							) : (
								filteredJobs.map((job,index) => (
									<JobBoardComponent
										job={job}
										key={index}
										handleTagClick={handleTagClick}
									/>
								))
							)}
						</div>
					</>
				);
}
 
export default DisplayAllJobs;
