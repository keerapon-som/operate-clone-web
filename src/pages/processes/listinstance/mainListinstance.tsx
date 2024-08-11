import { useState, useEffect } from 'react'


function ListInstance(props) {
    const FilterOpened = props.FilterOpened
    let CalFilter = ''
    if (FilterOpened) {
        CalFilter = 'calc(100% - 320px)'
    } else {
        CalFilter = 'calc(100% - 100px)'
    }


  return (
    <>
        <div className={props.className} style={{ height: 'calc(100% - 30px)' }}>
            <div className={props.isResizing ? `p-3 border-t border-blue-500` : `p-3 border-t border-state-700`}>
            <label className="text-white font-medium text-sm px-4 border-r border-neutral-700">Process Instances   -   1 result</label>
            </div>
              <div>
                  <table className="w-full text-sm text-left rtl:text-right  text-neutral-400">
                      <thead className="text-xs uppercase bg-neutral-700 text-neutral-400">
                          <tr>
                              <th scope="col" className="px-ait py-3">
                                  Product name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Color
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Category
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Price
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className=" border-b bg-neutral-800 border-neutral-700">
                              <th scope="row" className="px-6 py-2 font-medium whitespace-nowrap text-white">
                                  Apple MacBook Pro 17"
                              </th>
                              <td className="px-6 py-2">
                                  Silver
                              </td>
                              <td className="px-6 py-2">
                                  Laptop
                              </td>
                              <td className="px-6 py-2">
                                  $2999
                              </td>
                          </tr>
                          <tr className="border-b bg-neutral-800 border-neutral-700">
                              <th scope="row" className="px-6 py-2 font-medium  whitespace-nowrap text-white">
                                  Microsoft Surface Pro
                              </th>
                              <td className="px-6 py-2">
                                  White
                              </td>
                              <td className="px-6 py-2">
                                  Laptop PC
                              </td>
                              <td className="px-6 py-2">
                                  $1999
                              </td>
                          </tr>
                          
                      </tbody>
                  </table>
                  <div className="bg-neutral-800" style={{ height: `${750 - props.height}px`, position: 'relative' }}>gray</div>
              </div>
          </div>
    </>
  )
}

export default ListInstance
