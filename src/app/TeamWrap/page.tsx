import React from 'react'
import Image from 'next/image'
export default function TeamWrap() {
  return (
  
  <div className="container flex justify-around flex-wrap bg-slate-200 mr-20 ml-5 p-4">
    <div className="team-profile m-4">
    <img src="./image.jpg" alt = "img" width ="80" height = "80" className='rounded-full'/>
    <h3>Dr,G.Shabir</h3>
    <p>Founder and CEO</p>
  </div>
  <div className="team-profile m-4">
    <img src= "./image.jpg" alt = "img" width ="80" height = "80"  className='rounded-full'  />
    <h3>Ataul Mohsin Khalid</h3>
    <p>Web Developer</p>
  </div>
  <div className="team-profile m-4">
    <img src= "./image.jpg" alt ="img"width ="80" height = "80" className='rounded-full' />
    <h3>Shmahad Cheema</h3>
    <p>Marketing Specialist</p>
  </div>
  <div className = "team-profile m-4 " >
    <img src = "./image.jpg" alt = "img" width ="80" height = "80" className='rounded-full'/>
    <h3>Zulfiqar Muhammad</h3>
    <p> UX Designer</p>  
</div>
  </div>   
  )
}
