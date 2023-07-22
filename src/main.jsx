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
import Root from './Components/root.jsx';

const router =createBrowserRouter([
    {
      path: "/",
      element: <Container></Container>,
        children:[
            {
              path: "/",
              element: <Root></Root>
            },
            {
              path: "Jobdetails",
              element: <JobDetails></JobDetails> 
            },
            {
              path: "Appliedjobs",
              element: <AppliedJobs></AppliedJobs>
            },
            {
              path: "Statistics",
              element: <Statistics></Statistics>
            }

        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
