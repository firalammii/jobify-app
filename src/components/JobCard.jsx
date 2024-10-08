import React, { useState } from 'react';
// import '../css/job-card.scss';
import FloatingButtons from './FloatingButtons';
import { BASE_URL } from '../apis/axios';

function JobCard ({ data, editHandler, companyOnly }) {
	const deleteHandler = () => {

	};
	return (
		<div className='Job-Card w-full'>
			<div className='company'>
				<div className='profile'>
					<span className='logo'>
						<img
							src={data?.avatar}
							alt='profile'
							className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
						/>
					</span>
					<span>
						<h2>{data?.companyName}</h2>
						<p>{data.website}</p>
						<p>{data.location?.city + ", " + data.location?.state + ", " + data.location?.country + ", " + data.location?.zipCode}</p>
					</span>
				</div>
				<p className='description'>{data?.description}</p>
			</div>
			{
				!companyOnly &&
				<div className='subtitle'>
					<p>Job Category: <span >{data?.jobCategory}</span></p>
					<p>Job Title: <span className='job-title'>{data?.title}</span></p>
					<p>type: <span className='job-subtitle'>{data?.jobType}</span></p>
					<p>Address: <span className='job-subtitle'>{data.location.city + ", " + data.location.state + ", " + data.location.country + ", " + data.location.zipCode}</span></p>
					<p>salary: <span className='job-subtitle'>{data.salary.minSalary + ", " + data.salary.maxSalary}</span></p>

					<p>post date: {new Date(data.postingDate).toLocaleDateString()} </p>
					<p>due date: {new Date(data.applicationDeadline).toLocaleDateString()}</p>
				</div>
			}
			{
				editHandler &&
				<FloatingButtons
					editHandler={() => editHandler(data)}
					deleteHandler={deleteHandler}
				/>
			}
		</div>
	);
}

export default JobCard;