import './layoutFilter.css'

function LayoutFilter(props:any) {
    const {children} = props

    return (
      <>
  <div id="separator-sidebar" className="left-0 z-40 w-80 min-w-80 fullMinusNavbar transition-transform " aria-label="Sidebar">
     <div className="h-full px-3 py-2 overflow-y-auto bg-gray-50 dark:bg-neutral-800 border-t border-r border-neutral-700">
        <ul className="space-y-2 font-medium text-sm dark:text-white">
        <li className="flex justify-between items-center">
            <a className="flex items-center rounded-lg group">
               <span className="">Filter</span>
            </a>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
            </a>
         </li>
           <div className="border-t border-neutral-500">
           {children}
           </div>
        </ul>
     </div>
  </div>
      </>
    )
  }
  
  export default LayoutFilter