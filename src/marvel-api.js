import axios from 'axios'

const marvelAPI = axios.create({
    baseURL : 'http://gateway.marvel.com/v1/public',
    headers :{
        Accept : 'application/json',
        'Content-Type' : 'application/json'
    },
    timeout : 10000
})

marvelAPI.defaults.params = {
    apiKey : 'bda12c2070a7b1fd1ea89ad11722acba',
    hash : '3821fc91ed145bc4ddf1563418992ed9',
    ts: 1
};

marvelAPI.interceptors.request.use(async config =>{
    return config
},
    function(error){
        return Promise.reject(error)
})

export default marvelAPI;