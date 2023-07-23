/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full'>
            <div className='w-5/6 m-auto text-black my-10'>
                <h3 className='font-bold text-2xl mt-5'>When is Context API used?</h3>
                <p className='mt-2'>Context API is used when we want to pass or share data betwenn components. Context API enables us to share data between components without passing props down through multiple levels of component tree.</p>

                <h3 className='font-bold text-2xl mt-5'>What is a custome hook?</h3>
                <p className='mt-2'>A custom hook is a reusable javascript function which can be used to add unique functionality. Custom hooks starts with the name "use" followed by a descriptive name. Custom hooks enable us to encapsulate complex logic into a single function.</p>

                <h3 className='font-bold text-2xl mt-5'>What is the function of useRef and useMemo and what are there functions?</h3>
                <p className='mt-2'>The useRef hook is a mutable object. It allows us to persist values between renders. useMemo is a hook that is used for memoization. Memoization is a peformance technique that enable memoize expensive calculation so that they are only recomputed when their dependencies change</p>
            </div>
           
        </div>
    );
};

export default Blogs;