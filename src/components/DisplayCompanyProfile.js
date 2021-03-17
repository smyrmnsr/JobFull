import data from '../assets/companyDescription.json';
import {useState, useEffect} from 'react';
import axios from 'axios';

const DisplayCompanyProfile = (props) => {
    const{ match }= props;
    const{ params } = match;
    const{ companyId }= params;
    const [company, setCompany] = useState([])

    useEffect(()=>{
        axios.get(`/api/company/${companyId}`)
        .then(function(response){
            const dataResponse = response;
            const singleCompanyData = dataResponse.data
            // console.log(singleCompanyData)
            setCompany(singleCompanyData);

        })
    },[]);

    const item=company;
    console.log(item.adress)
   

    return ( 
        <>
        <div className="container m-auto px-20 singleJob">
            <div className='logo flex items-center'>
                <img className="w-60" src="./images/faceit.svg" alt=""/>
                <div className='title flex justify-center font-bold text-6xl  m-auto'>
                <h1>{item.name}</h1>
          
            </div>
         
            </div>
        <div>
            
            <div className="text-gray-800 font-bold flex justify-center text-6xl py-4">
                <h2>About</h2>
            </div>
            <div className='descriprion px-12 justify-center flex text-lg'>
           
                <h3>{item.description}
                </h3>
            </div>
            <div className="text-gray-800 font-bold flex justify-center text-3xl py-4">
                <h2>Contact</h2>
            </div>
            <div className='detail  flex justify-between font-bold m-3 py-1 px-6    
                 rounded-2xl uppercase text-sm text-gray-500' >
       
         
                <span><i className="fas fa-map-marker-alt"></i>Strada Mama nr 3 </span>
                <a href="tel:+1123-456-7890"><i className="fas fa-phone-square-alt"></i>{item.phoneNumber}</a>
                <a href="mailto:email@example.com"><i className="fas fa-envelope"></i> {item.email}</a>
                <a href="#"><i className="fas fa-at"></i>{item.website}</a>
              
            </div>  
        </div>
     
    

        </div>
           
        </>
     );
}
 
export default DisplayCompanyProfile;