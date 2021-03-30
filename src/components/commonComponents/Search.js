import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../BASE_URL';

const Search = () => {
	const onSubmitForm = (e) => {
		e.preventDefault();

		axios({
			method: 'GET',
			url: BASE_URL + `/jobs?name=${e.target.search.value}`,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((response) => {
				// TODO: handle error
				console.log(response);
			});
		e.target.reset();
	};

	return (
		<form onSubmit={onSubmitForm} method='GET' action='#'>
			<div class='pt-2 relative mx-auto text-gray-600'>
				<input
					class='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
					type='search'
					name='search'
					placeholder='Search'
				/>
				<button type='submit' class='absolute right-0 top-0 mt-5 mr-4'></button>
			</div>
		</form>
	);
};

export default Search;
