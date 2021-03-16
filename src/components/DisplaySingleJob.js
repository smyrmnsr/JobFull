import data from '../assets/data.json';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const DisplaySingleJob = (props)=>{
    const [job, setJob] = useState([]);
    const{ match }= props;
    const{ params } = match;
    const{ id }= params;

  useEffect(() => setJob(data), []);









    return ( 
        <>
        <div className="container m-auto px-20 singleJob">
            <div className='logo flex items-center'>
                <img className="w-60" src="./images/faceit.svg" alt=""/>
                <div className='title flex justify-center font-bold text-6xl  m-auto'>
                <h1>Titlu jobului</h1>
          
            </div>
            <button className="btn" type="submit"> Apply</button>
            </div>
        <div>
                   <div className="companyDetaile flex justify-between ml-4 py-12  ">
                       {/* aici company id */}
            <Link to={`/company${id}`}> 
                <p>Company Name </p>
            </Link>
                <span> jobs opening: 20</span>
            </div>
            <div className='detail  flex justify-between font-bold m-3 py-1 px-6    
                 rounded-2xl uppercase text-sm text-gray-500' >
                <span>Work Location : Bucharest</span>
                <span>Job Type: Full time</span>
                <span>Career Level: junior</span>
            </div>
            <div className="text-gray-800 font-bold">
                <h2>Job Description</h2>
            </div>
            <div className='descriprion px-12 justify-center flex text-lg'>
           
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ullam nihil quidem delectus unde, optio veniam deserunt modi? Repudiandae pariatur dolorum voluptatum debitis ea totam cupiditate eum repellat, ad mollitia.
                </h3>
            </div>
        </div>
     

          <div className='flex justify-center '>
            <button className="btn " type="submit">Apply</button>
          </div>
    

        </div>
        </>
     );
}
 
export default DisplaySingleJob;