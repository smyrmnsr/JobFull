import { Link } from 'react-router-dom';
import profilePic from '../../profile-pic.png';
const ApplicantComponent = ({
	applicant: { id, firstName, lastName, phoneNumber, email, searchCriteria },
	handleTagClick,
}) => {
	const tags = [...searchCriteria];

	return (
		<div
			className={`flex flex-col bg-white shadow-md my-16 mx-14 p-6 rounded sm:flex-row sm:my-4`}
		>
			<Link to={`/jobhunter/${id}`}>
				<div>
					<img
						className='-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0'
						src={profilePic}
						alt={firstName + ' ' + lastName}
					/>
				</div>
			</Link>
			<div className='flex flex-col justify-between ml-4'>
				<h3 className='font-bold text-green-800'>
					<Link to={`/jobhunter/${id}`}>{firstName + ' ' + lastName}</Link>
				</h3>

				<p className='text-gray-700'>{email} &#183;</p>
			</div>

			<div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
				{tags
					? tags.map((tag) => (
							<span
								onClick={() => handleTagClick(tag)}
								className='cursor-pointer text-blue-400 bg-gray-200 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'
							>
								{tag}
							</span>
					  ))
					: ''}
			</div>
		</div>
	);
};

export default ApplicantComponent;
