import Servercall from './servercall';
const userAction=()=>{
  return (dispatch,getState)=>{
      debugger;
      Servercall.fnGetData("https://run.mocky.io/v3/ced6729c-a35c-4223-a0c8-b5d2c097c139")
      .then((response)=>{
        debugger;
        if(response.status== 200){
          sessionStorage.isLoggedIn=true;
          dispatch({
            type:"LOGIN",
            payload:true
        })
        }else{
          sessionStorage.isLoggedIn=false;
          alert('something went wrong try again');
        }
         
      })
      .catch((err)=>{
        console.log(err)
      })
  }  
}
export default userAction