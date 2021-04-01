import {useState, useEffect} from 'react';
import BASE_URL from "../../BASE_URL";
import axios from "axios";
import DisplayActiveJobs from './DisplayActiveJobs';



const DisplayAllJobsFromCompany = () => {
    const [myJobs, setMyJobs] = useState();
    const allJobs= myJobs;

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/companies/b959d3f6-3d09-4925-84fd-8a21972316ac/jobs`)
            const data = response.data

            console.log(data)
            setMyJobs(data)
            
            
        }
        fetchItems()
    },[])


    return ( 
    //     <div
    //     className={`flex flex-col bg-white shadow-md my-16 mx-14 p-6 
    //     rounded ${'border-l-4 border-black border-solid'
    //     } sm:flex-row sm:my-4`}>

    //     <div className='flex flex-col justify-between ml-4'>
    //       <h3 className='font-bold text-green-800'>
    //       Open Positions: openPositions
    //       </h3>
    //       {/* <Link to={`/jobs/${job.job.id}/${job.job.companyIdForApi}`}> */}
    //         <h2 className='font-bold text-xl my-2'> name</h2>
    //       {/* </Link> */}
    //       <p className='text-gray-700'>
    //         postedDate &#183;
    //         contract &#183;
    //       location
    //       </p>
    //     </div>
    //     {/* <div className='flex flex-wrap  items-center mt-4 mx-4 
    //         pt-4 border-t border-gray-500 border-solid 
    //             sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
    //       <Link to='/job-aplicants'><button className='"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"'>Job Aplicants</button></Link>
    //     </div> */}
    //     <div className='flex flex-wrap flex-col items-center mt-4 mx-4 
    //         pt-4 border-t border-gray-500 border-solid 
    //             sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
    //                 <div className="edit py-4 cursor-pointer"><i class="fas fa-pencil-alt"></i></div>
    //                <div className="delete py-2 cursor-pointer"><i class="fas fa-trash-alt" ></i></div> 
                   
    //     </div>
     
        
    //   </div>
    <>
    <div>
        <h1 className="title-choose ">All Jobs</h1>
    </div>

    {
    
        (allJobs && allJobs.map((job,index) => (
     
          <DisplayActiveJobs 
            job={job} 
            key={index}/>)))
      } 
      </>

     );
}
 
export default DisplayAllJobsFromCompany;