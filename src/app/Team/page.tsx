import React from 'react'
import Image from 'next/image'
export default function Team() {
  return (
    <div>
         <div className="container flex  justify-around bg-slate-200 shadow-2xl text-grey-800 m-4">
  <div className="team-profile text-center px-6 py-4">
    <img src="./image.jpg" alt = "img" width ="80" height = "80" className="mt-10 rounded-full"/>
    <h3 font-bold text-xl>Dr.G.Shabbir</h3>
    <p text-sm text-gray-600>Founder and CEO</p>
  </div>
  <div className="team-profile text-center px-6 py-4">
    <img src= "./image.jpg" alt = "img" width ="80" height = "80"  className='mt-10 rounded-full'  />
    <h3 font-bold text-xl>Attaul Mohsin Khalid</h3>
    <p text-sm text-gray-600>Web Developer</p>
  </div>
  <div className="team-profile text-center px-6 py-4">
    <img src= "./image.jpg" alt ="img"width ="80" height = "80" className='mt-10 rounded-full' />
    <h3 font-bold text-xl itemID='center'>Shamshad Cheema</h3>
    <p text-sm text-gray-600 itemID='center'>Marketing Specialist</p>
  </div>
  <div className = " rounded-full team-profile text-center px-6 py-4">
    <img src = "./image.jpg" alt = "img" width ="80" height = "80" className='mt-10 rounded-full'/>
    <h3 font-bold text-xl itemID='center'>Zulfiqar Muhammad</h3>
    <p text-sm text-gray-600 itemID='center'> UX Designer</p>  
</div>
    </div>
    
    </div>
  )
}
