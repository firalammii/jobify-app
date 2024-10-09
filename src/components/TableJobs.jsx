import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ROLES } from '../data/roles';
import Pagination from './Pagination';

const JobsListingTable = ({ title, tableHeads, tableBody, selectModalUser }) => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<div className='w-full h-full shadow-md'>
			<Paper sx={{ width: '100%', overflow: 'hidden', }} style={{ zIndex: -999 }}>
				<TableContainer
					sx={{ height: "calc(100vh - 140px)", }}
				>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{tableHeads?.map((column) => (<TableCell key={column.id}> {column.label}</TableCell>))}
							</TableRow>
						</TableHead>
						<TableBody style={{ overflow: "auto" }} >
							{
								tableBody?.map((body, index) => {
									const nroles = body?.roles?.filter(role => role !== ROLES.user);
									return (
										<TableRow
											key={body?._id}
											hover
											role="checkbox"
											tabIndex={-1}
											style={{ cursor: "pointer" }}
											onClick={() => selectModalUser(body)}
										>
											<TableCell>{index + 1}</TableCell>
											<TableCell>{body?.title}</TableCell>
											<TableCell>{body?.jobType}</TableCell>
											<TableCell>{body.salary?.minSalary} - {body?.salary?.maxSalary} {body.salary?.currency}</TableCell>
											<TableCell>{body.experience?.minYears} - {body?.experience?.maxYears} Years</TableCell>
											{/* <TableCell>{body?.remoteOption}</TableCell> */}
											<TableCell>{body?.location?.city}, {body?.location?.country} </TableCell>
											<TableCell>{new Date(body?.postingDate).toLocaleDateString()}</TableCell>
											<TableCell>{body?.status}</TableCell>
										</TableRow>
									);
								})
							}
						</TableBody>
					</Table>
				</TableContainer>

			</Paper>

			{/* <div className='mt-auto absolute bottom-0 right-0 h-24 bg-white' > */}
			{/* <TablePagination
				style={{ width: "76%", position: "absolute", bottom: 0, right: 0, background: "white", borderRadius: "0 0 1rem 0 " }}
				rowsPerPageOptions={[4, 8, 15]}
				// rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={tableBody.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/> */}
			{/* </div> */}
			<Pagination />
		</div>
	);
};

export default JobsListingTable;