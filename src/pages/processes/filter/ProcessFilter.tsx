import React, { useState } from 'react';
import Select from './components/select';

const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' },
    { value: '4', label: 'Four' },
    { value: '5', label: 'Five' },
]

const ProcessFilter: React.FC = () => {
    return (
        <div>
        <div className="mt-5 mb-3">
            Process
        </div>
        <div >
            <div className="mb-2">
            <label className="font-normal text-xs mb-1">Name</label>
            </div>
            <Select options={options} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Version</label>
            </div>
            <Select options={options} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
            <div className="mb-2">
            <label className="font-normal text-xs text-neutral-500">Flow Node</label>
            </div>
            <Select options={options} className="relative bg-neutral-700 mb-5" classNameoptions="text-gray-300 bg-neutral-700 text-xs"/>
        </div>
        </div>
    );
};

export default ProcessFilter;