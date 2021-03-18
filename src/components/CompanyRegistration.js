import { Link } from 'react-router-dom';

const CompanyRegistration = () => {
    return ( 
    <> 
        <section className="mt-10">
            <form className="flex flex-col" method="POST" action="#">
                <div className="container mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div className="text-center py-4 px-8 text-black text-xl border-b border-grey-lighter">Please fill in the form to register your company</div>
                        <div className="py-4 px-8">
                    <div class="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Company Details</label>
                        <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-gray-900" id="email" type="email" placeholder="Company Name"/>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900" id="first_name" type="text" placeholder="Unique Registration Code"/>
                        </div>
                        <div className="w-1/2 ml-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900" id="last_name" type="text" placeholder="Trade Register Serial Number"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Registered Office Address</label>
                        <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Street and number"/>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="City"/>
                        </div>
                        <div className="w-1/2 ml-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Country"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Contact Details</label>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Phone Number"/>
                        </div>
                        <div className="w-1/2 ml-1">
                            <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" for="email">Authentication Data</label>
                        <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Username"/>
                    </div>
                    <div className="mb-4">
                        <input className="bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password"/>
                        <p className="text-grey text-xs mt-1">At least 6 characters</p>
                    </div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Register</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
    <div class="max-w-lg mx-auto text-center ">
        <p >Already have an account? <Link to={"/login"} class="font-bold hover:underline">Sign in</Link>.</p>
    </div>

    </>

    );
}

export default CompanyRegistration;