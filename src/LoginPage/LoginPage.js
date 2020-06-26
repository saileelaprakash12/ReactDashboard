import React    from "react";
import template from "./LoginPage.jsx";
import {reduxForm} from 'redux-form'
import Loginvalidation from '../resuablecomponents/Loginvalidation'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userAction from '../action'
import HomePage from "HomePage/index.js";

class LoginPage extends React.Component {
  

  fnLogin(){
    debugger;
    this.props.userAction()
  
  }

  render() {
    return template.call(this);
    
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  userAction:bindActionCreators(userAction,dispatch)
}
}


LoginPage=reduxForm({
  form:'loginform',
  validate:Loginvalidation
})(LoginPage)
export default connect(null,mapDispatchToProps)(LoginPage);
