import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'

export default function SearchField() {
   
    const searchParam = useSearchParams();
    const searchTerm = searchParam.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || '');
    const router = useRouter();

    function handleSubmit(e){
      e.preventDefault();
      if(!term.trim()) return;
      else{
        router.push(`/search/web?searchTerm=${term}`)
      }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-grow max-w-3xl border items-center border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md'>
            <input type='text' className='lg:w-[885px] h-6 ml-2 focus:outline-none' 
            onChange={(e)=>{setTerm(e.target.value)}} 
            placeholder='Search Google'  
            value={term}></input>
            <RxCross1 className='mr-5 text-3xl border-r-2 pr-2 cursor-pointer' onClick={()=>{setTerm('')}}/>
            <FaMicrophone className='text-xl text-blue-500 cursor-pointer text-'/>
            <FiSearch className='text-2xl text-blue-500 ml-4 pb-1 cursor-pointer' onClick={handleSubmit}/>
            </form>
  )
}
