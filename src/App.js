import {BrowserRouter, Route} from 'react-router-dom';
import DisplayAllJobs from "./components/DisplayAllJobs";
import DisplayCompanyProfile from "./components/DisplayCompanyProfile";
import DisplaySingleJob from './components/DisplaySingleJob';
import Navbar from "./components/Navbar";
import Test from './components/Test'
import Header from './components/Header';
import Login from './components/Login';


function App() {
 
  return (
    <BrowserRouter>
      <div className="App">

          <Navbar/>


          <Route exact path='/' render={(props)=><DisplayAllJobs{...props}/>}/>
          <Route exact path='/jobs/:jobId' render={(props)=><DisplaySingleJob {...props}/>}/>
          <Route exact path='/company:companyId' render={(props)=><DisplayCompanyProfile {...props}/>}/> 
          <Route exact path='/login' render={(props)=><Login {...props}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
