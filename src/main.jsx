import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './Components/JobDetails.jsx';
import Container from './Components/Container.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Container></Container>,
        children:[
            {
              path: "/",
              element: <App/>
            },
            {
              path: "Jobdetails",
              element: <JobDetails></JobDetails> 
            }

        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
