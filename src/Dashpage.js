import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

function Dashpage() {
  return (
    <div className="App">
      <Router history={hist}>
  <Switch>
    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    <Redirect to="/admin/dashboard" />
  </Switch>
</Router>,
      
    </div>
  );
}
export default Dashpage