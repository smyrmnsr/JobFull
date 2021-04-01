const Footer = () => {
    return ( 
      <>
        <div className="flex flex-wrap justify-center bg-blue-400 p-6">
        <div className="flex flex-wrap mb-4 w-full">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <h3 className="text-3xl py-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
            <h3 className="text-3xl py-4">Links</h3>
            <ul>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <h3 className="text-3xl py-4">Links</h3>
            <ul>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
            <h3 className="text-3xl py-4">Subscribe</h3>
            <form action="#">
              <div className="mb-4">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Email"/>
              </div>
              <button  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 mx-auto p-2 pl-6">
        <p className="bottom">© Copyright 2020 - RocketTeam.com</p>
      </div>
    </>
     );
}
 
export default Footer;