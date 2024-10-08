import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

// import colors from '../css/global.scss';
import '../css/job-listing.scss';
import JobCard from '../components/JobCard.jsx';
import axios, { BASE_URL } from '../apis/axios.js';
// import { fetchCompanies } from '../redux/dispatchers/companies-dispatcher.js';
import useAuth from '../hooks/useAuth.js';

const Companies = ({ editHandler }) => {
    const [companies, setCompanies] = useState([]);
    const [pages, setPages] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // const { sidebarItems, setSidebarItems, hasFetched } = useStateContext();

    const { auth } = useAuth();
    // const dispatch = useDispatch();
    // dispatch(fetchCompanies(auth?.accessToken));

    // const companies = useSelector(state => state.companies.companies);

    // console.log(companies);

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
        const fetchCompanies = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/api/companies`, auth?.accessToken);
                setCompanies(data);
            } catch (error) {
                console.log(error);

            }
        };
        fetchCompanies();
    }, []);


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

    return (
        <div className="Job-Listings">
            {/* <Filters /> */}
            {
                companies.map(company => (<JobCard key={company._id} data={company} editHandler={editHandler} companyOnly={true} />))
            }


            <CircularProgress />


        </div>
    );
};

export default Companies;