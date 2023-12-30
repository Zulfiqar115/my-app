import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    
    <div className='flex justify-center bg-gray-300' m-10>
        <div className='mx-4 order-last'>
            <img src = "./image.png" width={100} height ={100} className='rounded-full'/>
        </div>
        <div className='mx-4 self-center text-center'>
            <h1 className='text-6xl font-bold text-blue-700'> Welcome to NorthBy</h1>
            <h2 className='text-3xl font-semibold text-blue-300'>A premium in sight and sound</h2>
            <button className='my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900'> Learn More</button>
        </div>
  </div>
  ) 
    }  {/********************************************************************/}
       

        {/*=============================================================*/}
      


  
