import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './Components/JobDetails.jsx';
import Container from './Components/Container.jsx';
import AppliedJobs from './Components/AppliedJobs.jsx';
import Statistics from './Components/Statistics.jsx';
import Blogs from './Components/Blogs';
import App from './App';

const router =createBrowserRouter([
    {
      path: "/",
      element: <Container></Container>,
        children:[
            {
              path: "/",
              element: <App />
            },
            {
              path: "Jobdetails/:id",
              element: <JobDetails></JobDetails> 
            },
            {
              path: "Appliedjobs",
              element: <AppliedJobs></AppliedJobs>
            },
            {
              path: "Statistics",
              element: <Statistics></Statistics>
            },
            {
              path: "Blogs",
              element: <Blogs></Blogs>
            }

        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>,
)
