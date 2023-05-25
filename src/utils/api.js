import axios from "axios";
import { toast } from "react-toastify";



const BASE_URL="https://api.shrtco.de/v2/";



export const getShortenURL= async(url)=>{
    try{
        const data=await axios.get(BASE_URL+"shorten?url="+url);
        // console.log("SSSS",data);
        toast("Link Generated Successfully");
        return data;
    }catch(e){
        // console.log(e.response.data.ok);
        toast.error(e.response.data.error);
        return e.response.data.ok;
    }
}