import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getShortenURL } from './utils/api'
import { useEffect } from 'react';
import { fetchShortURLResults } from './store/shortURLSlice';


function App() {
  const {value}=useSelector((state)=>state.shortURL);
  const dispatch=useDispatch();
  

  const getShortUrl=async()=>{
    const data=await getShortenURL("www.google.com");
    dispatch(fetchShortURLResults(data.data.result));
  } 

  return (
    <div className='flex flex-col'>
        
    </div>
  )
}

export default App
