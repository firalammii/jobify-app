import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import '../css/job-listing.scss';

import { JobCard, Filters, JobDatails } from '../components';
import axios, { BASE_URL } from '../apis/axios.js';
import useAuth from '../hooks/useAuth.js';
import JobsListingTable from '../components/JobsListingTable.jsx';
import { jobsTableHeads } from '../data/table-heads-data.js';


const JobListings = ({ editHandler }) => {
    const [pages, setPages] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [modalJob, setModalJob] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { auth } = useAuth();
    // const jobs = useSelector(state => state.jobs.jobs);

    // const createPagesObject = (totNumItems) => {
    //     const totalPages = Math.ceil(totNumItems / rowsPerPage);
    //     if (totalPages) {
    //         const npages = new Array(totalPages)
    //             .fill('p')
    //             .map((npage, index) => ({ page: index + 1, isSelected: false, }));
    //         return npages;
    //     } else return [];
    // };

    // useEffect(() => {
    //     const npages = createPagesObject(40);
    //     if (npages?.length)
    //         npages[0].isSelected = true;
    //     setPages(npages);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [rowsPerPage]);

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

    function closeUserPage () {
        setModalJob(null);
    }
    function selectModalUser (job) {
        setModalJob(job);
    }


    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/api/jobs`, auth?.accessToken);
                setJobs(data);
            } catch (error) {
                console.log(error);

            }
        };
        fetchCompanies();
    }, []);

    const currentPage = pages?.find(page => page.isSelected) || { page: 1, isSelected: true, };

    return (
        <div className="Job-Listings flex flex-row " style={{ height: "calc(100vh - 80px)" }}>
            <Filters />
            {/* <div>
            {
                jobs.map(job => (<JobCard key={job._id} data={job} editHandler={editHandler} />))
            }
            </div> */}
            {
                modalJob ?
                    <JobDatails job={modalJob} />
                :
                    <JobsListingTable
                        title={"JOBS LISTINGs"}
                        tableHeads={jobsTableHeads}
                        tableBody={jobs}
                        selectModalUser={selectModalUser}
                    />
            }
        </div>
    );
};

export default JobListings;