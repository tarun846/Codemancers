import axios from 'axios';

 const axiosclient = axios.create({
    baseURL : 'https://api.giphy.com/v1/gifs/',
     params : {
        api_key : 'yUVwxCzGW5TbWgW1osAcVaOalJSbwCDL',  
     } 
},
)
export default axiosclient;
