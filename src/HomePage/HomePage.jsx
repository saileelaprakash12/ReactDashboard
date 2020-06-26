import "./HomePage.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import Dashpage from '../Dashpage'
function template() {
  return (
    <div className="home-page">
     <HashRouter>
       <div className="menu">
        <Route  path='/' component={Dashpage}></Route>
        <Route  path='/Dashpage' component={Dashpage}></Route>
        
       </div>
     </HashRouter>
    </div>
  );
};

export default template;
