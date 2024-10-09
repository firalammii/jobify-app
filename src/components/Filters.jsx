import React, { useState } from 'react';
import { jobCategories, remoteOptions } from '../data/formData';
import '../css/forms.scss';

const initial = {
	title: "",
	jobCategory: "",
	salary: { minSalary: "", maxSalary: "" },
	location: { city: "", },
	jobType: "",
	remoteOption: "",
	experience: { minYears: "", maxYears: "" },
	posting_date: "",
};

function Filters () {
	const [state, setState] = useState(initial);

	const handleChange = (e) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};
	const handleObjectChange = (e) => {
		const fieldName = e.target.attributes.parentid.value;
		setState({ ...state, [fieldName]: { ...state[fieldName], [e.target.id]: e.target.value } });
	};

	return (
		<div className='w-1/3 h-full bg-transparent shadow-md rounded-es-2xl p-6 overflow-auto' >
			<h2 className='font-bold'>Filter Criterions</h2>
			<form className='inputs-con w-full grid gap-2' >
				<div className="label-input-con grid gap-2">
					<div>
						<label htmlFor="category" className="label "> Job Category: </label>
						<select
							className='input h-10'
							id='category'
							value={state.jobCategory}
							onChange={handleChange}
						>
							{
								jobCategories.map(jobCat => (<option key={jobCat.label} value={jobCat.value}>{jobCat.label}</option>))
							}
						</select>
					</div>
				</div>

				<div className="label-input-con grid gap-2">
					<div>
						<label htmlFor="title" className="label"> Job Title: </label>
						<input
							className='input h-10'
							type='text'
							id='title'
							placeholder='Job Title'
							value={state.title}
							onChange={handleChange}
							required
							autoComplete='on'
						/>
					</div>
				</div>

				<div className="label-input-con">
					<div>

						<label htmlFor="remoteOption" className="label"> Remote Option: </label>
						<select
							className='input h-10'
							id='remoteOption'
							value={state.remoteOption}
							onChange={handleChange}
						>
							{
								remoteOptions.map(remoteOption => (<option key={remoteOption.label} value={remoteOption.value}>{remoteOption.label}</option>))
							}
						</select>
					</div>
				</div>

				<div className="label-input-con">
					<div>

						<label htmlFor="posting_date" className="label"> Posting Date: </label>
						<input
							className='input h-10'
							type='date'
							id='posting_date'
							placeholder='Posting Date'
							value={state.posting_date}
							onChange={handleChange}
							required
							autoComplete='on'
						/>
					</div>
				</div>

				<div className="label-input-con grid gap-2">
					<p className="label">Experience in Years </p>
					<div>
						<label htmlFor="minYears" className="label">Min Years: </label>
						<input
							className='input small--input h-10'
							type='number'
							id='minYears'
							parentid="experience"
							placeholder='Min Years'
							value={state.experience.minYears}
							onChange={handleObjectChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="maxYears" className="label">Max Years: </label>
						<input
							className='input small--input h-10'
							type='number'
							id='maxYears'
							parentid="experience"
							placeholder='Max Years'
							value={state.experience.maxYears}
							onChange={handleObjectChange}
							required
						/>
					</div>
				</div>

				<p className="label">Salary Range Annually</p>
				<div className="label-input-con flex">
					<div >
						<label htmlFor="minSalary" className="label">Min Salary: </label>
						<input
							className='input small--input h-10 w-24'
							type='number'
							id='minSalary'
							placeholder='Min Salary'
							value={state.salary.minSalary}
							parentid="salary"
							onChange={handleObjectChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="maxSalary" className="label">Max Salary: </label>
						<input
							className='input small--input h-10 w-24 '
							type='number'
							id='maxSalary'
							placeholder='Max Salary'
							value={state.salary.maxSalary}
							parentid="salary"
							onChange={handleObjectChange}
							required
						/>
					</div>
				</div>

				<div className="label-input-con">
					<p className="label">Working Address</p>
					<label htmlFor="city" className="label">City: </label>
					<input
						className='input small--input h-10'
						type='text'
						id='city'
						placeholder='City'
						value={state.location.city}
						parentid="location"
						onChange={handleObjectChange}
						required
					/>
				</div>
				<div className="label-input-con">
					<input
						className='input form-btn float-right w-1/2 bg-blue-500 mt-3 py-2 px-4 font-semibold rounded-md text-white'
						type="submit"
						value={"Search"}
					/>
				</div>

			</form>
		</div>
	);
}

export default Filters;