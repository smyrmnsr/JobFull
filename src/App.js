import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayAllJobs from "./components/jobComponents/DisplayAllJobs";
import CompanyProfile from "./components/companyComponents/CompanyProfile";
import DisplayJob from './components/jobComponents/DisplayJob';
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
import DisplayAllApplicantsFromThePlatform from './components/jobAplicant/DisplayAllAplicantsFromThePlatform';
import JobHunterProfilePage from './components/jobAplicant/JobHunterProfilePage';
import DisplayAllJobsFromCompany from './components/companyComponents/DisplayAllJobsFromCompany';
import Footer from './components/commonComponents/Footer';
import TemplateData from './components/TemplateData';

import DisplayJobHunterApplications from './components/jobAplicant/DisplayJobHunterApplications';
import DisplayAplicantCV from './components/jobAplicant/Cv/DisplayAplicantCV';

import PrivacyPolicy from './components/footerComponents/PrivacyPolicy';
import SecurityPolicy from './components/footerComponents/SecurityPolicy';
import Cookies from './components/footerComponents/Cookies';
import Terms from './components/footerComponents/TermsOfUse';
import Data from './components/footerComponents/Data';
import AboutUs from './components/footerComponents/AboutUs';
import ContactUs from './components/footerComponents/ContactUs';
import Publisher from './components/footerComponents/Publisher';



function App() {
 
  return (
    <BrowserRouter>
      <div className=" shadow-lg App">

          <Navbar/> 
          {/* <AddJob/> */}
        
          <Route exact path='/' render={(props)=><HomePage {...props}/>}/>
          <Route exact path='/jobs/:jobId/:companyId' render={(props)=><DisplayJob {...props}/>}/>
          <Route exact path='/my-account' render={(props)=><MyCompanyAccount {...props}/>}/>
          <Route exact path='/company/:companyId' render={(props)=><CompanyProfile {...props}/>}/> 
          <Route exact path='/login' render={(props)=><Login {...props}/>}/>
          <Route exact path='/register' render={(props)=><SelectRegistrationType {...props}/>}/>
          <Route exact path='/company-register' render={(props)=><CompanyRegistration {...props}/>}/>
          <Route exact path='/user-register' render={(props)=><UserRegistration {...props}/>}/>
          <Route exact path='/add-job' render={(props)=><CreateJob {...props}/>}/>
          <Route exact path='/job-aplicants' render={(props)=><DisplayAllApplicants {...props}/>}/>
          <Route exact path='/display-job' render={(props)=><DisplayAllJobs {...props}/>}/>
          <Route exact path='/all-aplicants' render={(props)=><DisplayAllApplicantsFromThePlatform {...props}/>}/>
          <Route exact path='/jobhunter-profile/:id' render={(props)=><JobHunterProfilePage {...props}/>}/>
          <Route exact path='/my-jobs' render={(props)=><DisplayAllJobsFromCompany {...props}/>}/>
          <Route exact path='/my-job-aplications' render={(props)=><DisplayJobHunterApplications {...props}/>}/>
          <Route exact path='/C.V/:id' render={(props)=><DisplayAplicantCV {...props}/>}/>
          <Route exact path='/privacy-policy' render={(props)=><PrivacyPolicy {...props}/>}/>
          <Route exact path='/security-policy' render={(props)=><SecurityPolicy {...props}/>}/>
          <Route exact path='/cookies' render={(props)=><Cookies {...props}/>}/>
          <Route exact path='/terms-of-use' render={(props)=><Terms {...props}/>}/>
          <Route exact path='/data' render={(props)=><Data {...props}/>}/>
          <Route exact path='/about-us' render={(props)=><AboutUs {...props}/>}/>
          <Route exact path='/contact-us' render={(props)=><ContactUs {...props}/>}/>
          <Route exact path='/publisher' render={(props)=><Publisher {...props}/>}/>

          <Switch>
          <Route exact path='/create-cv' component={TemplateData} />
          </Switch>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
