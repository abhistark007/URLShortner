import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getShortenURL } from './utils/api'
import { useEffect } from 'react';
import { fetchShortURLResults } from './store/shortURLSlice';
import SearchBar from './components/SearchBar';


function App() {
  const {value}=useSelector((state)=>state.shortURL);
  const dispatch=useDispatch();
  

  const getShortUrl=async(url)=>{
    const data=await getShortenURL(url);
    dispatch(fetchShortURLResults(data.data.result));
  } 

  return (
    <div className='flex flex-col bg-black min-h-screen items-center'>
        <div className='flex flex-col w-[60%]'>
            <SearchBar getShortUrl={getShortUrl}/>
            <p className='text-white'>{value.short_link}</p>
        </div>
    </div>
  )
}

export default App
