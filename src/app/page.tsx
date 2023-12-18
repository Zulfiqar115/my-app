import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
  
    <div className='flex justify-center item center bg-gray-300 m-10 rounded-3xl shadow-2xl '>
      <div className='w-2/3 text-center me-10'>
      <h1 className='text-red-700 text-4xl m-10 '> Welcome to panaverse</h1>
      <h2 className='text-2xl m-5'> Happy to see you</h2>
      <button className=' border-4 rounded-xl p-3  text-2xl text-white mt-4 mb-4 bg-red-700 shadow-lg'> Get started</button>
      </div>
      <div >
      <img src = "./download.jpeg"  alt = "panaverse logo" className='mt-10 rounded-full' />
     </div>
    </div>
  
       )
}

