// import React, {useState, useEffect} from 'react';
// import data from './assets/data.json';
// import JobBoardComponent from './components/JobBoardComponent';

import DisplayAllJobs from "./components/DisplayAllJobs";
import Navbar from "./components/Navbar";


function App() {
 
  return (

    <div className="App">
      <Navbar/>

      <DisplayAllJobs/>

    </div>
  );
}

export default App;
