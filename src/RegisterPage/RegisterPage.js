import React    from "react";
import template from "./RegisterPage.jsx";
import {reduxForm} from 'redux-form'
import Registervalidation from '../resuablecomponents/Registervalidation'

class RegisterPage extends React.Component {
  fnRegister(){
    
  }
  render() {
    return template.call(this);
  }
}


 

RegisterPage=reduxForm({
  form:'loginform',
  validate:Registervalidation
})(RegisterPage)
export default RegisterPage;