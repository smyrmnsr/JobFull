import CvHeader from './CvHeader';


const DisplayAplicantCV = () => {
    return ( 

    <>
        <div className="container bg-white shadow-md my-16 mx-14 p-6 rounded border-l-4  border-solid sm:flex-row sm:my-4">
            <CvHeader/>
            <div className="flex  flex-col justify-between bg-gray-100 shadow-md my-16 mx-20 p-6 rounded border-l-4 border-black border-solid sm:my-4">
                <div className="flex  justify-between ">
                    
                    <div className="">
                        <h1 className="text-gray-700 text-lg font-semibold"><i class="fas fa-graduation-cap"></i>Education</h1>
                        {/* aici mapez */}
                        <h3 className="mx-12 text-lg text-xl font-semibold">Specialization</h3>
                        <h3 className="mx-12 text-gray-700">Institution</h3>
                        <h3 className="mx-12 text-gray-700">City</h3>
                    </div>
                      {/* aici mapez */}
                    <div className="flex">
                        
                        <h4>Start Date</h4>
                        &#45;<h4>End Date</h4>

                    </div>
                </div>
                <div className="flex my-6 justify-between ">
                    <div>
                          {/* aici mapez */}
                        <h1 className="text-gray-700 text-lg font-semibold"><i class="fas fa-user-tie"></i>Professional Experiance</h1>
                        <h3 className='mx-12 text-lg text-xl font-semibold'>Job Name</h3>
                        <h3 className="mx-12 text-gray-700">Company</h3>
                    </div>
                      {/* aici mapez */}
                    <div className="flex">
                        <h4>Start Date</h4>
                        &#45;<h4>End Date</h4>

                    </div>
                </div>
                
                <div>
                    <h1 className="text-gray-700 text-lg font-semibold"><i class="fas fa-language"></i>Foreign Langauges </h1>
                      {/* aici mapez */}
                    <h4 className='mx-12 text-lg text-xl font-semibold'>Languages</h4>
                </div>
            </div>
        </div>

    </>
     );
}
 
export default DisplayAplicantCV;