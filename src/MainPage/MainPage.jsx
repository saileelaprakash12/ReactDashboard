import "./MainPage.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom'
import LoginPage from '../LoginPage/index';

function template() {
  return (
    <div className="main-page">
     <HashRouter>
       <div className="menu">
        <Route  path='/' component={LoginPage}></Route>
        <Route  path='/login' component={LoginPage}></Route>
       </div>
     </HashRouter>
    </div>
  );
};

export default template;
