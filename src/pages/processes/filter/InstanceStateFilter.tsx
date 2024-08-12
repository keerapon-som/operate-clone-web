import React, { useState } from 'react';
import Select from './components/select';

const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
]



const Process: any = (props) => {
    const state = props.FilteredSetup.InstanceState;
    const setState = props.setFilteredSetup;
    

    const handleClick = (e) => {  
        if (e.target.id === "Running Instances") {
            setState({
                ...props.FilteredSetup,
                InstanceState: {
                    ...state,
                    RunningInstances: !state.RunningInstances,
                    Active: !state.RunningInstances,
                    Incidents: !state.RunningInstances
                }
            });
            
        } else if (e.target.id === "Finished Instances") {
            setState({
                ...props.FilteredSetup,
                InstanceState: {
                    ...state,
                    FinishedInstances: !state.FinishedInstances,
                    Completed: !state.FinishedInstances,
                    Canceled: !state.FinishedInstances
                }
            });
            
        } else {
            setState({
                ...props.FilteredSetup,
                InstanceState: {
                    ...state,
                    [e.target.id]: !state[e.target.id]
                }
            });
        }
    };



    return (
        <div>
            
        <div className="mb-4">
            Instances States
        </div>

        <div className="mb-5">
        <div className="flex items-center">
        <input onClick={handleClick} checked id="Running Instances" type={state.RunningInstances ? "checkbox":""} value="" className="form-checkbox w-4 h-4 text-white border-white-300 rounded focus:ring-white-600 ring-offset-gray-800 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Running Instances</label>
        </div>
        <div>
        <input onClick={handleClick} checked id="Active" type={state.Active ? "checkbox":""} value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Active</label>
        </div>
        <div>
        <input onClick={handleClick} checked id="Incidents" type={state.Incidents ? "checkbox":""} value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Incidents</label>
        </div>

        </div>
        <div className="mb-5">
        <div className="flex items-center">
        <input onClick={handleClick} checked id="Finished Instances" type={state.FinishedInstances ? "checkbox":""} value="" className="form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Finished Instances</label>
        </div>
        <div>
        <input onClick={handleClick} checked id="Completed" type={state.Completed ? "checkbox":""} value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Completed</label>
        </div>
        <div>
        <input onClick={handleClick} checked id="Canceled" type={state.Canceled ? "checkbox":""} value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Canceled</label>
        </div>

        </div>

        </div>
    );
};

export default Process;