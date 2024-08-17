import { useState, useEffect } from 'react'

const processInstances = {
    "processInstances": [
        {
            "id": "2251799813685312",
            "processId": "2251799813685310",
            "processName": "eieiTheYIMName",
            "processVersion": 6,
            "startDate": "2024-08-17T14:22:27.648+0000",
            "endDate": "2024-08-17T14:22:27.648+0000",
            "state": "COMPLETED",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723904547648",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685312",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685317",
            "processId": "2251799813685301",
            "processName": "eiei",
            "processVersion": 1,
            "startDate": "2024-08-17T14:22:27.648+0000",
            "endDate": "2024-08-17T14:22:27.648+0000",
            "state": "COMPLETED",
            "bpmnProcessId": "eiei_sub_flow",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": "2251799813685312",
            "rootInstanceId": "2251799813685312",
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723904547648",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685317",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685303",
            "processId": "2251799813685301",
            "processName": "eiei",
            "processVersion": 1,
            "startDate": "2024-08-17T14:22:04.262+0000",
            "endDate": "2024-08-17T14:22:04.262+0000",
            "state": "COMPLETED",
            "bpmnProcessId": "eiei_sub_flow",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723904524262",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685303",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685294",
            "processId": "2251799813685292",
            "processName": "eieiTheYIMName",
            "processVersion": 5,
            "startDate": "2024-08-16T15:21:56.466+0000",
            "endDate": null,
            "state": "ACTIVE",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723821716466",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685294",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685286",
            "processId": "2251799813685284",
            "processName": "TheYimIDNA",
            "processVersion": 4,
            "startDate": "2024-08-16T15:18:06.983+0000",
            "endDate": "2024-08-17T14:02:02.260+0000",
            "state": "CANCELED",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [
                {
                    "id": "4bda04c9-c4e2-401c-a85b-8d3f790923d6",
                    "batchOperationId": "6b945bff-84ca-40f8-8f2c-1939057434f0",
                    "type": "CANCEL_PROCESS_INSTANCE",
                    "state": "COMPLETED",
                    "errorMessage": null
                }
            ],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723821486983",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685286",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685278",
            "processId": "2251799813685276",
            "processName": "TheYimName@@",
            "processVersion": 3,
            "startDate": "2024-08-16T15:17:20.121+0000",
            "endDate": null,
            "state": "ACTIVE",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723821440121",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685278",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685270",
            "processId": "2251799813685268",
            "processName": "TheYimName",
            "processVersion": 2,
            "startDate": "2024-08-16T15:15:12.461+0000",
            "endDate": null,
            "state": "ACTIVE",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723821312461",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685270",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685262",
            "processId": "2251799813685260",
            "processName": "TheYimName",
            "processVersion": 1,
            "startDate": "2024-08-16T15:14:20.253+0000",
            "endDate": null,
            "state": "ACTIVE",
            "bpmnProcessId": "TheYimIDNA",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723821260253",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685262",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        },
        {
            "id": "2251799813685251",
            "processId": "2251799813685249",
            "processName": "YIMMMZZZZ",
            "processVersion": 1,
            "startDate": "2024-08-12T06:38:02.730+0000",
            "endDate": null,
            "state": "INCIDENT",
            "bpmnProcessId": "YIMMMZZZZ",
            "hasActiveOperation": false,
            "operations": [],
            "parentInstanceId": null,
            "rootInstanceId": null,
            "callHierarchy": null,
            "tenantId": "<default>",
            "sortValues": [
                {
                    "value": "1723444682730",
                    "valueType": "java.lang.Long"
                },
                {
                    "value": "2251799813685251",
                    "valueType": "java.lang.Long"
                }
            ],
            "permissions": []
        }
    ],
    "totalCount": 9
}



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
        <div className={props.className} style={{ height: 'calc(100% - 30px)' ,position: 'relative'}}>
            <div className={props.isResizing ? `p-3 border-t-2 border-blue-500` : `p-3 border-t border-state-700`}>
            <label className="text-white font-medium text-sm px-2 border-r border-neutral-700">Process Instances   -   1 result</label>
            </div>
              <div>
                  <table className="w-full text-sm text-left rtl:text-right text-neutral-400">
                      <thead className="text-xs uppercase bg-neutral-700 text-neutral-400">
                          <tr >
                          <th scope="col" className="pl-4 px-1 py-2 hover:bg-neutral-600">
                          <input 
                                id="all" 
                                type="checkbox"
                                value="" 
                                className="form-checkbox w-4 h-4 text-white border-white-300 rounded focus:ring-white-600 ring-offset-gray-800 bg-gray-700 border-gray-600" 
                                />
                              </th>
                              <th scope="col" className="pl-3 px-10 w-56 h-4 pb-1 hover:bg-neutral-600">
                                  Name
                              </th>
                              <th scope="col" className="pl-3 px-1 w-64 h-4 pb-1 hover:bg-neutral-600">
                                  Process Instance Key
                              </th>
                              <th scope="col" className="pl-3 px-1 w-32 h-4 pb-1 hover:bg-neutral-600">
                                  Version
                              </th>
                              <th scope="col" className="pl-3 px-1 w-56 h-4 pb-1 hover:bg-neutral-600">
                                  Start Date
                              </th>
                              <th scope="col" className="pl-3 px-1 w-56 h-4 pb-1 hover:bg-neutral-600">
                                  End Date
                              </th>
                              <th scope="col" className="pl-3 px-1 w-72 h-4 pb-1 hover:bg-neutral-600">
                                  Parent Process Instance Key
                              </th>
                              <th scope="col" className="pl-3 px-1 h-4 pb-1 hover:bg-neutral-600">
                                  Operations
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                      {processInstances.processInstances.map(instance => (
                        <tr key={instance.id}>
                        <th scope="col" className="pl-4 px-1 py-2 hover:bg-neutral-600">
                          <input 
                                id={instance.id}
                                type="checkbox"
                                value="" 
                                className="form-checkbox w-4 h-4 text-white border-white-300 rounded focus:ring-white-600 ring-offset-gray-800 bg-gray-700 border-gray-600" 
                                />
                              </th>
                                    <td className="pl-3 px-10 w-56 h-4 pb-1">{instance.processName}</td>
                                    <td className="pl-3 px-1 w-64 h-4 pb-1">{instance.id}</td>
                                    <td className="pl-3 px-1 w-32 h-4 pb-1">{instance.processVersion}</td>
                                    <td className="pl-3 px-1 w-56 h-4 pb-1">{new Date(instance.startDate).toLocaleString()}</td>
                                    <td className="pl-3 px-1 w-56 h-4 pb-1">{instance.endDate ? new Date(instance.endDate).toLocaleString() : '--'}</td>
                                    <td className="pl-3 px-1 w-72 h-4 pb-1">{instance.parentInstanceId || 'None'}</td>
                                </tr>
                                ))}
                      </tbody>
                  </table>
                  <div className="bg-neutral-800 max-h-10" style={{ height: `${750 - props.height}px`, position: 'relative' }}></div>
              </div>
          </div>
    </>
  )
}

export default ListInstance
