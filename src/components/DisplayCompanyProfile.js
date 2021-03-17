import data from '../assets/companyDescription.json';
import React, {useState, useEffect} from 'react';

const DisplayCompanyProfile = () => {

   

    return ( 
        <>
        <div className="container m-auto px-20 singleJob">
            <div className='logo flex items-center'>
                <img className="w-60" src="./images/faceit.svg" alt=""/>
                <div className='title flex justify-center font-bold text-6xl  m-auto'>
                <h1>Numele Companiei</h1>
          
            </div>
         
            </div>
        <div>
            
            <div className="text-gray-800 font-bold flex justify-center text-6xl py-4">
                <h2>About</h2>
            </div>
            <div className='descriprion px-12 justify-center flex text-lg'>
           
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                </h3>
            </div>
            <div className="text-gray-800 font-bold flex justify-center text-3xl py-4">
                <h2>Contact</h2>
            </div>
            <div className='detail  flex justify-between font-bold m-3 py-1 px-6    
                 rounded-2xl uppercase text-sm text-gray-500' >
       
         
                <span><i class="fas fa-map-marker-alt"></i>Strada Mama nr 3 </span>
                <a href="tel:+1123-456-7890"><i class="fas fa-phone-square-alt"></i>123-456-7890</a>
                <a href="mailto:email@example.com"><i class="fas fa-envelope"></i> email@example.com </a>
                <a href="#"><i class="fas fa-at"></i>www.example.com</a>
              
            </div>  
        </div>
     
    

        </div>
           
        </>
     );
}
 
export default DisplayCompanyProfile;