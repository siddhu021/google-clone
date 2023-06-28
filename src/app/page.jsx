import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Image from 'next/image'
import HomeSearch from '../components/HomeSearch'

export default function Home() {
  
  return (
    <>

      {/* header */}
      <HomeHeader />

      {/* body */}
      <div className='flex flex-col items-center mt-24'>
        <Image height='100' width='300' src='https://cdn.pixabay.com/photo/2013/01/29/22/07/google-76659_1280.png'/>
        <HomeSearch />
      </div>
    </>
  )
}
