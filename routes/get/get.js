const axios = require('axios');

const connnected = async()=>{
    try{

        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await axios.get(url)
        return(res) 
    }
    catch (err){
        console.log(err)
    }
}
export{connnected}