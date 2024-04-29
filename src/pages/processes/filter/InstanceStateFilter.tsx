import React, { useState } from 'react';
import Select from './components/select';

const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
]

const Process: React.FC = () => {
    return (
        <div>
            
        <div className="mb-4">
            Instances States
        </div>

        <div className="mb-5">
        <div className="flex items-center me-4">
        <input checked id="red-checkbox" type="checkbox" value="" className="form-checkbox w-4 h-4 text-white border-white-300 rounded focus:ring-white-600 ring-offset-gray-800 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Running Instances</label>
        </div>
        <div>
        <input checked id="red-checkbox" type="checkbox" value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Active</label>
        </div>
        <div>
        <input checked id="red-checkbox" type="checkbox" value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Incidents</label>
        </div>

        </div>
        <div className="mb-5">
        <div className="flex items-center me-4">
        <input checked id="red-checkbox" type="checkbox" value="" className="form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Finished Instances</label>
        </div>
        <div>
        <input checked id="red-checkbox" type="checkbox" value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Completed</label>
        </div>
        <div>
        <input checked id="red-checkbox" type="checkbox" value="" className="ml-5 mt-2 form-checkbox w-4 h-4 text-white bg-white-100 border-white-300 rounded focus:ring-white-500 focus:ring-white-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
            <label htmlFor="red-checkbox" className="ms-2 text-sm font-normal  text-gray-300">Canceled</label>
        </div>

        </div>

        </div>
    );
};

export default Process;