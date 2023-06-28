'use client';

import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaMicrophone } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const [input, setInput] = useState();
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(!input.trim()){
      return;
    }else{
      router.push(`/search/web?searchTerm=${input}`)
    }
  }

  async function RandomSearch() {
    setRandomSearchLoading(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word').then((res)=>res.json()).then((data)=>data[0]);
    if(!response){
      return;
    }else{
      router.push(`/search/web?searchTerm=${response}`)
      setRandomSearchLoading(false)
    }
  }

  return (
    <div className='items-center space-x-2'>
            <form onSubmit={handleSubmit} className='flex mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl mt-5'>
            <FiSearch className='text-xl text-gray-500' />
            <input type='text' className='w-[485px] h-6 ml-2 focus:outline-none' 
            onChange={(e)=>{setInput(e.target.value)}} 
            placeholder='Search Google'  
            value={input}></input>
            <FaMicrophone className='text-xl text-gray-500'/>
            </form>

            <div className='flex flex-col mt-8 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center items-center'>
              <button className='btn' onClick={handleSubmit}>Google Search</button>
              <button className='btn flex items-center justify-center disabled:opacity-80' onClick={RandomSearch} disabled={randomSearchLoading}>
              {randomSearchLoading ? (<img src='spinner.svg' alt='spinner' className='h-6 text-center'/>):(<span>I am Feeling Lucky</span>)}
              </button>
            </div>        
    </div>
  )
}
