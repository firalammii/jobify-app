import React, { useState } from 'react';
import JobCard from './JobCard';
import '../css/overlay.scss';
import '../css/switch.css';
import { avatar } from '../data/formData';

function JobDatails ({ job, returnFunction }) {
	const [state, setState] = useState('');
	const [editMode, setMode] = useState(false);
	const { company } = job;

	const handleSwitch = (e) => {
		setMode(prev => !prev);
	}

	return (
		<div className='shadow-sm p-5 flex gap-5 rounded-xl overflow-hidden relative'>
			<div className='w-1/2 flex flex-col items-center shadow-sm gap-4 rounded-xl '>

				<div className='flex gap-7 p-8 items-center'>
					<img
						className='rounded-full h-20 w-20 object-cover block'
						src={company?.companyLogo || avatar}
						alt='logo'
					/>
					<div>
						<p className='font-bold'>
							<span> {company?.companyName}</span>
							<span className='font-extralight'>{` ( ${company?.companyType})`}</span>
						</p>
						<p className='font-ligtht'>{company?.website} </p>
						<p className='font-extralight'> {company?.telNumber?.line}, {company?.telNumber?.mobile} </p>
					</div>
				</div>

				<div className='h-3/4 overflow-auto p-5 bg-white rounded-md'>
					<p className='font-medium'>About Company</p>
					<p className='text-justify rounded-xl'>{company?.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptate magni voluptatibus expedita a sit facilis aliquam maiores? Est voluptate saepe sint soluta? Temporibus non molestias aperiam rerum? Temporibus, nihil? Voluptate maxime est, quidem deserunt optio alias quasi dignissimos necessitatibus autem quis ea possimus provident. Quidem eligendi iste molestias quis sapiente commodi, dolorem dignissimos exercitationem. Deserunt cumque commodi iusto molestiae modi voluptate, beatae accusamus temporibus eligendi quis nemo nostrum doloribus? Dolore modi expedita id, cumque laborum quidem a odit. Consequuntur, illo voluptas et numquam harum dolorum quibusdam accusantium nostrum quidem consectetur! Fuga impedit, repellat porro beatae molestiae tempore at doloribus.</p>
				</div>

			</div>

			<div className='w-full shadow-md p-8 rounded-xl h-full'>
				<div className='subtitle grid grid-cols-2 gap-2 whitespace-nowrap mb-3'>
					<div>
						<p>Job Category: <span className='font-semibold' >{job?.jobCategory}</span></p>
						<div className='flex gap-1'>
							<span className='job-title font-semibold'>{job?.title}</span>
							<span className='job-subtitle font-light lowercase'>({job?.jobType},</span>
							<span className='job-subtitle font-light lowercase'>{job?.remoteOption})</span>
						</div>
						<div className='grid grid-cols-3'>required Skills: <span className='job-subtitle font-semibold	'>{job?.skills?.map((skill, i) => <span key={skill}>{i + 1 <= job?.skills.length ? `${skill}, ` : skill}</span>)}</span></div>
						<p>Salary: <span className='job-subtitle font-semibold'>{job?.salary?.minSalary + " - " + job?.salary?.maxSalary}</span></p>
						<p>Experience: <span className='job-subtitle font-semibold'>{job?.experience?.minYears + " - " + job?.experience?.maxYears} Years</span></p>
					</div>
					<div>
						<address className='job-subtitle font-semibold'>{job?.location?.city + ", " + job?.location?.state + ", " + job?.location?.country + ", " + job?.location?.zipCode}</address>
						<p>post date: <span className='font-semibold'>{new Date(job?.postingDate).toLocaleDateString()} </span> </p>
						<p>dead line: <span className='font-semibold'>{new Date(job?.applicationDeadline).toLocaleDateString()} </span> </p>
						<p>apply to: <a className='job-subtitle underline font-semibold' href={job?.applyURL}>{job?.applyURL}</a></p>
						<p className='job-subtitle font-semibold'>{job?.status}</p>

					</div>
				</div>
				<div className='h-3/4 overflow-auto p-5 bg-white rounded-md'>
					<p className='font-semibold'>Job Description</p>
					<p className='text-justify rounded-xl'>{job?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ratione, temporibus ut sequi consequuntur eveniet consectetur, voluptates similique sit voluptatum ipsam quasi quam dolore fugit delectus vitae eligendi distinctio libero iure. Minima sint dolores exercitationem aspernatur, cum repellendus beatae animi inventore corporis a architecto in nobis quasi voluptatem suscipit. A maxime totam obcaecati nihil quos eos aliquid doloribus. Laboriosam itaque quos, vero alias unde illo, a temporibus nisi modi sunt quia necessitatibus. Quisquam laboriosam error earum, sit numquam obcaecati excepturi provident incidunt, at voluptate in eligendi. Quidem earum impedit maxime quisquam doloremque ratione, eum consectetur accusamus culpa nihil facere architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloribus incidunt! Sint id voluptatibus est minima eum dicta soluta, enim tenetur impedit, tempora corrupti vel culpa nesciunt modi veniam ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis velit eveniet ab earum maiores eaque aliquid, error repellendus quibusdam magni ratione, reprehenderit asperiores impedit cupiditate nesciunt illo molestiae voluptatibus quae adipisci maxime? Id nisi debitis neque eum dicta quas velit fuga obcaecati ipsum, hic est sapiente unde perferendis dolorum cupiditate. Itaque sint saepe aliquid, eligendi magnam possimus dolores doloremque recusandae neque et laboriosam rem iusto fugit nesciunt ut animi assumenda fuga odio aspernatur. Tempore ad cupiditate unde doloribus saepe laudantium dolorum, commodi sunt tempora dicta! Nesciunt animi non laborum praesentium, soluta dicta veritatis rem corrupti suscipit dolor beatae, quibusdam excepturi!</p>
				</div>
			</div>

			<div className='absolute top-2 right-10' >
				<label className="switch text-white">
					<input type="checkbox" checked={editMode} onChange={handleSwitch} />
					<span className="slider round"></span>
				</label>
			</div>
		</div>

	);
}

export default JobDatails;