import React from 'react'
import {AiOutlineCopy} from 'react-icons/ai'

function ShortUrlDisplayCard({url}) {
  if(!url){
    return (
        <></>
      )
  }

  return (
    <div className='flex bg-purple-600 text-white rounded-lg items-center'>
        <p>{url}</p>
        <div className='flex justify-center items-center'>
            <AiOutlineCopy/>
        </div>
    </div>
  )
}

export default ShortUrlDisplayCard