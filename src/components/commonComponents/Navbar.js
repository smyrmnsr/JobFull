import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
    <nav className="nav ">
        <div className="px-12 mx-auto py-5">
            <div className="flex justify-between">
                <div className="flex items-center ">
                    <div className="logo ">
                        <Link to='/'>.JobFull</Link>
                    </div>
                </div>

                    <ul className="flex space-x-6 items-center ">
                        <li> <Link to='/display-job'>Jobs</Link></li>
                        <li> <Link to='/all-aplicants'>Job Hunters</Link></li>
                        <li> <Link to='/jobhunter-profile/8741fb89-571f-48c0-b148-9b36c299b083'>Job Hunter Dashboard</Link></li>
                        <li> <Link to='/my-account'>Company Dashboard</Link></li>
                        <li>&#124;</li>
                        <li> <Link to='/register'>Sign Up</Link></li>
                        <li> <Link to='/login'>Sign In</Link></li>
                    </ul>
             
            
         
            </div>
          

        </div>
    </nav>


     
     );
}
 
export default Navbar;