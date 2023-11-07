import axios from 'axios'
import { HttpsProxyAgent } from 'https-proxy-agent'


function axiosGet(url : string, method : string, useAgent : boolean = false) {
  
    let httpsAgent;
    
    if (useAgent) {
        httpsAgent = new HttpsProxyAgent(url)
    }

    return axios({
        method: method,
        url: url,
        httpAgent: httpsAgent
    }).then((res) => {
        return(res)
    }).catch((err) => {
        return(err)
    }) 

}

export default axiosGet