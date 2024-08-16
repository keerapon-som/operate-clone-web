// import { useState } from 'react'
// import Navbar from './layout/navbar'
// import AppRoutes from './routes'
import Input from './components/input'

function MoreFilter() {


    return (
      <div>
          <div className="flex justify-end">
                      <li>
            <a href="#" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
            <span className="ms-3 mr-3 font-normal text-base text-blue-400">More Filters</span>
               <svg className="w-5 h-5  text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
               </svg>
            </a>
         </li>
          </div>
          <div>
            <div className='mb-2'>
            <label className="font-normal text-neutral-300">Process Instance Key(s)</label>
            </div>
          <Input className="mb-4" />
          <div className='mb-2'>
            <label className="font-normal  text-neutral-300">Process Instance Key(s)</label>
            </div>
          <Input className="mb-4 " placeholder="Search by Process Name" />
          
       </div>
       </div>
    )
  }
  
  export default MoreFilter
  