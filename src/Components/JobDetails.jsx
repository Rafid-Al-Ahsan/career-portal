
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    return (

        <div className='w-full'>
           <div className='bg-primary text-black font-extrabold text-2xl py-20 text-center'>
              <h2>Job Details</h2>
           </div>

           <div className='w-5/6 m-auto mt-16 grid grid-cols-[3fr,1fr] gap-7'>

             <div>
                <p className='text-lg'> <span className='font-semibold text-lg text-black'>Job Desciption:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nobis animi totam modi, earum qui cupiditate labore distinctio ab nemo!</p>
                
                <p className='text-lg mt-7'> <span className='font-semibold text-lg text-black'>Responsibility:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nobis animi totam modi, earum qui cupiditate labore distinctio ab nemo!</p>

                <h3 className='font-semibold text-lg text-black mt-7'>Educational Requirements:</h3>
                <p className='text-lg mt-3'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nobis animi totam modi, earum qui cupiditate labore distinctio ab nemo!</p>

                <h3 className='font-semibold text-lg text-black mt-7'>Experience:</h3>
                <p className='text-lg mt-3'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nobis animi totam modi, earum qui cupiditate labore distinctio ab nemo!</p>
             </div>

             
             <div>

                <div className='bg-[#d2d8fe]'>
                    <div className='w-5/6 m-auto flex flex-col gap-3 py-5'>
                        <h3 className='font-bold text-lg text-black'>Job Details</h3>
                        <hr className='border-primary'/>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Salary: </span> Lorem ipsum dolor sit amet.</p>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Job Tiltle: </span> Lorem ipsum dolor sit amet.</p>

                        <h3 className='font-bold text-lg text-black mt-3'>Contact Information</h3>
                        <hr className='border-primary'/>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Phone: </span> Lorem ipsum dolor sit amet.</p>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Email: </span> Lorem ipsum dolor sit amet.</p>
                        <p className='text-black'><FontAwesomeIcon icon={faDollarSign} className='text-secondary'/> <span className='font-semibold'>Address: </span> Lorem ipsum dolor sit amet.</p>
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