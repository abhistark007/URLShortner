import React, { useState } from 'react'
import { toast } from 'react-toastify';

function SearchBar({getShortUrl}) {
    const [url,setUrl]=useState("");

    const handleClick=()=>{
        if(url.length>0){
            getShortUrl(url);
        }else{
            toast.warn("The Input field cannot be empty !")
        }
    }
  return (
    <div className='flex border-2 border-purple-600 rounded-full max-sm:flex-col max-sm:border-0 max-sm:gap-4'>
        <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} placeholder='paste url to be shortened' className='max-sm:rounded-full bg-black text-white outline-none py-2 px-3 rounded-l-full flex-1'/>
        <button onClick={handleClick} className='duration-200 hover:scale-110 bg-purple-600 rounded-r-full px-3 text-white max-sm:rounded-full'>Generate</button>
    </div>
  )
}

export default SearchBar