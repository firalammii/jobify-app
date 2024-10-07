import React, { useState, useEffect } from 'react';
// import '../css/overlay.scss';
// import '../css/users.scss';
// import '../css/edit-customer.scss';
// import colors from '../css/global.scss';
import { Table, User, UsersTable } from '../components';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { usersTableHeads, tableHeads } from "../data/table-heads-data";
// import ManageUser from './ManageUsers';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../redux/dispatchers/users-dispatcher';
import useAuth from '../hooks/useAuth';
// import { FETCH_USERS } from '../redux/actions/users-actions';

const Users = () => {
	const [modalUser, setModalUser] = useState(null);
	const [users, setUsers] = useState([]);
	const axiosPrivate = useAxiosPrivate();
	const navigate = useNavigate();
	const location = useLocation();

	// const users = useSelector(state => state?.users?.users);
	// const { auth } = useAuth();
	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUsers = async () => {
			try {
				const response = await axiosPrivate.get('/api/users', {
					signal: controller.signal
				});
				console.log(response.data);
				setUsers(response.data);
				// isMounted && dispatch({ type: FETCH_USERS, payload: response.data });
			} catch (err) {
				console.error(err);
				navigate({ from: location, replace: true });
			}
		};

		getUsers();

		return () => {
			isMounted = false;
			// controller.abort();
		};
	}, []);


	function closeUserPage () {
		setModalUser(null);
	}
	function selectModalUser (user) {
		setModalUser(user);
	}

	return (
		<div className='w-full '>
			{
				modalUser ?
					<User user={modalUser} onClose={closeUserPage} />
					:
					<>
						<div>
							<span>USERS TABLE</span>
							<span>10 of total {100}</span>
						</div>
						<Table
							title={"USERS TABLE"}
							tableHeads={tableHeads}
							tableBody={users}
							selectModalUser={selectModalUser}
						/>
					</>
			}
		</div>
	);
};

export default Users;
