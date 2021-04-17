import React, { Component } from 'react';
import BASE_URL from '../../BASE_URL';
import axios from 'axios';
import CompanySubMenu from './CompanySubMenu';


function createPostedDate() {
	// let d = new Date();
	// let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	// let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
	// let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
}

createPostedDate();

// const createList = (string) => {};

class CreateJob extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		document.getElementById('postedDate').value = createPostedDate();
		const formData = new FormData(e.target);
		const body = {};

		// const languagesAsList = formData.get('languages').split(/[\s,]+/);

		formData.forEach((value, property) => (body[property] = value));
		console.log(body);

		axios({
			method: 'post',
			url: BASE_URL + '/companies/3eef1bc8-d13b-49a1-ad32-44b9fe8e9bfc/jobs',
			data: body,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
			.then(function (response) {
				//handle success
				console.log(response);
			})
			.catch(function (response) {
				//handle error
				console.log(response);
			});
		console.table(body);
	};
	

	render() {
		return (
			<>
				
				<main className="profile-page">
				<section className="relative block" style={{ height: "500px" }}>
					
					<div
					className="absolute top-0 w-full h-full bg-center bg-cover"
					style={{
						backgroundImage:
						"url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80')"
					}}
					>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-50 bg-black">	
						</span>
					</div>
					
				</section>
				<section className="relative py-16 bg-gray-300">
					<div className="container mx-auto px-4 ">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
						<div className="">
						
						<form
						onSubmit={(e) => this.onSubmitForm(e)}
						className='flex flex-col'
						method='POST'
						action='#'>
						<div className=''>
						<CompanySubMenu/>
							<div className='w-full mx-auto rounded shadow-2xl'>
								<div className='text-center py-4 px-8 text-black text-xl border-b border-grey-lighter'>
									Please fill in the form to create a job opening
								</div>
								<div className='py-4 px-8 w-full'>
									<div className='flex mb-4'>
										<div className='w-1/2 mr-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
												name='name'
												type='text'
												defaultValue=''
												placeholder='Job Title'
												required
											/>
										</div>
										<div className='w-1/2 ml-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
												name='level'
												type='text'
												defaultValue=''
												placeholder='Career Level'
												required
											/>
										</div>
									</div>
									<div className='flex mb-4'>
										<div className='w-1/2 mr-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
												name='educationLevel'
												type='text'
												defaultValue=''
												placeholder='Education level'
												required
											/>
										</div>
										<div className='w-1/2 ml-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
												name='contract'
												type='text'
												defaultValue=''
												placeholder='Contract Type'
												required
											/>
										</div>
									</div>
									<div className='mb-4'>
										<div className='flex mb-4'>
											<div className='w-1/2 mr-1'>
												<input
													className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
													name='location'
													type='text'
													defaultValue=''
													placeholder='Job Location'
													required
												/>
											</div>
											<div className='w-1/2 ml-1'>
												<input
													className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
													name='languages'
													type='text'
													defaultValue=''
													placeholder='Programming Languages'
													required
												/>
											</div>
										</div>
									</div>
									<div className='flex mb-4'>
										<div className='w-1/2 mr-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
												name='tools'
												type='text'
												defaultValue=''
												placeholder='Technologies'
												required
											/>
										</div>
										<div className='w-1/2 ml-1'>
											<input
												className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
												name='postedAt'
												type='hidden'
												defaultValue=''
												placeholder='Date of Posting'
												required
												id='postedDate'
											/>
										</div>
									</div>
									<div className='mb-4'>
										<div>
											<label 
												className='block text-sm font-medium text-gray-700' 
												htmlFor='bio'>
												Ideal Candidate
											</label>
											<textarea
												name='bio'
												className=' w-full border border-gray-300 rounded-sm px-4 py-3 h-22 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none'
												placeholder=''
											></textarea>
										</div>
									</div>
									<div className='mb-4'>
										<div>
											<label 
												className='block text-sm font-medium text-gray-700' 
												htmlFor='bio'>
												Job Description
											</label>
											<textarea
												name='description'
												className=' w-full border border-gray-300 rounded-sm px-4 py-3 h-22 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none'
												placeholder=''
											></textarea>
										</div>
									</div>
									<button
										className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
										type='submit'>
										Create Job
									</button>
								</div>
							</div>
						</div>
					</form>
						</div>
					</div>
					</div>
				</section>
				</main>
			</>
		);
	}
}

export default CreateJob;
