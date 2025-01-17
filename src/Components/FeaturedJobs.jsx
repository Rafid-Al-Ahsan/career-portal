/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const FeaturedJobs = (props) => {

    const [featuredJobs,setFeaturedJobs] = useState([]);

    //Used for limiting the displayed featuredjob to four
    const [dataLimit, setDataLimmit] = useState(true);
    //Used for hidding and display Sell All Jobs button
    const [showButton, setShowButton] = useState(true);
    
    // console.log(props);


    useEffect(() => {
        fetch('featuredjobs.json')
        .then(response => response.json())
        .then(data => setFeaturedJobs(data))
    }, [])

   
    // Used for limit the displayed featured jobs to four
    let sliceJob = [...featuredJobs];
    if(dataLimit) sliceJob = sliceJob.slice(0,4);

    //Used for showing all data, one the See All Jobs button is clicked
    function displayAllData(){
        setDataLimmit(false);
        setShowButton(!showButton);
    }
   

    return (
       

        <div className='mt-16 w-full'>
            

            
        <div className='w-5/6 m-auto'>
              {/*For Title and subtitle  */}
          <div className='text-center'>
            <h3 className='text-black font-bold text-3xl mb-3'>Featured Jobs</h3>
            <p>Search for your dream job all with this platform</p>
          </div>
           
           <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-7 mt-10'>
              {sliceJob.map(job => <Card key={job.Id} featuredJob={job} details={props}></Card>)}
           </div>

           <div className='text-center mt-5'>
                {showButton && <button onClick={displayAllData} className="btn bg-gradient-to-r from-gradient1 to-gradient2 text-white border-0 mt-3">See All Jobs</button>}
            </div>
           
        </div>    

          {/* <jobDetails.Provider value={[featuredJobs]}></jobDetails.Provider>        */}
          
       </div>
    );
};

function Card(props){

    return(
        <div className="card w-full shadow-xl items-start">
            <figure className="px-10 pt-10">
                <img src={props.featuredJob.CompanyLogo} alt="" className="rounded-xl w-96 h-20" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black font-bold">{props.featuredJob.Position}</h2>
                <p>{props.featuredJob.CompanyName}</p>
                <p className='border-solid border-2 border-secondary text-secondary w-20 text-center py-2 my-2'>{props.featuredJob.JobType}</p>

                <div className='flex gap-5'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {props.featuredJob.Location}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} />Salary: {props.featuredJob.Salary}</p>
                </div>
                
                <div className="card-actions">
                    <Link to={`Jobdetails/${props.featuredJob.Id}`} ><button  className="btn bg-gradient-to-r from-gradient1 to-gradient2 text-white border-0 mt-3 ">View Details</button></Link>
                </div>
            </div>
           
        </div>
    )
}





export default FeaturedJobs;



