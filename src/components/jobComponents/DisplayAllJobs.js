import React, { useState, useEffect } from 'react';
import JobBoardComponent from './JobBoardComponent';
import BASE_URL from '../../BASE_URL';
import axios from 'axios';

const DisplayAllJobs = () => {
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
					setJobs(response.data)
				})
				.catch((response) => {
					// TODO: handle error
					console.log(response);
				});
			e.target.reset();
		};


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
			<div className='container m-auto allJobs'>
				{/* Search Bar */}
				<form onSubmit={onSubmitForm} method='GET' action='#'>
					<div class='p-8'>
						<div class='bg-white flex items-center rounded-full shadow-xl'>
							<input
								class='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
								id='search'
								type='text'
								placeholder='Search'
							/>
							<div class='p-4'>
								<button class='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center'>
									<svg
										class='text-white-600 h-4 w-4 fill-current'
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
