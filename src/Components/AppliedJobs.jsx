/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getJobs } from '../../utilities/fakedb';
import { useEffect, useState } from 'react';

const AppliedJobs = () => {


    let jobs = getJobs();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const ids = Object.keys(jobs);
        fetch('featuredjobs.json')
        .then(response => response.json())
        .then(data => {
            const filterJob = data.filter(i=> ids.includes(i.Id.toString()))
            setAppliedJobs(filterJob)
        })
    },[]);
       

    return (
        <div className='w-full'>

           <div className='bg-primary text-black font-extrabold text-2xl py-20 text-center'>
              <h2>Applied Jobs</h2>
           </div>
          
          {appliedJobs.map(j => <Card key ={j.Id} job={j}></Card>)}  

        </div>

    );
};

function Card({job}){
    return(
        <div>

                {/* Code for our own card */}
                <div className='w-5/6 m-auto flex gap-10 justify-between items-center my-12 p-5 border-2 border-primary'>
                            <div className='flex gap-10'>
                                <div>
                                    <img src={job.CompanyLogo} className="w-32 h-40" alt="" />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-black text-lg font-semibold'>{job.Position}</h4>
                                    <p>{job.CompanyName}</p>
                                    <p className='border-solid border-2 border-secondary text-secondary w-20 text-center py-2 my-2'>{job.JobType}</p>
                                        <div className='flex gap-5'>
                                            <p><FontAwesomeIcon icon={faLocationDot} /> {job.Location}</p>
                                            <p>$ Salary: {job.Salary}</p>
                                        </div>
                                </div>
                            </div>

                            <div>
                                <button className="btn bg-gradient-to-r from-gradient1 to-gradient2 text-white border-0 mt-3"><Link to="Jobdetails">View Details</Link></button>
                            </div>
                        </div>
          
        </div>
    );
}

export default AppliedJobs;