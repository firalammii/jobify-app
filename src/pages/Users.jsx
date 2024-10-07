import React, { useState, useEffect } from 'react';
// import '../css/overlay.scss';
// import '../css/users.scss';
// import '../css/edit-customer.scss';
// import colors from '../css/global.scss';
import { UsersTable } from '../components';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { usersTableHeads } from "../data/table-heads-data";
// import ManageUser from './ManageUsers';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../redux/dispatchers/users-dispatcher';
import useAuth from '../hooks/useAuth';
// import { FETCH_USERS } from '../redux/actions/users-actions';

const Users = () => {
	const [modalUser, setModalUser] = useState(null);
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const location = useLocation();

	const users = useSelector(state => state?.users?.users);

	// 	useEffect(() => {
	// 		let isMounted = true;
	// 		const controller = new AbortController();
	// 
	// 		const getUsers = async () => {
	// 			try {
	// 				const response = await axiosPrivate.get('/users', {
	// 					signal: controller.signal
	// 				});
	// 				console.log(response.data);
	// 				isMounted && dispatch({ type: FETCH_USERS, payload: response.data });
	// 			} catch (err) {
	// 				console.error(err);
	// 				navigate('/login', { state: { from: location }, replace: true });
	// 			}
	// 		};
	// 
	// 		getUsers();
	// 
	// 		return () => {
	// 			isMounted = false;
	// 			// controller.abort();
	// 		};
	// 	}, []);


	function closeMangeUser () {
		setModalUser(null);
	}
	function selectModalUser (user) {
		setModalUser(user);
	}

	return (
		<UsersTable
			numbering={1}
			title={"USERS TABLE"}
			tableHeads={usersTableHeads}
			tableBody={users}
			currentPage={1}
			totalContent={10}
			onClick={selectModalUser}
		/>
	);
};

export default Users;
