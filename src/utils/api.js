import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchShortURLResults } from "../store/shortURLSlice";


const BASE_URL="https://api.shrtco.de/v2/";
const dispatch=useDispatch();


export const getShortenURL= async(url)=>{
    axios.get(BASE_URL+url)
    .then((res)=>{
        dispatch(fetchShortURLResults(res));
        console.log(res);
    })
    .catch((e)=>console.log(e));
}