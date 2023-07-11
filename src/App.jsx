import './App.css'
import FeaturedJobs from './Components/FeaturedJobs'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import JobCategory from './Components/JobCategory'

function App() {

  return (
     <div>
         <Header></Header>
         <Home></Home>
         <JobCategory></JobCategory>
         <FeaturedJobs></FeaturedJobs>
         <Footer></Footer>
     </div>
  )
}

export default App
