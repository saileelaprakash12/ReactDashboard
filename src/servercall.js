import axios from 'axios'
class Servercall {
    static fnGetData(url){
        return axios.get(url) 
    }
}

export default Servercall