'use client';
import React from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Link from 'next/link';

export default function PaginationButton() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const startIndex = +searchParams.get('start' || 1);
    const router = useRouter();
  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
        {
            (startIndex >= 10) && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                <div className='hover:underline items-center text-blue-700 cursor-pointer'>
                    <BsChevronLeft className='h-5' />
                    <p>Previous</p>
                    </div>
                </Link>
            )
        }
        {
            (startIndex <= 90) && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                <div className='hover:underline items-center text-blue-700 cursor-pointer'>
                    <BsChevronRight className='h-5' />
                    <p>Next</p>
                    </div>
                </Link>
            )
        }
   </div>
  )
}
