import React, { Component } from 'react';
import Resume from './Resume';
import BASE_URL from '../BASE_URL';
import axios from 'axios';

class TemplateData extends Component {
	constructor(props) {
		super(props);
		let employment = {
			jobTitles: {},
			emp: {},
			jobDesc: {},
			jobStartDate: {},
			jobEndDate: {},
		};
		let education = {
			qual: {},
			edu: {},
			eduDesc: {},
			eduStartDate: {},
			eduEndDate: {},
		};
		let project = {
			projectTitles: {},
			projectDesc: {},
			projectStartDate: {},
			projectEndDate: {},
		};

		this.state = {
			data: { name: '' },
			type: 'minimalist',
			headerColor: '#306178',
			headerTextColor: '#ffffff',
			empTemplate: [],
			eduTemplate: [],
			projectTemplate: [],
			empCount: 0,
			eduCount: 0,
			projectCount: 0,
			employment: employment,
			education: education,
			project: project,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEmpClick = this.handleEmpClick.bind(this);
		this.handleProjectClick = this.handleProjectClick.bind(this);
		this.handleEduClick = this.handleEduClick.bind(this);
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const body = {};
    
		formData.forEach((value, property) => (body[property] = value));

		axios({
			method: 'post',
			url: BASE_URL + '/jobhunter/1841cec3-ba18-403f-aa14-725d4cb93ddf/cv',
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
		console.log(body);
		// Request merge aici.
	};

	handleEmpClick(e) {
		e.preventDefault();
		let i = this.state.empCount;
		++i;
		const template = (
			<div className='w-4/5 p-2 m-2' key={`empKey${i}`}>
				<div className='w-full flex-col justify-center items-center'>
					<label className='p-2' htmlFor='startDate1'>
						Start
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`jobStartDate${i}`}
						name={`jobStartDate${i}`}
						onChange={this.handleChange}
					/>
					<label className='p-2' htmlFor='endDate1'>
						End
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`jobEndDate${i}`}
						name={`jobEndDate${i}`}
						onChange={this.handleChange}
					/>
				</div>
				<input
					className='w-full p-2 m-2 rounded'
					type='text'
					id={`jobTitle${i}`}
					name={`jobTitle${i}`}
					placeholder='Job Title'
					onChange={this.handleChange}
				/>
				<input
					className='w-full p-2 m-2 rounded'
					type='text'
					id={`emp${i}`}
					name={`emp${i}`}
					placeholder='Employer'
					onChange={this.handleChange}
				/>
				<textarea
					className='w-full p-2 m-2 rounded'
					name={`jobDesc${i}`}
					placeholder='Description'
					rows='5'
					cols='15'
					onChange={this.handleChange}
				/>
			</div>
		);

		const empArray = this.state.empTemplate;
		empArray.push(template);
		this.setState({ empTemplate: empArray, empCount: i });
	}

	handleProjectClick(e) {
		e.preventDefault();
		let i = this.state.projectCount;
		++i;
		const template = (
			<div className='w-4/5 p-2 m-2' key={`projKey${i}`}>
				<div className='w-full flex-col justify-center items-center'>
					<label className='p-2' htmlFor='startDate1'>
						Start
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`projectStartDate${i}`}
						name={`projectStartDate${i}`}
						onChange={this.handleChange}
					/>
					<label className='p-2' htmlFor='endDate1'>
						End
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`projectEndDate${i}`}
						name={`projectEndDate${i}`}
						onChange={this.handleChange}
					/>
				</div>
				<input
					className='w-full p-2 m-2 rounded'
					type='text'
					id={`projectTitle${i}`}
					name={`projectTitle${i}`}
					placeholder='Project Title'
					onChange={this.handleChange}
				/>
				<textarea
					className='w-full p-2 m-2 rounded'
					name={`projectDesc${i}`}
					placeholder='Description'
					rows='5'
					cols='15'
					onChange={this.handleChange}
				/>
			</div>
		);

