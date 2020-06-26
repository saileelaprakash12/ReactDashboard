import "./RegisterPage.css";
import React from "react";
import {Field} from 'redux-form'
import Textbox from '../resuablecomponents/Textbox';
import {Link} from 'react-router-dom';

function template() {
  return (
    <div className="register-page">
      <h1>RegisterPage</h1>
      <form onSubmit={this.props.handleSubmit(this.fnRegister)}>
      <Field
        name="firstname"
        lbl="FirstName"
        placeholder="firstname"
        component={Textbox}
        type="text"
         />
        <Field
        name="lastname"
        lbl="LastName"
        placeholder="lastname"
        component={Textbox}
        type="text"
         />
        <Field
        name="username"
        lbl="Username"
        placeholder="username"
        component={Textbox}
        type="text"
         />
          <Field
        name="username"
        lbl="Username"
        placeholder="username"
        component={Textbox}
        type="text"
         />
          <button className="btn btn-primary">Register</button>
          <Link to="/login" className="btn btn-link">Cancel</Link>
         </form>
    </div>
  );
};

export default template;
