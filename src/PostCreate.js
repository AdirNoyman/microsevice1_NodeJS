import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
	const [title, setTitle] = useState('');

	const onSubmitHandler = async event => {
		event.preventDefault();

		try {
			// Send the new post data to the server
			await axios.post('http://localhost:4000/posts', {
				title,
			});
		} catch (error) {
			console.log('The Error is : ', error);
		}

		// Clear the input field
		setTitle('');
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div className='form-group'>
					<label>Title</label>
					<input
						className='form-control'
						style={{ maxWidth: '80%' }}
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<button
					style={{ marginTop: '15px' }}
					className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PostCreate;
