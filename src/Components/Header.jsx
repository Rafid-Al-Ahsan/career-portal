/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            
        <div className=' w-5/6 m-auto py-5 flex md:flex-row flex-col md:items-center'>
            <div className='w-1/3 font-extrabold text-2xl mb-5 md:mb-0'> 
                <h3 className='text-black'>CareerPortal</h3>
            </div>
            <div className='w-1/3 flex md:flex-row flex-col  justify-center md:gap-12 gap-4 list-none '>
                <Link to="" className='hover:text-secondary'>Home</Link>
                <Link to="" className='hover:text-secondary'>Applied-Jobs</Link>
                <Link to="" className='hover:text-secondary'>Statistics</Link>
                <Link to="" className='hover:text-secondary'>Blogs</Link>
            </div>
            <div className='w-1/3 md:text-center md:flex md:justify-end mt-5 md:mt-0'>
                <button className='bg-gradient-to-r from-gradient1 to-gradient2 p-3 text-[#fff] rounded-[8%]'>Start Applying</button>
            </div>
        </div>
    </div>
    );
};

export default Header;