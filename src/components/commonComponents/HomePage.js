import { Link } from 'react-router-dom';
import React, { Component } from 'react';


class HomePage extends Component {
	constructor(props) {
		super(props);
		this.switchImage = this.switchImage.bind(this);
		this.state = {
			currentImage: 0,
			images: [
				"https://static.wixstatic.com/media/f54cdd_7e9b35f6adef42b69672de3a53be6e81~mv2.png/v1/fill/w_560,h_356,al_c,q_85,usm_0.66_1.00_0.01/business-woman-png-7-transparent.webp",
				"https://pngimg.com/uploads/thinking_man/thinking_man_PNG11613.png",
				"https://pngimg.com/uploads/businessman/businessman_PNG6572.png",
				"https://pngimg.com/uploads/businessman/businessman_PNG6558.png"
		]
		};
	}
	
	switchImage() {
		if (this.state.currentImage < this.state.images.length - 1) {
			this.setState({
				currentImage: this.state.currentImage + 1
			});
		} else {
			this.setState({
			currentImage: 0
			});
		}
		return this.currentImage;
		}
	
	componentDidMount() {
		setInterval(this.switchImage, 5000);
	}
	render() {
		return ( 
		<div class="dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
		<div class="container mx-auto px-6 flex relative py-48">
			<div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
				<span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
				</span>
				<h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
					Apply
					<span 
						class="text-5xl sm:text-7xl">
						Without fear
					</span>
				</h1>
				<p  class="text-lg sm:text-base text-gray-700 dark:text-white font-bold">
					Dont't worry, we will find the perfect job for you			
				</p>
				<div class="flex mt-8">
					<a 
						href="#" 
						class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black-500 dark:text-white hover:bg-purple-500 hover:text-white text-md">
						<p>
							<Link 
								to={"/register"} 
								class="font-bold hover:underline">
								CONNECT WITH US
							</Link>
						</p>
					</a>
				</div>
			</div>
			<div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
				<img 
					src={this.state.images[this.state.currentImage]}
					class="max-w-md md:max-w-xl m-auto"
				/>
			</div>
		</div>
	</div>
		
		);
	}
}

export default HomePage;