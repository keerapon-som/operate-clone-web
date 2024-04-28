import React from 'react';
import Filter from './filter/mainFilter';
import CanvasBar from './canvanBar/canvasBar';
import './filter/layoutFilter.css'
import ResizableDiv from './filter/function/resizeDIV';
const Processes = () => {
  const filterWidth = 0; // change this value as needed

  return (
    <div className='flex '>
      <Filter />
      <div className="flex-grow ">
        <div className="bg-neutral-800 border border-neutral-700 py-3">
          <label className="text-white font-medium text-sm px-4 border-r border-neutral-700">BPMN_Process_ID</label>
          <label className="text-white font-normal text-sm px-4 ">BPMN_Process_ID</label>
        </div>
        <div className=" bg-neutral-900 text-white" style={{ height: 'calc(72.6% - 48px)', width: '100%' }}>CANVAS</div>

             <div className="bg-neutral-800 " style={{ height: 'calc(25% - 48px)', width: '100%' }}>
            <div className='p-3'>
            <label className="text-white font-medium text-sm px-4 border-r border-neutral-700">Process Instances   -   1 result</label>
            </div>
              <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Apple MacBook Pro 17"
                              </th>
                              <td className="px-6 py-4">
                                  Silver
                              </td>
                              <td className="px-6 py-4">
                                  Laptop
                              </td>
                              <td className="px-6 py-4">
                                  $2999
                              </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Microsoft Surface Pro
                              </th>
                              <td className="px-6 py-4">
                                  White
                              </td>
                              <td className="px-6 py-4">
                                  Laptop PC
                              </td>
                              <td className="px-6 py-4">
                                  $1999
                              </td>
                          </tr>
                          <tr className="bg-white dark:bg-gray-800">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Magic Mouse 2
                              </th>
                              <td className="px-6 py-4">
                                  Black
                              </td>
                              <td className="px-6 py-4">
                                  Accessories
                              </td>
                              <td className="px-6 py-4">
                                  $99
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div className=' bg-neutral-800 border-t border-l border-r text-white border-neutral-700 absolute right-0 z-20 px-4 fullMinusNavbar'>O</div>
    </div>
  )
}

export default Processes;