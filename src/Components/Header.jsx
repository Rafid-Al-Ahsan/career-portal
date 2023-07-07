/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#F4F4F4] w-full overflow-hidden'>
            
        <div className=' w-5/6 m-auto py-5 flex items-center'>
            <div className='w-1/3 font-extrabold text-2xl'> 
                <h3>CareerPortal</h3>
            </div>
            <div className='w-1/3 flex justify-center gap-12 list-none '>
                <a href='' className='hover:text-[#7E90FE]'>Statistics</a>
                <a href='' className='hover:text-[#7E90FE]'>Applied-Jobs</a>
                <a href='' className='hover:text-[#7E90FE]'>Blogs</a>
            </div>
            <div className='w-1/3 text-center flex justify-end'>
                <button className='bg-[#7E90FE] p-3 text-[#fff] rounded-[8%]'>Start Applying</button>
            </div>
        </div>
    </div>
    );
};

export default Header;