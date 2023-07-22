/* eslint-disable no-unused-vars */
import React from 'react';
import FeaturedJobs from './FeaturedJobs';
import Home from './Home';
import JobCategory from './JobCategory';

const root = () => {

    const ViewDetails = () => {
        console.log('HI');
         
        
     };
   
    return (
        <div>
            <Home></Home>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>            
        </div>
    );
};

export default root;