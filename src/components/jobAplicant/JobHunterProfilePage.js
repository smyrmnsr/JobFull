import { Link } from 'react-router-dom';
import DisplayAplicantCV from './Cv/DisplayAplicantCV';


const JobHunterProfilePage = () => {
    return (
					<>
						<nav className='secondary-nav'>
							<div className='px-12 mx-auto py-5'>
								<div className='flex justify-between'>
									<ul className='flex space-x-6 items-center justify-around mx-auto '>
										<li>
											{' '}
											<Link to='/create-cv'>Create Cv</Link>
										</li>
										<li>
											{' '}
											<Link to='/my-job-aplications'>My Aplications</Link>
										</li>
									</ul>
								</div>
							</div>
						</nav>
						<DisplayAplicantCV />
					</>
				);
}
 
export default JobHunterProfilePage;