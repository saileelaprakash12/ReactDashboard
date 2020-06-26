const Loginvalidation=(data)=>{
    
    const errors={}

        if(!data.username){
            errors.username="please enter username"
            
        }
        if(!data.password){
            errors.password="please enter password"
        }
        return errors
    }
    
export default Loginvalidation