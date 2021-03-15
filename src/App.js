import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] =useState([]);

  useEffect(() => setJobs(data), []);

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
    return tags.some(tag => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }
  
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !==
    passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunction);

  
  return (

    <div className="App">

      <header className='bg-purple-100'>
        <img className='offscreen' src='/images/Live-Background.svg' width="1920"  height='350' alt='' />
      </header> 

      {filters.length > 0 && (
        <div className={`flex bg-white shadow-md 
          my-16 mx-10 p-6 rounded`}>
          {filters.map((filter) => (
            <span 
              className='cursor-pointer
              mr-4 mb-4 rounded font-bold
              text-blue-500 bg-blue-100 p-2'
              onClick={() =>
              handleFilterClick(filter)}>
              x {filter}
            </span>
          ))}
        </div>
      )}

      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
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
  );
}

export default App;
