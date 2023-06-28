import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {
  const startIndex = searchParams.start || '1';
  await new Promise(resolve => setTimeout(resolve, 10000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const results = data.items
    if(!results){
      return(
      <div className='flex justify-center flex-col items-center pt-10 py-2'>
        <h1 className='text-3xl mb-4'>No results Found</h1>
        <p className='text-lg'>Go Back To Home HomePage {"  "}
        <Link className='text-blue-500' href='/'>Home</Link>
        </p>
      </div>
      )
    }

    if(searchParams.searchTerm === 'siddhesh nikam'){
      return(<div className='flex flex-col justify-center items-center pt-10 py-2'>
        <h1 className='text-xl mb-4'>No Need To Google!!!</h1>
        <p className='text-lg'>EveryBody Knows Him.</p>
      </div> )
    }

    return (
      <>
        {
          results && <WebSearchResults results={data} />
        }
      </>
    )
}
