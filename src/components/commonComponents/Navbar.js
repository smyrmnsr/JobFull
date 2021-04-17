import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return ( 
        
    <nav className="nav">
        <div className="px-12 mx-auto py-5">
            <div className="flex justify-between">
                <div className="flex items-center ">
                    <div className="logo ">
                        <NavLink to='/'>.JobFull</NavLink>
                    </div>
                </div>

                    <ul className="flex space-x-6 items-center ">
                        <li> <NavLink to='/display-job' exact activeStyle={{color:'#E4FF1A'}}>Jobs</NavLink></li>
                        <li> <NavLink to='/all-aplicants' exact activeStyle={{color:'#E4FF1A'}}>Job Hunters</NavLink></li>
                        <li> <NavLink to='/jobhunter-profile/8741fb89-571f-48c0-b148-9b36c299b083' exact activeStyle={{color:'#E4FF1A'}}>Job Hunter Dashboard</NavLink></li>
                        <li> <NavLink to='/my-account' exact activeStyle={{color:'#E4FF1A'}}>Company Dashboard</NavLink></li>
                        <li>&#124;</li>
                        <li> <NavLink to='/register' exact activeStyle={{color:'#E4FF1A'}}>Sign Up</NavLink></li>
                        <li> <NavLink to='/login' exact activeStyle={{color:'#E4FF1A'}}>Sign In</NavLink></li>
                    </ul>
                    
            </div>
        </div>
        <div className="elfsight-app-63e2e0a1-cf27-4e91-b969-22043d78f1b7"></div>
    </nav>


    
    );
}

export default Navbar;