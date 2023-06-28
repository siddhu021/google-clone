import React from 'react'
import { TbGridDots } from 'react-icons/tb'
import Link from 'next/link'

export default function HomeHeader() {
  return (
    <header className='m-2'>
        <div className='space-x-4 justify-end flex items-center'>
            <Link href='#' className='cursor-pointer hover:underline'>Gmail</Link>
            <Link href='#' className='cursor-pointer hover:underline'>Images</Link>
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2'/>
            <button className='bg-blue-500 px-6 py-2 rounded-md text-white font-medium hover:brightness-105 hover:shadow-md transition-shadow'>Sign In</button>
        </div>
    </header>
  )
}
