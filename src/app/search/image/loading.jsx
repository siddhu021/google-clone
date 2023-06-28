import React from 'react'

export default function loading() {
  return (
    <div className='pt-10 mx-2 lg:pl-52 max-w-6xl flex flex-col sm:flex-row sm:space-x-4 pb-42'>
        <div className='animate-pulse'>
            <div className='h-48 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
        </div>
        <div className='hidden sm:inline-flex sm:space-x-4'>
        <div className='animate-pulse'>
            <div className='h-48 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
        </div>
        <div className='animate-pulse'>
            <div className='h-48 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
        </div>
        <div className='animate-pulse'>
            <div className='h-48 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-48 bg-gray-200 rounded-md mb-2.5'></div>
            <div className='h-2 w-44 bg-gray-200 rounded-md mb-2.5'></div>
        </div>
        </div>
    </div>
  )
}
