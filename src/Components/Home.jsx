/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/employee.png'

const Home = () => {
    return (
        <div className='bg-[#F4F4F4] w-full overflow-hidden'>
        <div className='w-5/6 m-auto flex'>
            <div className='w-1/2 flex items-center'>
                
                <div>
                    <h1 className='text-4xl font-bold leading-[3rem]'>Advancing towards</h1>
                    <h1 className='text-4xl font-bold leading-[3rem]'>the job of</h1>
                    <h1 className='text-4xl font-bold leading-[3rem] text-[#7E90FE]'>your dreams</h1>
                    <div className='w-2/3 text-[#757575]'>
                        <p className='my-5'>If you are looking for a job look nowwhere else. Applying through our easy to use website and secure a interview, so what are you waiting for!
                        </p>
                        <button className='bg-[#7E90FE] p-3 text-[#fff] rounded-[4%]'>Get Started</button>
                    </div>
                </div>


            </div>
            <div className='w-1/2 flex justify-end'>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Home;