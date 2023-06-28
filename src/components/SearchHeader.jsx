'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { LuSettings } from 'react-icons/lu'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'
import SearchField from './SearchField'

export default function SearchHeader() {
  
  return (
    <header className='sticky top-0 bg-white'>
    <div className='p-4 flex' >
      <Image height='150' width='150' src='https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_1280.png'></Image>
      <div className='ml-5 p-4 items-center flex-1'>
      <SearchField />
            </div>
            <div className='space-x-4 flex items-center '>
            <LuSettings className='iconHover text-4xl p-2 hidden md:inline-flex'/>
            <TbGridDots className='iconHover text-4xl p-2 hidden md:inline-flex'/>
            <button className='bg-blue-500 px-6 py-2 rounded-md text-white font-medium hover:brightness-105 hover:shadow-md transition-shadow'>Sign In</button>
      </div>
    </div>
    <div>
    </div>
    <SearchHeaderOptions />
    </header>
  )
}
