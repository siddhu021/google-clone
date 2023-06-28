import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineCamera } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const router  = useRouter();
  const searchPAram = useSearchParams();
  const searchTerm = searchPAram.get('searchTerm')
  function selectTab(tab) {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`)
  }
  return (
    <div className='lg:pl-52 flex space-x-2 select-none border-b w-ful justify-center lg:justify-start text-gray-700 text-sm'>
      <div className={`flex items-center space-x-1 mr-5 cursor-pointer active:text-blue-500 pb-3 px-2 
      ${pathName === '/search/web' && 'text-blue-600 border-blue-600 border-b-4'}`} onClick={()=>selectTab("All")}>
        <FiSearch />
        <p>All</p>
      </div>
      <div className={`flex items-center space-x-1 cursor-pointer active:text-blue-500 pb-3 px-2 
      ${pathName === '/search/image' && 'text-blue-600 border-blue-600 border-b-4'}`} onClick={()=>selectTab("Images")}>
        <AiOutlineCamera />
        <p>Images</p>
      </div>
    </div>
  )
}
