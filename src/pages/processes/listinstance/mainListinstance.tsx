import { useState } from 'react'


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
        <div className="absolute bottom-0 bg-neutral-800" style={{ height: 'calc(25% + 0px)', width: CalFilter }}>
            <div className='p-3 border-t border-state-700'>
            <label className="text-white font-medium text-sm px-4 border-r border-neutral-700">Process Instances   -   1 result</label>
            </div>
              <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right  text-neutral-400">
                      <thead className="text-xs uppercase bg-neutral-700 text-neutral-400">
                          <tr>
                              <th scope="col" className="px-6 py-3">
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
                          <tr className=" bg-neutral-800 border border-neutral-700">
                              <th scope="row" className="px-6 py-2 font-normal  whitespace-nowrap text-white">
                                  Magic Mouse 2
                              </th>
                              <td className="px-6 py-2">
                                  Black
                              </td>
                              <td className="px-6p py-2">
                                  Accessories
                              </td>
                              <td className="px-6 py-2">
                                  $99
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
    </>
  )
}

export default ListInstance
