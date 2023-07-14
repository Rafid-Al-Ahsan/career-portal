/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/employee.png'

const Home = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>

        <div className='w-5/6 m-auto md:flex'> 

            <div className='md:w-1/2  flex items-center '>
                
                <div>
                    <h1 className='text-4xl font-bold leading-[3rem] text-black'>Advancing towards</h1>
                    <h1 className='text-4xl font-bold leading-[3rem] text-black'>the job of</h1>
                    <h1 className='text-4xl font-bold leading-[3rem] text-secondary'>your dreams</h1>
                    <div className='w-2/3 text-[#757575]'>
                        <p className='my-5'>If you are looking for a job look nowwhere else. Applying through our easy to use website and secure a interview, so what are you waiting for!
                        </p>
                        <button className='bg-secondary p-3 text-[#fff] rounded-[4%] mb-5 md:mb-0'>Get Started</button>
                    </div>
                </div>


            </div>
            <div className='sm:w-full md:w-1/2  flex justify-end'>
                <div className='hidden md:block'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;