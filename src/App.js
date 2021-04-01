import {BrowserRouter, Route} from 'react-router-dom';
import DisplayAllJobs from "./components/jobComponents/DisplayAllJobs";
import DisplayCompanyProfile from "./components/companyComponents/DisplayCompanyProfile";
import DisplaySingleJob from './components/jobComponents/DisplaySingleJob';
import Navbar from "./components/commonComponents/Navbar";
import Login from './components/commonComponents/Login';
// import CustomerAccount from './components/CustomerAccount';
import SelectRegistrationType from './components/commonComponents/SelectRegistrationType';
import CompanyRegistration from './components/companyComponents/CompanyRegistration';
import UserRegistration from './components/jobAplicant/UserRegistration';
import MyCompanyAccount from './components/companyComponents/MyCompanyAccount';
import CreateJob from './components/companyComponents/CreateJob';
import DisplayAllApplicants from './components/companyComponents/DisplayAllApplicants';
import HomePage from './components/commonComponents/HomePage';


function App() {
 
  return (
    <BrowserRouter>
      <div className="App">

          <Navbar/>
          {/* <AddJob/> */}
        
          <Route exact path='/' render={(props)=><HomePage{...props}/>}/>
          <Route exact path='/jobs/:jobId/:companyId' render={(props)=><DisplaySingleJob {...props}/>}/>
          <Route exact path='/my-account' render={(props)=><MyCompanyAccount {...props}/>}/>
          <Route exact path='/company/:companyId' render={(props)=><DisplayCompanyProfile {...props}/>}/> 
          <Route exact path='/login' render={(props)=><Login {...props}/>}/>
          <Route exact path='/register' render={(props)=><SelectRegistrationType {...props}/>}/>
          <Route exact path='/company-register' render={(props)=><CompanyRegistration {...props}/>}/>
          <Route exact path='/user-register' render={(props)=><UserRegistration {...props}/>}/>
          <Route exact path='/add-job' render={(props)=><CreateJob {...props}/>}/>
          <Route exact path='/job-aplicants' render={(props)=><DisplayAllApplicants {...props}/>}/>
          <Route exact path='/display-job' render={(props)=><DisplayAllJobs {...props}/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
