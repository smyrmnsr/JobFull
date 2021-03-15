const Navbar = () => {
    return ( 
    <nav className="nav ">
        <div className="px-12 mx-auto py-5">
            <div className="flex justify-between">
                <div className="flex items-center ">
                    <div className="logo ">
                        <a href="#">.JobFull</a>
                    </div>
                </div>
             
                    <ul className="flex space-x-6 items-center ">
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Company</a></li>
                        
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">Sign In</a></li>
                    </ul>
             
            
         
            </div>
          

        </div>
    </nav>


     
     );
}
 
export default Navbar;