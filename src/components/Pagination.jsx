import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React from 'react';
const rpps = [4, 8, 12];


function Pagination ({ total, rowsPerPage, selectRpp }) {
	// const [rowsPerPage, setRowsPerPage] = useState(rpps);
	// const selectRpp = rpp => {
	// 	console.log(rpp);
	// };
	const pages = new Array(20).fill("x").map((v, i) => i + 1);
	// const pages = new Array(total).map((v, i) => i + 1);
	return (
		<section className='bg-white p-2 flex justify-between border-2 border-blue-400 rounded-md' >
			<div className='flex gap-1 w-1/3 items-center  whitespace-nowrap '>
				Rows per page:
				<div className='flex gap-1 w-10 hover:w-full overflow-scroll'>
					{rpps.map(rpp => (<button className='min-w-10 h-10 bg-white grid items-center justify-center border-2 border-blue-400 rounded-md' onClick={selectRpp} >{rpp}</button>))}
				</div>
			</div>
			<div className='w-2/3 border-2 flex justify-center border-blue-400 rounded-md max-w-96'>
				<button className='w-16 flex items-center justify-center'><ArrowLeft /></button>
				<div className='border-2 flex overflow-auto'>
					{
						pages.map(page => (<button className='min-w-10 h-10 bg-white grid items-center justify-center border-2 border-blue-400 rounded-md hover:bg-white-600 hover:text-white' >{page}</button>))
					}
				</div>
				<button className='w-16 flex items-center justify-center'><ArrowRight /></button>
				{

				}
			</div>

		</section>
	);
}

export default Pagination;