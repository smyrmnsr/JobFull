import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from "../../BASE_URL";
import axios from 'axios';

class CreateJob extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, property) => (body[property] = value));

    axios({
        method: 'post',
        url: BASE_URL + '/companies/b3a2bd65-c775-4703-af81-adb298877e17/jobs',
        data: body,
        headers: { 
    'Access-Control-Allow-Origin': '*' },
    })
        .then(function (response) {
        //handle success
        console.log(response);
        })
        .catch(function (response) {
        //handle error
        console.log(response);
        });
        console.table(body);
    };

    render() {
        return (
        <>
        <section className='mt-10'>
            <form
                onSubmit={(e) => this.onSubmitForm(e)}
                className='flex flex-col'
                method='POST'
                action='#'
            >
            <div className='container mx-auto py-8'>
                <div className='w-3/4 mx-auto bg-white rounded shadow'>
                <div className='text-center py-4 px-8 text-black text-xl border-b border-grey-lighter'>
                    Please fill in the form to create a job opening
                </div>
                <div className='py-4 px-8 w-full' >
                    <div className='flex mb-4'>
                    <div className='w-1/2 mr-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
                            name='location'
                            type='text'
                            defaultValue=''
                            placeholder='Job Location'
                            required
                        />
                    </div>
                    <div className='w-1/2 ml-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
                            name='level'
                            type='text'
                            defaultValue=''
                            placeholder='Career Level'
                            required
                        />
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='w-1/2 mr-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
                            name='educationLevel'
                            type='text'
                            defaultValue=''
                            placeholder='Education level'
                            required
                        />
                    </div>
                    <div className='w-1/2 ml-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-900'
                            name='contract'
                            type='text'
                            defaultValue=''
                            placeholder='Contract Type'
                            required
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex mb-4'>
                    <div className='w-1/2 mr-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                            name='role'
                            type='text'
                            defaultValue=''
                            placeholder='Department'
                            required
                        />
                    </div>
                    <div className='w-1/2 ml-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                            name='phoneNumber'
                            type='text'
                            defaultValue=''
                            placeholder='Foreign Languages'
                            required
                        />
                    </div>
                </div>
                </div>
                <div className='flex mb-4'>
                    <div className='w-1/2 mr-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                            name='languages'
                            type='text'
                            defaultValue=''
                            placeholder='Technologies'
                            required
                        />
                    </div>
                    <div className='w-1/2 ml-1'>
                        <input
                            className='bg-gray-200 appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                            name='postedAt'
                            type='text'
                            defaultValue=''
                            placeholder='Date of Posting'
                            required
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <div>
                        <label 
                            class="block text-sm font-medium text-gray-700" 
                            for="bio">
                            Ideal Candidate
                        </label>
                        <textarea 
                            name="bio" 
                            class=" w-full border border-gray-300 rounded-sm px-4 py-3 h-22 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none" 
                            placeholder="">
                        </textarea>
                    </div>
                </div>
                <div className='mb-4'>
                    <div>
                        <label 
                            class="block text-sm font-medium text-gray-700" 
                            for="bio">
                            Job Description
                        </label>
                        <textarea 
                            name="description" 
                            class=" w-full border border-gray-300 rounded-sm px-4 py-3 h-22 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none" 
                            placeholder="">
                        </textarea>
                    </div>
                </div>
                <button
                    className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
                    type='submit'
                >
                    Create Job
                </button>
                </div>
            </div>
            </div>
        </form>
        </section>
    </>
    );
}
}

export default CreateJob;