/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLocation} from '@fortawesome/free-solid-svg-icons';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


const JobDetails = () => {

    const [job, setJob] = useState();
    const {id} = useParams();

    useEffect(() => {
        fetch('/featuredjobs.json')
        .then(response => response.json())
        .then(data => {
            const selectedJob = data.find(j=>j.Id.toString() === id)
            setJob(selectedJob);
        })
    }, )

    return (

        <div className='w-full'>
           <div className='bg-primary text-black font-extrabold text-2xl py-20 text-center'>
              <h2>Job Details</h2>
           </div>

           <div className='w-5/6 m-auto mt-16 grid grid-cols-[3fr,1fr] gap-7'>

             <div>
                <p className='text-lg'> <span className='font-semibold text-lg text-black'>Job Desciption:</span> {job?.JobDescription}</p>
                
                <p className='text-lg mt-7'> <span className='font-semibold text-lg text-black'>Responsibility:</span> {job?.JobResponsibility}</p>

                <h3 className='font-semibold text-lg text-black mt-7'>Educational Requirements:</h3>
                <p className='text-lg mt-3'> {job?. Education} </p>

                <h3 className='font-semibold text-lg text-black mt-7'>Experience:</h3>
                <p className='text-lg mt-3'>  {job?. Experience}!</p>
             </div>

             
             <div>

                <div className='bg-[#e6e9ff]'>
                    <div className='w-5/6 m-auto flex flex-col gap-3 py-5'>
                        <h3 className='font-bold text-lg text-black'>Job Details</h3>
                        <hr className='border-primary'/>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Salary: </span> {job?. Salary}</p>
                        <p className='text-black'><FontAwesomeIcon icon={faCalendar} className='text-secondary'/> <span className='font-semibold'>Job Tiltle: </span> {job?. Position}</p>

                        <h3 className='font-bold text-lg text-black mt-3'>Contact Information</h3>
                        <hr className='border-primary'/>
                        <p className='text-black'><FontAwesomeIcon icon={faPhone} className='text-secondary'/> <span className='font-semibold'>Phone: </span> {job?. Phone}</p>
                        <p className='text-black'><FontAwesomeIcon icon={faEnvelope} className='text-secondary'/> <span className='font-semibold'>Email: </span> {job?. Email}</p>
                        <p className='text-black'><FontAwesomeIcon icon={faLocation} className='text-secondary'/> <span className='font-semibold'>Address: </span> {job?. Location}</p>
                    </div>
                    
             </div>
               
                <div className='text-center mt-7'>
                    <button className='bg-gradient-to-r from-gradient1 to-gradient2 w-full py-4 text-white'>Apply Now</button>
                </div> 
             </div>
            
           </div>
        </div>

        
    );
};

export default JobDetails;