import React from 'react'

export default function Button() {
  return (
    <>
 <div className="container flex" >
  <button type="button" className="flex-grow m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center rounded-md">Like</button>
  <button type="button" className="flex-grow m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center rounded-md">Share</button>
  <button type="button" className="flex-grow-[2] m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center rounded-md ">Leave a Comment</button>
   </div>
   

  <div className="container flex flex-wrap max-w-xl mx-auto pl-2 mt-4 bg-slate-200 shadow-2xl">
 <button type="button" className="flex-grow m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center rounded-md">Like</button>
<button type="button" className="flex-grow m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center "> Share </button>
 <button type="button" className="flex-grow [3] m-2 py-3 px-4 bg-sky-600 text-white tex-sm text-center rounded-md-10">Leave a Comments</button>
  </div>
  
  </>
  )
}
