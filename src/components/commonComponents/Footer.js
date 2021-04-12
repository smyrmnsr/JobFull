import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
    <>

		<div className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
			<div className="container mx-auto grid grid-cols-4 py-24">
					<div className="relative pt-16 px-20">
						<img
							alt="..."
							src={require("../../racheta.jpg").default}
							className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
							style={{ maxWidth: "150px" }}
						/>
					</div>
					<div>
					<div 
						class="font-display text-white uppercase text-sm tracking-widest mb-6">
							Who We Are
					</div>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/about-us'} className='hover:underline'>
							About us
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
							Careers
					</a>
					<a 
						href="#" 
						class="block mb-4">
							Press
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/contact-us'} className='hover:underline'>
							Contact Us
						</Link>
					</a>
				</div>
				<div>
					<div 
						class="font-display text-white uppercase text-sm tracking-widest mb-6">
							Who We Serve
					</div>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/user-register'} className='hover:underline'>
							Job Seekers
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/company-register'} className='hover:underline'>
							Employers
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/data'} className='hover:underline'>
							Data
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/publisher'} className='hover:underline'>
							Publisher
						</Link>
					</a>
				</div>
				<div>
					<div 
						class="font-display text-white uppercase text-sm tracking-widest mb-6">
							Helpful Resources
					</div>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/privacy-policy'} className='hover:underline'>
							Privacy Policy
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/security-policy'} className='hover:underline'>
							Security Policy
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/cookies'} className='hover:underline'>
							Cookie Consent
						</Link>
					</a>
					<a 
						href="#" 
						class="block mb-4">
						<Link to={'/terms-of-use'} className='hover:underline'>
							Terms Of Use
						</Link>
					</a>
				</div>
			</div>
			<div class="text-sm lg:text-base text-center font-heading font-semibold tracking-widest uppercase text-white opacity-75 pb-24">
				©2021 design by Rocket Team Inc
			</div>
		</div>
    </>
    );
}

export default Footer;