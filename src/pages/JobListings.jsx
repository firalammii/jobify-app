import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

// import colors from '../css/global.scss';
// import '../css/job-listing.scss';

// import { useStateContext } from '../contexts/stateContextProvider.js';
// import { selectItem, } from '../utils/utils.js';
import JobCard from '../components/JobCard';
// import { Filters, Pagination } from '../components';
import axios, { BASE_URL } from '../apis/axios.js';


const JobListings = ({ editHandler }) => {
    const [pages, setPages] = useState([]);
    const [modalJob, setModalJob] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { sidebarItems, setSidebarItems, hasFetched } = useStateContext();

    const jobs = useSelector(state => state.jobs.jobs);

    const createPagesObject = (totNumItems) => {
        const totalPages = Math.ceil(totNumItems / rowsPerPage);
        if (totalPages) {
            const npages = new Array(totalPages)
                .fill('p')
                .map((npage, index) => ({ page: index + 1, isSelected: false, }));
            return npages;
        } else return [];
    };
    useEffect(() => {
        const npages = createPagesObject(40);
        if (npages?.length)
            npages[0].isSelected = true;
        setPages(npages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowsPerPage]);

    const handlePageSelection = async (pageNo, rpp) => {
        // setHasFetched(false);
        try {
            // const token = JSON.parse(sessionStorage.getItem("AasW2%fFH*ji$dwQ9c%ANaSBsW2%fFH*ji$dwQ89c%"))?.token;
            // const definedCondns = filterState.filter(fcondn => fcondn.selectedOption !== null
            //     && fcondn.selectedOption?.defined).map(definedCondn => definedCondn.selectedOption);
            // const page = pageNo > pages.length ? pages.length : pageNo;
            // const query = { limit: rpp ? rpp : rowsPerPage, page: page };

            // const { data } = await complexFilterCustomers(definedCondns, query, token);
            // dispatch({ type: FETCH_CUSTOMERS, payload: data.customers });
            // dispatch({ type: CUST_SUMMARY_DATA, payload: data.custSummaryData });
            // if (rpp) setRowsPerPage(rpp);
            // const npages = pages.map(npage =>
            //     npage.page === Number(page) ? { ...npage, isSelected: true } : { ...npage, isSelected: false }
            // );
            // setPages(npages);
            // setHasFetched(true);
        } catch (error) {
            // setHasFetched(false);
            return;
        }
    };

    const currentPage = pages?.find(page => page.isSelected) || { page: 1, isSelected: true, };


    useEffect(() => {
        if (!sidebarItems[0].isSelected) { // when routing
            setSidebarItems(selectItem(sidebarItems[0], sidebarItems));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Job-Listings">
            {/* <Filters /> */}
            {
                jobs.map(job => (<JobCard key={job._id} data={job} editHandler={editHandler} />))
            }

            {hasFetched ?
                <h1>hello</h1>
                :
                <CircularProgress />
            }
            {/* <Pagination
                pages={pages}
                currentPage={currentPage?.page}
                rowsPerPage={rowsPerPage}
                handlePageSelection={handlePageSelection}
            /> */}
        </div>
    );
};

export default JobListings;