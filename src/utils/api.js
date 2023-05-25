import axios from "axios";



const BASE_URL="https://api.shrtco.de/v2/";



export const getShortenURL= async(url)=>{
    try{
        const data=await axios.get(BASE_URL+"shorten?url="+url);
        // console.log("SSSS",data);
        return data;
    }catch(e){
        // console.log(e.response.data.ok);
        return e.response.data.ok;
    }
}