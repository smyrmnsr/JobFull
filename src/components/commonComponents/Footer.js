import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
    <>

		<div className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
			<div className="container mx-auto grid grid-cols-4 py-24">
					<div className="relative pt-16 px-20">
						<img
							alt="..."
							src={require("../../images/racheta.jpg").default}
							className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
							style={{ maxWidth: "150px" }}
						/>
					</div>
					<div>
					<div 
						className="font-display text-white uppercase text-sm tracking-widest mb-6">
							Who We Are
					</div>
				
						<Link to={'/about-us'} className=''>
							About us
						</Link>
				
				
						<Link to="#" className="block mb-4 hover:underline">Careers</Link>
				
					
						<Link to="#" className="block mb-4 hover:underline">	Press</Link>
				
				
						<Link to={'/contact-us'} className='block mb-4 hover:underline'>
							Contact Us
						</Link>
				
				</div>
				<div>
					<div 
						className="font-display text-white uppercase text-sm tracking-widest mb-6">
							Who We Serve
					</div>
				
						<Link to={'/user-register'} className='block mb-4 hover:underline'>
							Job Seekers
						</Link>
				
					
						<Link to={'/company-register'} className='block mb-4 hover:underline'>
							Employers
						</Link>
				
						<Link to={'/data'} className='hover:underline block mb-4'>
							Data
						</Link>
				
				
						<Link to={'/publisher'} className='hover:underline block mb-4'>
							Publisher
						</Link>
				
				</div>
				<div>
					<div 
						className="font-display text-white uppercase text-sm tracking-widest mb-6">
							Helpful Resources
					</div>
				
						<Link to={'/privacy-policy'} className='hover:underline block mb-4'>
							Privacy Policy
						</Link>
				
						<Link to={'/security-policy'} className='hover:underline block mb-4'>
							Security Policy
						</Link>
				
			
						<Link to={'/cookies'} className='hover:underline block mb-4'>
							Cookie Consent
						</Link>
			
				
						<Link to={'/terms-of-use'} className='hover:underline block mb-4'>
							Terms Of Use
						</Link>
				
				</div>
			</div>
			<div className="text-sm lg:text-base text-center font-heading font-semibold tracking-widest uppercase text-white opacity-75 pb-24">
				©2021 design by Rocket Team Inc
			</div>
		</div>
    </>
    );
}

export default Footer;