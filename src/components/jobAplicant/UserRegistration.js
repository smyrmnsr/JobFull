import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
          //nu trebuie adaugat nimic.
        }
    }
    
    onSubmitForm = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const body = {}
        formData.forEach((value, property) => body[property] = value)
        //aici putem actualiza, elimina, adăuga valori / proprietăți în obiectul, e de folos dacă trebuie facut un proces de verificare, criptare date sau oriunde vrem.
        console.table(body)
        // Request merge aici.
    }


    render() {  
    return ( 
    <>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome to .JobFull()</h3>
                    <p className="text-gray-600 pt-2">Please fill in the form to register.</p>
                </section>

                <section className="mt-10">
                    <form onSubmit={e => this.onSubmitForm(e)} 
                        className="flex flex-col" 
                        method="POST" 
                        action="#"
                    >
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label 
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3" 
                                for="firstname"
                            >   
                                First Name
                            </label>
                            <input 
                                type="text" 
                                name="firstname" 
                                defaultValue="" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                required
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label 
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3" 
                                for="lastname"
                            >
                                Last Name
                            </label>
                            <input 
                                type="text" 
                                name="lastname" 
                                defaultValue="" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                required
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label 
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3" 
                                for="email"
                            >
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                defaultValue="" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                required
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label 
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3" 
                                for="password"
                            >
                                Password
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                defaultValue="" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                required
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label 
                            className="block text-gray-700 text-sm font-bold mb-2 ml-3" 
                            for="retypepassword"
                            >
                                Retype Password
                            </label>
                            <input 
                                type="retypepassword" 
                                name="retype_password" 
                                defaultValue="" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <a href="#" 
                                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <button 
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" 
                            type="submit"
                            >
                                Create Account
                        </button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p >Already have an account? <Link to={"/login"} class="font-bold hover:underline">Sign in</Link>.</p>
            </div>

    </>

  );
  }
}

export default UserRegistration;