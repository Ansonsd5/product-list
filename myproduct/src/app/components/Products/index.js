"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';





export default function Products({ products }) {
  const router = useRouter();
  return (
    <div className='max-w-screen-xl mx-auto grid grid-cols1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10 '>
      {products.map((item) => (
        <div onClick={() => router.push(`/singleProduct/${item._id}`)} key={item._id} className='hover:bg-slate-200'>
            
          <div className='border-2 bg-white border-gray-300 rounded-md hover:border-gray-400 duration-300 overflow-hidden p-4 hover:scale-105 cursor-pointer'>
            <Image src={item?.image} alt={item.title} width={500} height={500} className='w-full h-80 object-cover' />
            <div>
              <p>{item?.title}</p>
              <p className='font-semibold'>${item?.price}</p>
              <div className='flex items-center justify-between text-xs text-white py-4'>
                <button className='bg-gray-500 p-2 rounded-md hover:bg-gray-700'>Add to Cart</button>
                <button className='bg-gray-500 p-2 rounded-md hover:bg-gray-700'>More info</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}