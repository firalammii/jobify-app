import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { FileOpenRounded } from "@mui/icons-material";
import '../css/forms.scss';
import { Alert } from '../components';
import axios, { BASE_URL } from '../apis/axios';
import { useDispatch, useSelector } from 'react-redux';
// import { createCompany } from '../redux/dispatchers/companies-dispatcher';
import useAuth from '../hooks/useAuth';
// import { CREATE_COMPANY } from '../redux/actions/company-actions';
import { companyTypes, countries, } from '../data/form1-data';
const initial = {
	companyType: "",
	companyName: "",
	location: { city: "", state: "", country: "", zipCode: "" },
	telNumber: { mobile: "", line: "" },
	website: "",
	companyLogo: "",
	description: ""
};

function AddCompany ({ tobeEditted }) {
	const inputRef = useRef("");
	const [state, setState] = useState(initial);
	const [door, setDoor] = useState("");
	const [alertMsg, setAlertMsg] = useState("");
	const [success, setSuccess] = useState(false);

	const dispatch = useDispatch();
	const { auth } = useAuth();

	useEffect(() => {
		if (tobeEditted)
			setState(tobeEditted);
		else
			setState(initial);
	}, []);

	useEffect(() => {
		// inputRef.current.focus();
	}, []);

	const clearFields = () => {
		setState(initial);
	};

	const handleChange = (e) => {
		console.log(e.target.type);
		if (e.target.type === "file")
			setState({ ...state, [e.target.id]: e.target.files[0] });
		else
			setState({ ...state, [e.target.id]: e.target.value });
	};

	const handleObjectChange = (e) => {
		const fieldName = e.target.attributes.parentid.value;
		setState({ ...state, [fieldName]: { ...state[fieldName], [e.target.id]: e.target.value } });
	};

	const handleSubmit = async (e) => {
		const { category, company_name, logo, location, website, email, tel_Number, description, } = state;
		e.preventDefault();
		const validInputs = category && company_name && logo && location && website && email && tel_Number && description;
		if (!validInputs) {
			setAlertMsg("ooops There Empty Field in Form, All fields are Required !!");
			return;
		}
		setAlertMsg("");
		const formData = new FormData();
		formData.append("category", category);
		formData.append("company_name", company_name);
		formData.append("logo", logo);
		formData.append("location", location);
		formData.append("website", website);
		formData.append("email", email);
		formData.append("tel_Number", tel_Number);
		formData.append("description", description);

		try {
			// const response = await axios.post(`${BASE_URL}/companies`, formData, {
			// 	// headers: { 'Content-Type': 'application/json' },
			// });
			// dispatch({ type: CREATE_COMPANY, payload: response.data });
			// console.log(response);

			// dispatch(createCompany(formData, auth.accessToken));
			setSuccess(true);
			setAlertMsg("company is Posted Successfully !!");
			clearFields();
		} catch (err) {
			console.log(err);
			setSuccess(false);
			setAlertMsg('Sorry !! Posting the Company is Failed, Try Again Later !');
		}
	};

	// const createFormData = (data) => {
	// const myFiles = document.getElementById('myFiles').files;
	// Object.keys(myFiles).forEach(key =>{
	// 	// formData.append(myFiles.item(key).name, myFiles.item(key))
	// })
	// };

	return (
		<div className="AddComp overflow-auto h-full">
			{
				alertMsg ?
					<Alert returnFunction={() => setAlertMsg("")} message={alertMsg} success={success} />
					:
					<form className="form" onSubmit={handleSubmit} >
						<div className="inputs-con">

							<div className="label-input-con">
								<label htmlFor="stateType" className="label"> Company Type</label>
								<select
									className='input'
									id='companyType'
									value={state.companyType}
									onChange={handleChange}
								>
									{
										companyTypes.map(type => (<option key={type} value={type}>{type}</option>))
									}
								</select>
							</div>

							<div className="label-input-con">
								<label htmlFor="title" className="label"> Company Name</label>
								<input
									className='input'
									type='text'
									id='companyName'
									placeholder='Company Name'
									value={state.companyName}
									onChange={handleChange}
									required
									autoComplete='on'
								/>
							</div>

							<div className="label-input-con">
								<label htmlFor="website" className="label"> Web Address</label>
								<input
									className='input'
									type='url'
									id='website'
									pattern='https://www.*'
									placeholder='https://www.*'
									// placeholder='Web Address'
									value={state.website}
									onChange={handleChange}
									required
									autoComplete='on'
								/>
							</div>

							<div className="label-input-con">
								<label htmlFor="title" className="label"> Company Name</label>
								<input
									className='input'
									type='text'
									id='companyName'
									placeholder='Company Name'
									value={state.companyName}
									onChange={handleChange}
									required
									autoComplete='on'
								/>
							</div>

							<div className="label-input-con">
								<label htmlFor="logo" className="label logo"> Select Logo
									<div className='input logo'>
										<FileOpenRounded color='primary' fontSize='small' />
									</div>
								</label>
								<input
									className='input '
									type='file'
									name='companyLogo'
									id='companyLogo'
									value={state.companyLogo}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="label-input-con">
								<label htmlFor="description" className="label"> Company Description</label>
								<input
									className='input'
									type='file'
									name='description'
									id='description'
									value={state.description}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="label-input-con">
								<p className="label">Company Address</p>

								<label htmlFor="city" className="label">City</label>
								<input
									className='input small--input'
									type='text'
									id='city'
									placeholder='City'
									value={state.location?.city}
									parentid="location"
									onChange={handleObjectChange}
									required
								/>
								<label htmlFor="state" className="label">State</label>
								<input
									className='input small--input'
									type='text'
									id='state'
									placeholder='City'
									value={state.location?.state}
									parentid="location"
									onChange={handleObjectChange}
									required
								/>
								<label htmlFor="country" className="label">Country</label>
								<select
									className='input'
									id='country'
									parentid="location"
									value={state.location?.country}
									onChange={handleObjectChange}
									required
								>
									{countries.map(country => (<option key={country} value={country}>{country}</option>))}
								</select>

								<label htmlFor="zipCode" className="label">Zip Code</label>
								<input
									className='input small--input'
									type='text'
									id='zipCode'
									placeholder='Zip Code'
									parentid="location"
									value={state.location.zipCode}
									onChange={handleObjectChange}
								/>
							</div>

							<div className="label-input-con">
								<p className="label">Telephone Number</p>

								<label htmlFor="mobile" className="mobile">Mobile</label>
								<input
									className='input small--input'
									type='tel'
									id='mobile'
									placeholder='phone number'
									parentid="telNumber"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									value={state.telNumber?.mobile}
									onChange={handleObjectChange}
									required
									autoCorrect='on'
								/>
								<label htmlFor="line" className="label">Line</label>
								<input
									className='input small--input'
									type='tel'
									id='line'
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									placeholder='phone number'
									parentid="telNumber"
									value={state.telNumber?.line}
									onChange={handleObjectChange}
								/>

							</div>

							<div className="label-input-con">
								<input
									className='input form-btn'
									type='submit'
									value={tobeEditted ? "Update Company" : "Add Company"}
								/>
							</div>
						</div>



					</form>

			}
		</div>
	);

}

export default AddCompany;