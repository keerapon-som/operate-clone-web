import './layoutFilter.css'

function LayoutFilter(props:any) {
    const {children} = props
    const ClickCloseFilter = () => {
         props.setFilterOpened(false)
    }

    return (
      <>
  <div id="separator-sidebar" className="left-0 z-40 min-w-80 fullMinusNavbar transition-transform " aria-label="Sidebar">
     <div className="h-full py-2 overflow-y-auto bg-neutral-800 border-t border-r border-neutral-700">
        <ul className="space-y-3 font-medium text-sm text-white">
        <li className="flex justify-between items-center">
            <a className="flex items-center rounded-lg group">
               <span className="px-4">Filter</span>
            </a>
            <a  onClick={ClickCloseFilter} href="#" className="flex items-center rounded-lg text-white hover:bg-gray-700 group">
            <svg  className="w-12 h-7  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
               <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
            </a>
         </li>
           <div className="border-t px-4 border-neutral-700">
           {children}
           </div>
        </ul>
     </div>
  </div>
      </>
    )
  }
  
  export default LayoutFilter