// import { useState } from 'react'
// import Navbar from './layout/navbar'
// import AppRoutes from './routes'
import LayoutFilter from "./layoutFilter"
import ProcessFilter from "./ProcessFilter"
import InstanceStateFilter from "./InstanceStateFilter"
import MoreFilter from "./moreFilter"

function Filter() {
    

  return (
    <>
    <LayoutFilter>
        <ProcessFilter />
        <InstanceStateFilter/>
        <MoreFilter/>
        </LayoutFilter>
    </>
  )
}

export default Filter
