import React from 'react'
import {AiOutlineCopy} from 'react-icons/ai'
import { toast } from 'react-toastify';

function ShortUrlDisplayCard({url}) {


    const handleCopy=()=>{
        navigator.clipboard.writeText(url);
        toast.success("Link Copied !")
    }

  if(!url){
    return (
        <></>
      )
  }

  return (
    <div className='flex bg-purple-600 text-white rounded-lg items-center py-4 justify-between px-10 my-5'>
        <p>{url}</p>
        <div onClick={handleCopy} className='hover:text-pink-600 duration-100 cursor-pointer flex justify-center items-center text-3xl'>
            <AiOutlineCopy/>
        </div>
    </div>
  )
}

export default ShortUrlDisplayCard