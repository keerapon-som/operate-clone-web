import React, { useEffect, useState } from 'react';
import Select from './components/select';
import Filter from './mainFilter';

const grouped = [
    {
        "bpmnProcessId": "TheYimIDNA",
        "tenantId": "<default>",
        "name": "eieiTheYIMName",
        "permissions": [],
        "processes": [
            {
                "id": "2251799813685292",
                "name": "eieiTheYIMName",
                "version": 5,
                "bpmnProcessId": "TheYimIDNA"
            },
            {
                "id": "2251799813685284",
                "name": null,
                "version": 4,
                "bpmnProcessId": "TheYimIDNA"
            },
            {
                "id": "2251799813685276",
                "name": "TheYimName@@",
                "version": 3,
                "bpmnProcessId": "TheYimIDNA"
            },
            {
                "id": "2251799813685268",
                "name": "TheYimName",
                "version": 2,
                "bpmnProcessId": "TheYimIDNA"
            },
            {
                "id": "2251799813685260",
                "name": "TheYimName",
                "version": 1,
                "bpmnProcessId": "TheYimIDNA"
            }
        ]
    },
    {
        "bpmnProcessId": "YIMMMZZZZ",
        "tenantId": "<default>",
        "name": null,
        "permissions": [],
        "processes": [
            {
                "id": "2251799813685249",
                "name": null,
                "version": 1,
                "bpmnProcessId": "YIMMMZZZZ"
            }
        ]
    }
]

const selectName = grouped.map((group) => {
    if (group.name === null) {
        return { value: {bpmnProcessId:group.bpmnProcessId, name:group.name}, label: group.bpmnProcessId }
    }
    return { value: {bpmnProcessId:group.bpmnProcessId, name:group.name}, label: group.name }
})

console.log("SelctName", selectName)





const ProcessFilter:any = (props) => {
    // const [selectVersion, setSelectVersion] = useState({});
    const [listVersion, setListVersion] = useState([]);
    // const [listFlownode, setListFlownode] = useState([]);

    useEffect(() => {
        if (props.FilteredSetup.Name.name !== '') {
            grouped.map((group) => {
                if (group.bpmnProcessId === props.FilteredSetup.Name.bpmnProcessId) {
                    const tempVersion = group.processes.map((process) => {
                        return { value: process.version, label: process.version }
                    })
                    setListVersion(tempVersion)
                }
            })
        } else {
            setListVersion([])
        }
    }, [props.FilteredSetup.Name])



    // useEffect(() => {
    //     if (FilteredSetup.Name !== '') {
    //         let versionLists = [];
    //         let flownodeLists = [];

    //     }
    // }, [FilteredSetup.Name])

    const handleSelectChange = (e:any) => {
        console.log("Hello e.target.value", e.target.value)

        if (e.target.id === 'Name') {
            if ( e.target.value !== "") {
                props.setFilteredSetup({
                    ...props.FilteredSetup,
                    [e.target.id]: JSON.parse(e.target.value),
                });
            } else {
                console.log("Hello e.target.value null", e.target.value)
                props.setFilteredSetup({
                    ...props.FilteredSetup,
                    [e.target.id]: {"bpmnProcessId": "", "name": ""},
                });
            }
        } else {
            props.setFilteredSetup({
                ...props.FilteredSetup,
                [e.target.id]: e.target.value
            });
        }

    
        console.log(props.FilteredSetup)
    };
    
    return (
        <div>
        <div className="mt-5 mb-3">
            Process
        </div>
        <div >
            <div className="mb-2">
            <label className="font-normal text-xs mb-1">Name</label>
            </div>
            <Select
                id="Name"
                options={selectName} 
                className="relative bg-neutral-700 mb-5" 
                classNameoptions="text-gray-300 bg-neutral-700 text-xs"
                onChange={handleSelectChange} 
                />
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Version</label>
            </div>
            <Select
                id="Version"
                options={listVersion} 
                className="relative bg-neutral-700 mb-5" 
                classNameoptions="text-gray-300 bg-neutral-700 text-xs"
                onChange={handleSelectChange}
                />
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Flow Node</label>
            </div>
            {/* <Select 
                id="Flownode"
                options={props.FilteredSetup.Flownode} 
                className="relative bg-neutral-700 mb-5" 
                classNameoptions="text-gray-300 bg-neutral-700 text-xs"
                onChange={handleSelectChange}
                /> */}
        </div>
        </div>
    );
};

export default ProcessFilter;