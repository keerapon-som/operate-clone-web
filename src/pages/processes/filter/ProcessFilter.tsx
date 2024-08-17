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




const ProcessFilter:any = (props) => {
    // const [selectVersion, setSelectVersion] = useState({});
    const [listVersion, setListVersion] = useState([]);
    // const [listFlownode, setListFlownode] = useState([]);

    const [ComponentControler, setComponentControler] = useState({
        Name: {disabled: false,show: true},
        Version: {disabled: false,show: true},
        Flownode: {disabled: false,show: false},
    });

    function handleClearNameData() {
        props.setFilteredSetup({
            ...props.FilteredSetup,
            Name: {"bpmnProcessId": "", "name": ""},
        });
    }
    

    useEffect(() => {
        if (props.FilteredSetup.Name.name !== '') {
            grouped.map((group) => {
                if (group.bpmnProcessId === props.FilteredSetup.Name.bpmnProcessId) {
                    const tempVersion = group.processes.map((process) => {
                        return { value: process.version, label: String(process.version) }
                    })
                    setListVersion(tempVersion)
                    props.setFilteredSetup({
                        ...props.FilteredSetup,
                        Version: tempVersion[0].value
                    })
                }
            })
            setComponentControler({
                ...ComponentControler,
                Version: {disabled: false,show: true},
                Flownode: {disabled: false,show: true},
            });
        } else {
            setListVersion([])
            props.setFilteredSetup({
                ...props.FilteredSetup,
                Version: ''
            })
            setComponentControler({
                ...ComponentControler,
                Version: {disabled: true,show: true},
                Flownode: {disabled: true,show: true},
            });
        }
    }, [props.FilteredSetup.Name])



    // useEffect(() => {
    //     if (FilteredSetup.Name !== '') {
    //         let versionLists = [];
    //         let flownodeLists = [];

    //     }
    // }, [FilteredSetup.Name])

    const handleSelectChange = (e:any) => {
        if (e.target.id === 'Name') {
            if ( e.target.dataset.key !== "") {
                props.setFilteredSetup({
                    ...props.FilteredSetup,
                    [e.target.id]: JSON.parse(e.target.dataset.key),
                });
            } else {
                props.setFilteredSetup({
                    ...props.FilteredSetup,
                    [e.target.id]: {"bpmnProcessId": "", "name": ""},
                });
            }
        } else {
            props.setFilteredSetup({
                ...props.FilteredSetup,
                [e.target.id]: e.target.dataset.key
            });
        }

    };

    function SelectedValue(value:any) {
        if (value.name === null || value.name === '') {
            return value.bpmnProcessId
        }
        return value.name
    }
    
    return (
        <div>
        <div className="mt-5 mb-3">
            Process
        </div>
        <div >
            <div className="mb-2">
            <label className="font-normal text-xs mb-1">Name</label>
            </div>
            {ComponentControler.Name.show ? <div>
                <Select
                disabled={ComponentControler.Name.disabled}
                id="Name"
                value={SelectedValue(props.FilteredSetup.Name)}
                Placeholder="Search by Process Name"
                options={selectName} 
                className="bg-neutral-700 font-normal py-1 px-5 w-full text-gray-100 border-b border-gray-500 appearance-none" 
                classNameoptions="cursor-pointer text-gray-300 py-2 font-normal border-b border-neutral-500 bg-neutral-700 hover:bg-neutral-600"
                onSelect={handleSelectChange}
                />
            <svg
                onClick={handleClearNameData}
                className="-mt-7 absolute p-1 h-7 w-8 ml-56 z-50 hover:cursor-pointer hover:bg-slate-500" 
                viewBox="0 0 50 50" 
                stroke="#d1d5db"
                >
            <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 33.837 33.837 41 25 41 C 16.163 41 9 33.837 9 25 C 9 16.163 16.163 9 25 9 z M 18.990234 18.490234 C 18.862234 18.490234 18.734219 18.539219 18.636719 18.636719 C 18.441719 18.831719 18.441719 19.14875 18.636719 19.34375 L 24.292969 25 L 18.636719 30.65625 C 18.441719 30.85125 18.441719 31.168281 18.636719 31.363281 C 18.831719 31.558281 19.14875 31.558281 19.34375 31.363281 L 25 25.707031 L 30.65625 31.363281 C 30.85125 31.558281 31.168281 31.558281 31.363281 31.363281 C 31.558281 31.168281 31.558281 30.85125 31.363281 30.65625 L 25.707031 25 L 31.363281 19.34375 C 31.558281 19.14875 31.558281 18.831719 31.363281 18.636719 C 31.168281 18.441719 30.85125 18.441719 30.65625 18.636719 L 25 24.292969 L 19.34375 18.636719 C 19.24625 18.539219 19.118234 18.490234 18.990234 18.490234 z"></path>
            </svg>
            </div>  : null}
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Version</label>
            </div>
                {ComponentControler.Version.show ? <div>
                    <Select
                    disabled={ComponentControler.Version.disabled}
                    id="Version"
                    value={props.FilteredSetup.Version}
                    Placeholder="Select Version"
                    options={listVersion}
                    className={`bg-neutral-700 font-normal py-1 px-5 w-full text-gray-100 border-b border-gray-500 appearance-none ${ComponentControler.Version.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    classNameoptions="cursor-pointer text-gray-300 py-2 font-normal border-b border-neutral-500 bg-neutral-700 hover:bg-neutral-600"
                    onSelect={handleSelectChange}
                    />
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Flow Node</label>
            </div>
                </div> : null}
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