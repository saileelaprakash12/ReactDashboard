import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import './App.css';
//import DashBoard from './DashBoard/index';
import MainPage from './MainPage';
import store from './store';
import Dashpage from 'Dashpage';
function App(props) {
  useEffect(()=>{
     let isLoggedIn=sessionStorage.isLoggedIn;
     if(isLoggedIn){
      store.dispatch({
        type:"LOGIN",
        payload:true
    })
     }
  },[]);
  return (
    <div className="App">
     {props.isLoggedIn ? <Dashpage/> : <MainPage/>}
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
      isLoggedIn:state.commonReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
