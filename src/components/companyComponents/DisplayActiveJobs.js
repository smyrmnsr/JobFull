import { Link } from 'react-router-dom';



const DisplayActiveJobs = (job) => {


    return ( 
        <div
          className={`flex flex-col bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-sm shadow-md my-16 mx-14 p-6 
          rounded ${'border-l-4 border-black border-solid'
          } sm:flex-row sm:my-4`}>

        <div className='flex flex-col justify-between ml-4'>
          <h3 className='font-bold text-green-800'>
            Open Positions: {job.job.openPositions} 
          </h3>
          <Link to={`/jobs/${job.job.id}/${job.job.companyIdForApi}`}>
            <h2 className='font-bold text-xl my-2'> {job.job.name}</h2>
          </Link>
          <p className='text-gray-700'>
            {job.job.postedDate} &#183;
            {job.job.contract} &#183;
            {job.job.location}
          </p>
        </div>
        <div className='flex flex-wrap  items-center mt-4 mx-4 
            pt-4 border-t border-gray-500 border-solid 
                sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0' >
          <Link to='/publisher'><button className='"bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>Job Aplicants</button></Link>
        </div>
        <div className='flex flex-wrap flex-col items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
          <div className="edit py-4 cursor-pointer">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="delete py-2 cursor-pointer">
            <i className="fas fa-trash-alt" ></i>
          </div>                 
        </div>
      </div>
    );
}

export default DisplayActiveJobs;