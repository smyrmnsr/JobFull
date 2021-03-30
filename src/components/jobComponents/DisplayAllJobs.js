import React, { useState, useEffect } from 'react';
import JobBoardComponent from './JobBoardComponent';
import BASE_URL from '../../BASE_URL';
import axios from 'axios';
import Search from '../commonComponents/Search';

const DisplayAllJobs = (props) => {
	const [jobs, setJobs] = useState([]);
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const response = await axios(BASE_URL + `/jobs`);
			const data = response.data;
			// console.log(response.data);
			setJobs(data);
		};
		fetchItems();
	}, []);

	const foo = jobs;
	console.log(foo);

	const filterFunction = ({ role, level, tools, languages }) => {
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
		return filters.every((filter) => tags.includes(filter));
	};

	const handleTagClick = (tag) => {
		if (filters.includes(tag)) return;

		setFilters([...filters, tag]);
	};

	const handleFilterClick = (passedFilter) => {
		setFilters(filters.filter((f) => f !== passedFilter));
	};

	const clearFilters = () => {
		setFilters([]);
	};

	const filteredJobs = jobs.filter(filterFunction);
	console.log(filteredJobs);

	return (
		<>
			<Search />

			<div className='container m-auto allJobs'>
				{filters.length > 0 && (
					<div
						className={`flex bg-white shadow-md 
          my-16 mx-10 p-6 rounded`}
					>
						{filters.map((filter) => (
							<span
								className='cursor-pointer
              mr-4 mb-4 rounded font-bold
              text-blue-500 bg-blue-100 p-2 sm:mb-0'
								onClick={() => handleFilterClick(filter)}
							>
								x {filter}
							</span>
						))}
						<button
							onClick={clearFilters}
							className='font-bold text-gray-700
          ml-auto'
						>
							Clear
						</button>
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
		</>
	);
};

export default DisplayAllJobs;
