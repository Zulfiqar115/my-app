import React from 'react'
import Image from 'next/image'
export default function PricingUi() {
  return (
    <div>
        <section className='w-full flex flex-col items-center'>
          {/*TOP SECTION */}
          <div className='bg-[#6B46C1] h-[394px] text-gray-50 pt-[88px] lg:text-center pl-6 w-full'>
            <h3 className='text-3xl lg:text-5xl leading-10 font-extrabold mb-5'>Simple pricing for your business</h3>
            <p className='text-xl font-medium opacity-[84]]'>Plans that are carefully crafted to suit your business.</p>
          </div>

        {/*MIDDLE SECTION*/}
        <div className='absolute top-[254px] mx-6 lg:justify-center max-auto shadow-xl'>
        {/*Ist SECTION*/}
         <div className='flex flex-col lg:flex-row'>
        <div className='pt-9 px-12 bg-[#F0EAFB] min-w-[382px] text-center rounded-t-lg:rounded-l-lg lg:rounded-tr-non'>:
          <p className='text-2xl font-extrabold text-gray-900'>Premium pro</p>
          <span className=' block mt-4 mb-3 text-5xl font-extrabold'>$329</span>
          <p className='mb-8 text-gray-900 text-lg font-medium'>billed just once</p>
          <button className='bg-[#805AD5] text-gray-50 px-[75px] py-3 rounded-lg mb-7' >Get started</button>

        </div>
        {/*SECOND SECTION*/}
        <div className='pl-4 bg-white shadow-lg lg:rounded-b-lg'>
          <p className='mb-6 mt-10 ' >Access these features when you get this pricing package for your business.</p>
          <div className='flex justify-start gap-x-3 gap-y-4'>
            <Image src={'/Group 172.png'} width={22} height={22} alt='price-image'></Image>
          <span className='text-lg text-gray-700 mb-4'>International calling and messaging API</span>
          </div>
        
        <div className='flex justify-start  gap-x-3 gap-y-4 '>
            <Image src={'/Group 172.png'} width={22} height={22} alt='price-image'></Image>
            <span className='text-lg text-gray-700 mb-4'>Additional phone numbers</span>          
          </div>
        <div className='flex justify-start gap-x-3 gap-y-4'>    
            <Image src={'/Group 172.png'} width={22} height={22} alt='price-image'></Image>
            <span className='text-lg text-gray-700 mb-4'>Automated messages via Zapier</span>          
          </div>
        <div className='flex justify-start gap-x-3 gap-y-4  mb-10'>
          <Image src={'/Group 172.png'} width={22} height={22} alt='price-image'></Image>
          <span className='text-lg text-gray-700 '>24/7 support and consulting</span> 
           </div> 
           </div>
           </div>
           {/*Bottom Section*/}
          *<div className=' w-3/4 p-4 lg:flex lg:justify-between lg:gap-6'>
           <div className='mt-8 flex justify-start pl-2 gap-y-10' >
            <Image src={'/Group 178.png'} width={33} height={33} alt='price-image'></Image>
            <p>30 days money back Guarantes</p>
           </div>
           <div className='mt-8 flex justify-start pl-2 gap-y-10' >
            <Image src={'/Group.png'} width={33} height={33} alt='price-image'></Image>
            <p>No setup fee 100% hassle free</p>
           </div>
           <div className='mt-8 flex justify-start pl-2 gap-y-10' >
            <Image src = {'/Vector.png'} width={33} height={33} alt='price-image'></Image>
            <p>No monthly subscription pay once and for all</p>
            </div>
            </div>
             </div>
</section>
    </div>
  )
}
