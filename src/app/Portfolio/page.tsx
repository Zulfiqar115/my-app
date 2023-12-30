import React from 'react'
{/*import { HamburgerMenuIcon } from "ui/react-icons";
import  SheetContent from 'ui/sheet-content/sheet-content';
import { Sheet } from "./ui/sheet";
import { SheetTrigger } from "./ui/sheet";
import Link from "next/link";*/}


export default function portfolio() {
  return (
<div >
    <header className = 'cd-header rounded-md bg-slate-300  justify-around  m-6 p-4'>
      Mughal Camp
      </header>
      {/*<div>

      <Sheet>
    <SheetTrigger>
<HamburgerMenuIcon className="md:hidden h-8 w-10 text-gray-300 bg-gray-950 py-1 rounded-md"/>
</SheetTrigger>
</Sheet>
<SheetContent side={"right"} className="w-44 sm:w-64"> work</SheetContent>
      
  </div>  */}    
      

      <main className='cd-main-content'>
    <div className='container-1'>
    <h1 className='text-6xl font-light content text-center '>P O R T F O L I O</h1>
      <div className='container header-bg-text'>
  
      </div>
      <div className=' text-clip content text-center font-thin text-lg 
      justify-items-center space-x-6'> 
      DIGITAL SOLUTIONS THAT INSPIRE
      <div className='pattern'></div>
      <div className='wraper'></div>
      </div>
    </div>
    </main>
       <div className='footer p-20 m-6 rounde bg-slate-500 text-center 
       font-extrabold justify-items-start'> MUGHAL CAMP
       <div className="container flex justify-center" >
       <button type="button" className=" m-2 py-3 px-4 bg-black text-white text-sm text-center rounded-md"></button>
       <link  href="https://github.com/"></link>
  <button type="button" className=" m-2 py-3 px-4 bg-black text-white text-sm text-center rounded-md"></button>
  <button type="button" className=" m-2 py-3 px-4 bg-black text-white text-sm text-center rounded-md "></button>
  </div>
       <p>Copyright 2023 Mughal Camp</p>
      
       </div>
       
    </div> 
    
    )
  }

