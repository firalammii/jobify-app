import React from 'react';
import Button from './Button';
// import colors from '../index.css';
function User ({ user }) {
	return (
		<div className='w-full h-full bg-slate-400 opacity-45 fixed -z-10'>
			<div className='p-8 grid shadow-sm w-2/3 h-1/2 bg-white my-auto mx-auto  rounded-xl'>
				<div className='flex gap-7 items-center'>
					<img
						className='rounded-full h-24 w-24 object-cover'
						src={user?.avatar}
						alt='profile' />
					<div >
						<p className='font-bold'>{user?.firstName} {user?.lastName}</p>
						<p className='font-light'>{user?.email} </p>
						<p className='font-extralight capitalize'>{user?.roles?.map((role, i) => <span key={role}>{i + 1 <= user?.roles.length ? `${role}, ` : role}</span>)} </p>
					</div>
				</div>
				<div className='flex flex-wrap gap-3 items-center justify-center max-h-12'>
					<Button
						label="Make Super"
						style={{ backgroundColor: 'green', color: 'white' }}
					/>
					<Button
						label="Make Admin"
						style={{ backgroundColor: 'blue', color: 'white' }}
					/>
					<Button
						label="Deny Access"
						style={{ backgroundColor: 'gray', color: 'white' }}
					/>
					<Button
						label="Remove User"
						style={{ backgroundColor: 'red', color: 'white' }}
					/>
				</div>
			</div>
		</div >
	);
}

export default User;