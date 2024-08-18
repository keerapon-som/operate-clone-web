


function BottomBar() {

  return (
    <>
        <div className={`w-6/12 border-r border-state-700` } >
          <div className="text-white font-medium text-sm px-4 py-2.5  border-b border-state-700"> Instance History -   1 result</div>
          <div className=" bg-neutral-800 overflow-auto text-white" >Instance History</div>
            </div>
            <div className={` w-6/12 flex-auto`}>
          <div className="text-white font-medium text-sm px-4 h-10.5 py-2.5 flex-none border-r border-b border-state-700"> Variables</div>
          <div className=" bg-neutral-800 overflow-auto text-white flex-1" >The Flow Node has no Variables</div>
          <div className="text-white font-medium text-sm px-4 py-2.5 h-10.5 flex-none object-position: bottom border-r border-t border-b border-state-700"> Add variables</div>
            </div>
    </>
  )
}

export default BottomBar
