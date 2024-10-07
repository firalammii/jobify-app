import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Tooltip } from '@mui/material';
import { AccountCircleRounded } from '@mui/icons-material';

import '../css/table.scss';
import { FloatingButtons } from '.';
// import { ManageProfile, ManageUser } from '.';

const UsersTable = (props) => {

	// const [modalUser, setModalUser] = useState(null);
	// const [mngp, setMngp] = useState("");

	const { numbering, title, tableHeads, tableBody, totalContent, onClick } = props;
	// const currUser = useSelector(state => state.users.currUser);

	// useEffect(() => {
	// 	if (modalUser) {
	// 		if (modalUser._id === currUser._id) setMngp("mngpp");
	// 		else setMngp("mngup");
	// 	} else setMngp("");
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [modalUser]);

	// function openManageProfile () {
	// 	document.getElementById("manage-profile")?.classList.remove("offscreen");
	// }

	return (
		<div className="UsersTable-comp">
			<div className="table-con shadow">

				<div className="title">
					<span>{title}</span>
					<span style={{ justifySelf: "flex-end", textTransform: "capitalize" }}>{`total: ${totalContent} `}</span>
				</div>

				<div className="table" >

					<div className='thead' style={{ gridTemplateColumns: `repeat(${tableHeads.length}, auto)`, }}>
						{tableHeads?.map(thead =>
						(<div div style={thead.styles} className='cell' title={thead.label} key={thead.id} >
							{thead.label}
						</div>)
						)}
					</div>

					<div className='tbody'>
						{tableBody?.map((body, index) => (
							<div
								key={`${body._id}-${index}`}
								className='row'
								style={{ gridTemplateColumns: `repeat(${tableHeads.length}, auto)` }}
								onClick={() => onClick(body)}
							>
								<div className='cell' style={{ ...tableHeads[0].styles, justifyContent: "flex-start" }}>
									{numbering + index}
									1
								</div>
								<div className='cell' style={{ ...tableHeads[1].styles }}>
									{
										body?.avatar ?
											<img
												className='rounded-full h-7 w-7 object-cover'
												src={body.avatar}
												alt='profile'
											/>
											: <AccountCircleRounded fontSize='medium' color='primary' />
									}
								</div>

								<div className='cell' style={{ ...tableHeads[2].styles }}>
									{`${body?.firstName} ${body?.lastName}`}
								</div>

								<div className='cell' style={{ ...tableHeads[3].styles, }}>
									{body?.email}
								</div>

								<div className='cell' style={{ ...tableHeads[4].styles }}>

									{body?.roles?.map((role, i) => <span key={role}>{(i + 1 < body.roles.length) ? role + ", " : role}</span>)}
								</div>

							</div>))}
					</div>
				</div>
			</div>
		</div>
	);
};


export default UsersTable;