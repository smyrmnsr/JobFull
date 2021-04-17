import { Link } from 'react-router-dom';
import React, { Component } from 'react';


class HomePage extends Component {


	render() {
		return ( 
		<div className="home">	
			<div className="dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
				<div className="container mx-auto px-6 flex relative py-48">
					<div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
						<span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
						<h1 className="font-semibold uppercase text-6xl sm:text-8xl flex flex-col leading-none dark:text-white text-gray-800">
							Apply
							<span 
								className="text-5xl sm:text-7xl z-30">
								Without fear
							</span>
						</h1>
						<p  className="text-lg sm:text-base text-gray-700 dark:text-white font-semibold z-30">
							Dont't worry, we will find the perfect job for you			
						</p>
						<div className="flex mt-8">

							<Link to={"/register"} className="font-bold hover:underline uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black-500 dark:text-white hover:bg-purple-500 hover:text-white text-md">
								CONNECT WITH US
							</Link>
					
						</div>
					</div>
				</div>
			</div>
		</div>
	
		
		);
	}
}

export default HomePage;