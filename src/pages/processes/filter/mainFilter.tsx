import { useState } from 'react'
// import Navbar from './layout/navbar'
// import AppRoutes from './routes'
import LayoutFilter from "./layoutFilter"
import ProcessFilter from "./ProcessFilter"
import InstanceStateFilter from "./InstanceStateFilter"
import MoreFilter from "./moreFilter"

function Filter(props) {
  const active = props.FilterOpened
  const setFilterOpened = props.setFilterOpened
  const ClickOpenFIlter = () => {
    setFilterOpened(true)
  }
  return (
    <>
    {active ? <LayoutFilter setFilterOpened={setFilterOpened}>
        <ProcessFilter />
        <InstanceStateFilter/>
        <MoreFilter/>
        </LayoutFilter> : <div>
        <div className=' bg-neutral-800 border-t border-l border-r text-white border-neutral-700 left-0 z-20 px-2 fullMinusNavbar'>
          
          <a  onClick={ClickOpenFIlter} href="#" className="py-2 flex items-center rounded-lg text-white hover:bg-gray-700 group">
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
            </a>
            <div className="py-6"style={{ transform: 'rotate(-90deg)' }}>Filter</div>
          </div>
        
        </div>}
        
    </>
  )
}

export default Filter