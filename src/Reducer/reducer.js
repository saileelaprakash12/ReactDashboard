import intialval from '../intialval';
const reducer=(state=intialval,action)=>{

 switch(action.type){
     case "LOGIN":
         state={
             ...state,
             isLoggedIn:true
         }
         break;
        
 }   
return state
}
export default reducer