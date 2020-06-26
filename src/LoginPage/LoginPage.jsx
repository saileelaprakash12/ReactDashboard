import "./LoginPage.css";
import React from "react";
import {Field} from 'redux-form';
import Textbox from '../resuablecomponents/Textbox'
import { HashRouter, Switch, Route } from "react-router-dom";
import RegisterPage from '../RegisterPage'
import history from '../resuablecomponents/history'



function template() {
  return (
    <div className="login-page container-fluid">
      <h1 className="text-center text-sucess mt-3 mb-3">LoginPage</h1>
      <form onSubmit={this.props.handleSubmit(this.fnLogin.bind(this))}>
      <Field
        name="username"
        lbl="Username"
        placeholder="username"
        component={Textbox}
        type="text"
         />
         
          <Field
        name="password"
        lbl="Password"
        placeholder="password"
        component={Textbox}
        type="password"
         />
        <div className="text-center">
        <input type="submit" value="Login" className="btn btn-primary text-center "/>
        </div>
        {/* <a href="#/register" className="btn btn-primary">Register</a>
          <HashRouter history={history}>
                    <Route path="/register" component={RegisterPage} />
          </HashRouter> */}
         
         </form>
    </div>
  );
};


export default template;
