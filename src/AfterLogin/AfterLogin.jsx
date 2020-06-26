import "./AfterLogin.css";
import React from "react";
import Dashboard from '../DashBoard/index'
function template() {
  return (
    <div className="main-page">
     <HashRouter>
       <div className="menu">
        <Route  path='/' exact component={Dashboard}></Route>
        <Route  path='/dashboard' component={Dashboard}></Route>
       </div>
     </HashRouter>
    </div>
  );
};

export default template;
