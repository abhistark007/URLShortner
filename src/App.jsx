import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getShortenURL } from './utils/api'
import { fetchShortURLResults } from './store/shortURLSlice';
import SearchBar from './components/SearchBar';
import ShortUrlDisplayCard from './components/ShortUrlDisplayCard';



function App() {
  const {value}=useSelector((state)=>state.shortURL); 
  const dispatch=useDispatch();
  

  const getShortUrl=async(url)=>{
    const data=await getShortenURL(url);
    // console.log(data);
    if(data===false){
      dispatch(fetchShortURLResults({}));  
    }else{
    dispatch(fetchShortURLResults(data.data.result));
    }
  } 

  return (
    <div className='flex flex-col bg-black min-h-screen items-center'>
       <p className='text-white text-5xl py-5'><span className='tracking-widest'>URL</span> Shortner v 1.0</p>
        <div className='flex flex-col w-[60%] py-10'>
            <SearchBar getShortUrl={getShortUrl}/>
            
            <ShortUrlDisplayCard url={value.short_link}/>
        </div>
        
    </div>
  )
}

export default App
