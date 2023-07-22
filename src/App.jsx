/* eslint-disable no-unused-vars */
import './App.css'
import FeaturedJobs from './Components/FeaturedJobs'
import Home from './Components/Home'
import JobCategory from './Components/JobCategory'


function App() {

  // const [job, setJob] = useState([]);

  const ViewDetails = () => {
     console.log('HI');
      
     
  };

  return (
     <div>
         <Home></Home>
         <JobCategory></JobCategory>
         <FeaturedJobs Details={ViewDetails()}></FeaturedJobs>
     </div>
  )
}

export default App
