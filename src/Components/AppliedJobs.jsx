/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import image from '../assets/employee.png'


const AppliedJobs = () => {


    return (
        <div className='w-full'>

           <div className='bg-primary text-black font-extrabold text-2xl py-20 text-center'>
              <h2>Applied Jobs</h2>
           </div>


          {/* Code for our own card */}

          <div className='w-5/6 m-auto flex gap-10 justify-between items-center my-12 p-5 border-2 border-primary'>
              <div className='flex gap-10'>
                <div>
                    <img src={image} className="w-32 h-40" alt="" />
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-black text-lg font-semibold'>Technical Databse engineer</h4>
                    <p>Google LLc</p>
                    <p className='border-solid border-2 border-secondary text-secondary w-20 text-center py-2 my-2'>Remote</p>
                        <div className='flex gap-5'>
                            <p><FontAwesomeIcon icon={faLocationDot} /> 15,000</p>
                            <p><FontAwesomeIcon icon={faDollarSign} />Salary: 15,000</p>
                        </div>
                </div>
              </div>

              <div>
                <button className="btn bg-gradient-to-r from-gradient1 to-gradient2 text-white border-0 mt-3"><Link to="Jobdetails">View Details</Link></button>
              </div>
          </div>
          <div className='w-5/6 m-auto flex gap-10 justify-between items-center my-12 p-5 border-2 border-primary'>
              <div className='flex gap-10'>
                <div>
                    <img src={image} className="w-32 h-40" alt="" />
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-black text-lg font-semibold'>Technical Databse engineer</h4>
                    <p>Google LLc</p>
                    <p className='border-solid border-2 border-secondary text-secondary w-20 text-center py-2 my-2'>Remote</p>
                        <div className='flex gap-5'>
                            <p><FontAwesomeIcon icon={faLocationDot} /> 15,000</p>
                            <p><FontAwesomeIcon icon={faDollarSign} />Salary: 15,000</p>
                        </div>
                </div>
              </div>

              <div>
                <button className="btn bg-gradient-to-r from-gradient1 to-gradient2 text-white border-0 mt-3"><Link to="Jobdetails">View Details</Link></button>
              </div>
          </div>

          
          


        </div>



    );
};

export default AppliedJobs;