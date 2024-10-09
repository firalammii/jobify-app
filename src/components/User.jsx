import React from 'react';
import Button from './Button';
import '../css/overlay.scss';
function User ({ user, onClose }) {

	const makeSuper = () => {

	};
	const makeAdmin = () => {

	};
	const denyAcccess = () => {

	};
	const removeUser = () => {

	};
	const buttons = [
		{ id: 1, label: "Make Super", style: { backgroundColor: 'green', color: 'white' }, onClick: makeSuper, },
		{ id: 2, label: "Make Admin", style: { backgroundColor: 'blue', color: 'white' }, onClick: makeAdmin, },
		{ id: 3, label: "Deny Access", style: { backgroundColor: 'gray', color: 'white' }, onClick: denyAcccess, },
		{ id: 4, label: "Remove User", style: { backgroundColor: 'red', color: 'white' }, onClick: removeUser, },
	]
	return (
		<div className='overlay w-full h-full fixed -z-10' onClick={onClose}>
			<div className='p-8 grid shadow-sm w-2/3 h-1/2 bg-white my-auto mx-auto  rounded-xl' onClick={e => e.stopPropagation()}>
				<div className='flex gap-7 items-center'>
					<img
						className='rounded-full h-24 w-24 object-cover'
						src={user?.avatar}
						alt='profile' />
					<div >
						<p className='font-bold'>{user?.firstName} {user?.lastName}</p>
						<p className='font-light'>{user?.email} </p>
						<p className='font-extralight capitalize'>{user?.roles?.map((role, i) => <span key={role}>{i + 1 < user?.roles.length ? `${role}, ` : role}</span>)} </p>
					</div>
				</div>
				<div className='flex flex-wrap gap-3 items-center justify-center max-h-12'>
					{
						buttons.map(btn => (<Button key={btn.label} label={btn.label} style={btn.style} onClick={btn.onClick} />))
					}

				</div>
			</div>
		</div >
	);
}

export default User;