		const projectArray = this.state.projectTemplate;
		projectArray.push(template);
		this.setState({ projectTemplate: projectArray, projectCount: i });
	}

	handleEduClick(e) {
		e.preventDefault();
		let i = this.state.eduCount;
		++i;
		const template = (
			<div className='w-4/5 p-2 m-2' key={`eduKey${i}`}>
				<div className='w-full flex-col justify-center items-center'>
					<label className='p-2' htmlFor='startDate1'>
						Start
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`eduStartDate${i}`}
						name={`eduStartDate${i}`}
						onChange={this.handleChange}
					/>
					<label className='p-2' htmlFor='endDate1'>
						End
					</label>
					<input
						className='w-full pl-0.5 m-2 rounded'
						type='month'
						id={`eduEndDate${i}`}
						name={`eduEndDate${i}`}
						onChange={this.handleChange}
					/>
				</div>
				<input
					className='w-full p-2 m-2 rounded'
					type='text'
					id={`qual${i}`}
					name={`qual${i}`}
					placeholder='Qualification'
					onChange={this.handleChange}
				/>
				<input
					className='w-full p-2 m-2 rounded'
					type='text'
					id={`educ${i}`}
					name={`educ${i}`}
					placeholder='School/College'
					onChange={this.handleChange}
				/>
				<textarea
					className='w-full p-2 m-2 rounded'
					name={`eduDesc${i}`}
					placeholder='Description'
					rows='5'
					cols='15'
					onChange={this.handleChange}
				/>
			</div>
		);

		const eduArray = this.state.eduTemplate;
		eduArray.push(template);
		this.setState({ eduTemplate: eduArray, eduCount: i });
	}

	handleChange(e) {
		const userData = this.state.data;
		const empData = this.state.employment;
		const eduData = this.state.education;
		const projectData = this.state.project;

		if (e.target.name === 'templates') {
			this.setState({ type: e.target.value });
			e.target.value === 'minimalist'
				? this.setState({ headerColor: '#F3F4F6', headerTextColor: '#1F2937' })
				: this.setState({ headerColor: '#7F1D1D', headerTextColor: '#ffffff' });
		} else if (e.target.name === 'headerColor') {
			this.setState({ headerColor: e.target.value });
		} else if (e.target.name === 'headerTextColor') {
			this.setState({ headerTextColor: e.target.value });
		} else if (e.target.name.includes('jobTitle')) {
			empData['jobTitles'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('emp')) {
			empData['emp'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('jobDesc')) {
			empData['jobDesc'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('jobStartDate')) {
			empData['jobStartDate'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('jobEndDate')) {
			empData['jobEndDate'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('qual')) {
			eduData['qual'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('educ')) {
			eduData['edu'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('eduDesc')) {
			eduData['eduDesc'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('eduStartDate')) {
			eduData['eduStartDate'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('eduEndDate')) {
			eduData['eduEndDate'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('projectTitle')) {
			projectData['projectTitles'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('projectDesc')) {
			projectData['projectDesc'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('projectStartDate')) {
			projectData['projectStartDate'][`${e.target.name}`] = e.target.value;
		} else if (e.target.name.includes('projectEndDate')) {
			projectData['projectEndDate'][`${e.target.name}`] = e.target.value;
		} else {
			userData[`${e.target.name}`] = e.target.value;
		}
		this.setState({
			data: userData,
			employment: empData,
			education: eduData,
			project: projectData,
		});
	}

	render() {
		return (
      
			<div className='w-screen h-full bg-gray-light text-gray-dark font-sans'>
				<div className='flex p-3 print:p-0'>
					<form
						onSubmit={(e) => this.onSubmitForm(e)}
						className='w-2/5 flex flex-col justify-evenly print:hidden'
						method='POST'
						action='#'
					>
						<h3 className='w-4/5 m-2 text-xl'>Personal Details</h3>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='text'
							id='name'
							name='name'
							value={this.state.data.name}
							onChange={this.handleChange}
							placeholder='Name'
						/>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='email'
							id='email'
							name='email'
							value={this.state.data.email}
							onChange={this.handleChange}
							placeholder='E-mail ID'
						/>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='tel'
							id='phone'
							name='phone'
							value={this.state.data.phone}
							onChange={this.handleChange}
							placeholder='Phone'
						/>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='text'
							id='location'
							name='location'
							value={this.state.data.location}
							onChange={this.handleChange}
							placeholder='City, Country'
						/>
						<h3 className='w-4/5 m-2 text-xl'>Professional Details</h3>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='text'
							id='wantedJobTitle'
							name='wantedJobTitle'
							value={this.state.data.wantedJobTitle}
							onChange={this.handleChange}
							placeholder='Wanted Job Title'
						/>
						<textarea
							className='w-4/5 p-2 m-2 rounded'
							name='summary'
							placeholder='Professional Summary'
							rows='5'
							cols='15'
							value={this.state.data.summary}
							onChange={this.handleChange}
						/>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='text'
							id='skills'
							name='skills'
							value={this.state.data.skills}
							onChange={this.handleChange}
							placeholder='Skills'
						/>
						<input
							className='w-4/5 p-2 m-2 rounded'
							type='text'
							id='languages'
							name='languages'
							value={this.state.data.languages}
							onChange={this.handleChange}
							placeholder='Known Foreign Languages and Level'
						/>
						<button
							className='w-4/5 rounded bg-purple-600 text-white m-2 p-2 text-center'
							onClick={this.handleEmpClick}
						>
							Add Employment
						</button>
						{this.state.empTemplate.map((el) => el)}
						<button
							className='w-4/5 rounded bg-purple-600 text-white m-2 p-2 text-center'
							onClick={this.handleProjectClick}
						>
							Add Project
						</button>
						{this.state.projectTemplate.map((el) => el)}
						<h3 className='w-4/5 m-2 text-xl'>Educational Background</h3>
						<button
							className='w-4/5 rounded bg-purple-600 text-white m-2 p-2 text-center'
							onClick={this.handleEduClick}
						>
							Add Education
						</button>
						{this.state.eduTemplate.map((el) => el)}
						<button
							className='w-4/5 rounded bg-purple-600 text-white m-2 p-2 text-center'
							type='submit'
						>
							Submit CV
						</button>
						<button
							className='w-4/5 rounded bg-purple-600 text-white m-2 p-2 text-center print:hidden'
							onClick={(e) => {
								e.preventDefault();
								window.print();
							}}
						>
							<svg
								className='w-5 inline-block'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
								/>
							</svg>{' '}
							Download PDF
						</button>
					</form>
					<Resume
						userData={this.state.data}
						empData={this.state.employment}
						empCount={this.state.empCount}
						eduData={this.state.education}
						eduCount={this.state.eduCount}
						projectData={this.state.project}
						projectCount={this.state.projectCount}
						type={this.state.type}
						headerColor={this.state.headerColor}
						headerTextColor={this.state.headerTextColor}
					/>
				</div>
			</div>
		);
	}
}

export default TemplateData;
