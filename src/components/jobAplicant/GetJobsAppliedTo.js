import {useState, useEffect} from 'react';
import axios from 'axios'
import BASE_URL from '../../BASE_URL';


const GetJobsAppliedTo = (job) => {
const [appliedJobs, setappliedJobs] = useState();

const jobId = job.job

console.log(typeof(jobId))



	useEffect(() => {
		const fetchItems = async () => {
			await axios({
				method: 'GET',
				url: BASE_URL +`/job/`+jobId,
				headers: {
					'Access-Control-Allow-Origin': 'GET',
				},
			})
				.then((response) => {
          console.log(response)
          setappliedJobs(response.data);
				})
				.catch((response) => {
					// TODO: handle error
					console.log(response);
				});
		};
		fetchItems();
	}, [jobId]);

console.log(appliedJobs)

    return ( 
        <div
        className={`flex flex-col bg-white shadow-md my-16 mx-14 p-6 
        rounded ${'border-l-4 border-black border-solid'
        } sm:flex-row sm:my-4`}>


        <div className='flex flex-wrap  items-center mt-4 mx-4 
            pt-4 border-t border-gray-500 border-solid 
                sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
         
        </div>
        <div className='flex flex-wrap flex-col items-center mt-4 mx-4 
            pt-4 border-t border-gray-500 border-solid 
                sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
                    <div className="edit py-4 cursor-pointer"><i class="fas fa-pencil-alt"></i></div>
                  <div className="delete py-2 cursor-pointer"><i class="fas fa-trash-alt" ></i></div> 
                
        </div>

      </div>
     );
}
 
export default GetJobsAppliedTo;