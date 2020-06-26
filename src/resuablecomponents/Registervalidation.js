const Registervalidation=(data)=>{
    
    const errors={}
            if(!data.firstname){
                 errors.firstname="please enter firstname"
        
                }
                if(!data.lastname){
                    errors.lastname="please enter lastname"
                    
                }

        if(!data.username){
            errors.username="please enter username"
            
        }
        if(!data.password){
            errors.password="please enter password"
        }
        return errors
    }
    
export default Registervalidation