import React from 'react'
import Image from 'next/image'
export default function profile() {
  return (
    <div className=" profile flex  justify-center item mt-8">
    <div className='flex justify-center text align-middle '>
      <Image src= "/image.jpg" width = "80" height="0" alt="image" className='mr-4 rounded-full' />
      <div className='mt-8'>
    <h3>Zuslfiqar Mughal</h3>
    <p className="justyfy-center only:item-center">Student at PIAIC</p>
  </div>
</div>
    </div>
     )
  }
