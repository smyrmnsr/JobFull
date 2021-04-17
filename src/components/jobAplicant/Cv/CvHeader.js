
import {useState, useEffect} from 'react';
import axios from 'axios';
import BASE_URL from "../../../BASE_URL";
import profilePic from '../../../images/profile-pic.png';

const CvHeader = () => {
    const [aplicantContact, setaplicantContact] = useState()
    const aplicantData = aplicantContact;
    
    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios(BASE_URL + `/jobhunter/8741fb89-571f-48c0-b148-9b36c299b083`)
            const data = response.data
            setaplicantContact(data)
            
        }
        fetchItems()
    },[])


    return ( 
        <>
        {aplicantData && 
            <header className="">          
                <div className={`flex  justify-between bg-purple-300 shadow-md my-16 mx-14 p-6 rounded border-l-4 border-black border-solid sm:flex-row sm:my-4`}>                   
                    <div className='flex  '>
                        <img className='mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0'src={profilePic} alt="img"/>
                        <div className='flex justify-between ml-4'>
                            <h2 className='font-bold text-xl my-2 my-auto'>{aplicantData.firstName} {aplicantData.lastName}</h2>
                        </div>
                    </div>           
                    <div className="flex flex-col text-gray-700 text-lg font-medium">
                        <p>Email: {aplicantData.email}</p>
                        <p>Phone Number: {aplicantData.phoneNumber}</p>
                        <p>Date Of Birth:  {aplicantData.birthDate}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h1 className='my-auto mr-8 font-bold text-xl'>Skills</h1>
                    {aplicantData.searchCriteria.map((item, index)=>(
                    <div className='cursor-pointer text-purple-400 bg-gray-200 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>
                    {item}
                    </div>
                ))}
                </div>                
            </header>
        }
        </>
    );
}

export default CvHeader;