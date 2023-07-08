/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const JobCategory = () => {

    const [jobcategory, setJobCategory] = useState([]);

    useEffect(() => {
        fetch('jobcategory.json')
        .then(response => response.json())
        .then(data => setJobCategory(data))

    },[]);

    return (
       <div className='mt-16 w-full'>

        <div className='w-5/6 m-auto'>
              {/*For Title and subtitle  */}
          <div className='text-center'>
            <h3 className='text-black font-extrabold text-3xl mb-3'>Job Category List</h3>
            <p>Search for your dream job all with this platform</p>
          </div>
           
           <div className='flex flex-wrap'>
              {jobcategory.map(job => <Cards key={job.Id} info={job}></Cards>)}
           </div>
           
        </div>           
       </div>

       
       
    );
};

function Cards(props){
    console.log();
    return(
        <div className='xl:m-auto'>

        {/* Card Component */}
        <div className="card w-60 shadow-xl mt-10 mx-1 items-start">
            <figure className="pt-10 px-9">
                <img src={props.info.image} alt="Shoes" className="rounded-[50%] w-20 h-20" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{props.info.Title}</h2>
                <p>{props.info.JobsPresent} Jobs Avaliable</p>
            </div>

        </div>
        

        </div>
    )
}

export default JobCategory;