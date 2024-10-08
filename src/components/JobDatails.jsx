import React, { useState } from 'react';
import JobCard from './JobCard';

function JobDatails ({ job }) {
	const [state, setState] = useState('');

	return (
		<div className='grid grid-cols-2'>
			<h2>JoB Details</h2>
			<JobCard data={job} />

		</div>
	);
}

export default JobDatails;